"use client";
import { useState, useMemo } from "react";
import { useLang } from "@/components/LangProvider";
import { t } from "@/lib/i18n";
import Link from "next/link";

type Bi<T = string> = { en: T; ml: T };

type LikertQ = {
  id: string;
  text: Bi;                // question text
  invert?: boolean;        // if true, reverse the score (for positively worded items)
};

// 5-point Likert labels (same for all questions)
const SCALE: { value: number; label: Bi }[] = [
  { value: 1, label: { en: "Strongly disagree", ml: "മുഴുവൻ വിയോജിക്കുന്നു" } },
  { value: 2, label: { en: "Disagree",          ml: "വിയോജിക്കുന്നു" } },
  { value: 3, label: { en: "Neutral",           ml: "ഇടത്തരം" } },
  { value: 4, label: { en: "Agree",             ml: "അംഗീകരിക്കുന്നു" } },
  { value: 5, label: { en: "Strongly agree",    ml: "മുഴുവൻ അംഗീകരിക്കുന്നു" } },
];

// 6 brief items mapping to stress-vulnerability in confined/novel environments.
// invert=true means higher response indicates *lower* vulnerability (so we reverse it).
const QUESTIONS: LikertQ[] = [
  {
    id: "control",
    text: {
      en: "When plans change suddenly, I feel tense and lose focus.",
      ml: "പദ്ധതികൾ അപ്രതീക്ഷിതമായി മാറ്റുമ്പോൾ, ഞാൻ ഉത്കണ്ഠയും ശ്രദ്ധക്കുറവും അനുഭവിക്കുന്നു.",
    },
  },
  {
    id: "teamtrust",
    text: {
      en: "I find it hard to ask teammates for help when I’m stressed.",
      ml: "ഞാൻ സമ്മർദ്ദത്തിലായപ്പോൾ സഹപ്രവർത്തകരോട് സഹായം ചോദിക്കുക എനിക്കു ബുദ്ധിമുട്ടാണ്.",
    },
  },
  {
    id: "sleep",
    text: {
      en: "My sleep gets disrupted easily when my routine changes.",
      ml: "എന്റെ പതിവ് മാറുമ്പോൾ എന്റെ ഉറക്കം എളുപ്പത്തിൽ വ്യതിചലിക്കുന്നു.",
    },
  },
  {
    id: "reframe",
    text: {
      en: "I can reframe setbacks quickly and move on.",
      ml: "അടച്ചുപിടുത്തങ്ങളെ ഞാൻ വേഗത്തിൽ പുതുക്കിക്കണ്ട് മുന്നോട്ടുപോകാൻ കഴിയും.",
    },
    invert: true,
  },
  {
    id: "checklists",
    text: {
      en: "Simple checklists and pauses help me reduce mistakes.",
      ml: "എളുപ്പപ്പെട്ട ചെക്ക്‌ലിസ്റ്റുകളും ചെറു ഇടവേളകളും പിഴവുകൾ കുറയ്ക്കാൻ എനിക്ക് സഹായിക്കുന്നു.",
    },
    invert: true,
  },
  {
    id: "isolation",
    text: {
      en: "Working alone for long periods makes me more irritable.",
      ml: "ദീർഘസമയം ഒറ്റയ്ക്ക് ജോലി ചെയ്യുന്നത് എനിക്ക് ആശയക്കുഴപ്പവും അസ്വസ്ഥതയും ഉണ്ടാക്കുന്നു.",
    },
  },
];

const ui = {
  title: { en: "Play — Stress Readiness Check", ml: "പ്ലേ — സമ്മർദ്ദ റെഡിനസ് ചെക്ക്" },
  intro: {
    en: "Answer 6 quick questions. You’ll get a small summary about stress in microgravity-like conditions and tips from astronaut routines.",
    ml: "6 ദ്രുത ചോദ്യങ്ങൾക്ക് മറുപടി നൽകൂ. മൈക്രോഗ്രാവിറ്റി പോലുള്ള സാഹചര്യങ്ങളിലെ സമ്മർദ്ദത്തെപ്പറ്റിയും ആസ്ട്രോണോട്ടുകളുടെ രീതികളിൽ നിന്ന് ഉപദേശങ്ങളും ലഭിക്കും."
  },
  progress: { en: "Question", ml: "ചോദ്യം" },
  back: { en: "Back", ml: "മടങ്ങുക" },
  next: { en: "Next", ml: "അടുത്തത്" },
  finish: { en: "See result", ml: "ഫലം കാണുക" },
  retake: { en: "Retake", ml: "വീണ്ടും ചെയ്യുക" },
  resultTitle: { en: "Your Stress Readiness", ml: "നിങ്ങളുടെ സമ്മർദ്ദ റെഡിനസ്" },
  note: {
    en: "This is a learning tool, not a diagnosis.",
    ml: "ഇത് പഠനത്തിനുള്ള ഉപകരണമാണ്, നിരീക്ഷണമോ രോഗനിർണയമല്ല."
  },
  buckets: {
    low: {
      title: { en: "Low vulnerability", ml: "കുറഞ്ഞ ദൗർബല്യം" },
      msg: {
        en: "You show good readiness for change and teamwork. Keep using checklists, brief pauses, and reframing.",
        ml: "മാറ്റത്തെയും ടീമ്വർക്കിനെയും നിങ്ങൾ നന്നായി ഏറ്റെടുക്കുന്നു. ചെക്ക്‌ലിസ്റ്റുകളും ചെറു ഇടവേളകളും റീഫ്രെയിമിംഗും തുടർന്നു പാലിക്കുക."
      }
    },
    mid: {
      title: { en: "Moderate vulnerability", ml: "ഇടത്തരം ദൗർബല്യം" },
      msg: {
        en: "Some stressors may affect sleep or focus. Try the 1-minute breathing drill and light-timing habits.",
        ml: "ചില സമ്മർദ്ദങ്ങൾ ഉറക്കത്തേയും ശ്രദ്ധയെയും ബാധിക്കാം. 1-മിനിറ്റ് ശ്വാസ വ്യായാമവും വെളിച്ച സമയനവും പരീക്ഷിക്കുക."
      }
    },
    high: {
      title: { en: "Higher vulnerability", ml: "കൂടുതൽ ദൗർബല്യം" },
      msg: {
        en: "Consider structured routines: checklists, buddy support, and short resets. Start with the Try page breathing tool.",
        ml: "സംഘടിത രീതികൾ പരിഗണിക്കുക: ചെക്ക്‌ലിസ്റ്റുകൾ, കൂട്ടാളി പിന്തുണ, ചെറു റീസെറ്റുകൾ. ‘ട്രൈ’ പേജിലെ ശ്വാസ ഉപകരണത്തിൽ നിന്ന് തുടങ്ങൂ."
      }
    }
  },
  ctas: {
    try: { en: "Do the 1-minute breathing", ml: "1-മിനിറ്റ് ശ്വാസം ചെയ്യൂ" },
    learn: { en: "Learn: routines & fluids", ml: "ലേൺ: രീതികളും ദ്രവങ്ങളും" }
  }
};

export default function PlayPage() {
  const { lang } = useLang();
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(QUESTIONS.length).fill(0)); // 0 = unanswered
  const [done, setDone] = useState(false);

  const pct = useMemo(() => Math.round((i / QUESTIONS.length) * 100), [i]);

  function pick(val: number) {
    const next = answers.slice();
    next[i] = val;
    setAnswers(next);
  }

  function next() {
    if (i < QUESTIONS.length - 1) setI(i + 1);
    else setDone(true);
  }

  function back() {
    if (i > 0) setI(i - 1);
  }

  function reset() {
    setI(0);
    setAnswers(Array(QUESTIONS.length).fill(0));
    setDone(false);
  }

  // compute score (higher = more vulnerability)
  const { total, max, bucket } = useMemo(() => {
    let raw = 0;
    const maxScore = QUESTIONS.length * 5;
    QUESTIONS.forEach((q, idx) => {
      const v = answers[idx] || 0;
      if (!v) return;
      const score = q.invert ? 6 - v : v; // reverse if invert
      raw += score;
    });
    // thresholds: <= 35% low, 35–65% mid, > 65% high
    const pct = (raw / maxScore) * 100;
    const b = pct <= 35 ? "low" : pct <= 65 ? "mid" : "high";
    return { total: raw, max: maxScore, bucket: b as "low" | "mid" | "high" };
  }, [answers]);

  if (done) {
    const b = ui.buckets[bucket];
    return (
      <section className="max-w-2xl mx-auto p-6 space-y-5">
        <h1 className="text-2xl font-bold">{t(lang, ui.resultTitle)}</h1>

        <div className="p-5 border rounded-2xl bg-white space-y-2">
          <div className="text-lg font-semibold">{t(lang, b.title)}</div>
          <div className="text-neutral-700">{t(lang, b.msg)}</div>
          <div className="text-sm text-neutral-500 mt-2">{t(lang, ui.note)}</div>

          <div className="mt-4 flex gap-3">
            <button onClick={reset} className="px-3 py-2 border rounded-lg">
              {t(lang, ui.retake)}
            </button>
            <Link
              href="/try"
              className="px-3 py-2 rounded-lg bg-green-600 text-white hover:brightness-95"
            >
              {t(lang, ui.ctas.try)}
            </Link>
            <Link
              href="/learn"
              className="px-3 py-2 rounded-lg border bg-white hover:bg-neutral-50"
            >
              {t(lang, ui.ctas.learn)}
            </Link>
          </div>
        </div>

        <div className="text-sm text-neutral-500">
          Score: {total} / {max}
        </div>
      </section>
    );
  }

  const q = QUESTIONS[i];

  return (
    <section className="max-w-2xl mx-auto p-6 space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold">{t(lang, ui.title)}</h1>
        <p className="text-neutral-700">{t(lang, ui.intro)}</p>
      </header>

      {/* progress */}
      <div className="flex items-center justify-between">
        <div className="text-sm">
          {t(lang, ui.progress)} {i + 1} / {QUESTIONS.length}
        </div>
        <div className="w-40 h-2 bg-neutral-200 rounded overflow-hidden">
          <div className="h-full bg-green-600 transition-all" style={{ width: `${pct}%` }} />
        </div>
      </div>

      {/* question card */}
      <article className="p-5 border rounded-2xl bg-white space-y-3">
        <h2 className="font-medium">{t(lang, q.text)}</h2>

        <div className="grid gap-2">
          {SCALE.map((s) => {
            const checked = answers[i] === s.value;
            return (
              <label
                key={s.value}
                className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition-colors ${
                  checked ? "bg-green-50 border-green-600" : "hover:bg-neutral-50"
                }`}
              >
                <input
                  type="radio"
                  name={`q-${q.id}`}
                  className="accent-green-600"
                  checked={checked}
                  onChange={() => pick(s.value)}
                />
                <span>{t(lang, s.label)}</span>
              </label>
            );
          })}
        </div>
      </article>

      <div className="flex justify-between">
        <button
          onClick={back}
          disabled={i === 0}
          className={`px-3 py-2 border rounded-lg ${i === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {t(lang, ui.back)}
        </button>

        <button
          onClick={next}
          disabled={!answers[i]}
          className={`px-3 py-2 rounded-lg ${answers[i] ? "bg-green-600 text-white hover:brightness-95" : "border opacity-60 cursor-not-allowed"}`}
        >
          {i === QUESTIONS.length - 1 ? t(lang, ui.finish) : t(lang, ui.next)}
        </button>
      </div>
    </section>
  );
}