"use client";
import { useMemo, useState } from "react";
import { QUIZ } from "@/content/quiz";
import { useLang } from "@/components/LangProvider";

export function Quiz() {
  const { lang } = useLang();               // ← use global language
  const [started, setStarted] = useState(false);
  const [i, setI] = useState(0);
  const [sel, setSel] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<{ id: string; choice: number }[]>([]);

  const q = QUIZ[i];
  const isLast = i === QUIZ.length - 1;
  const t = <T extends string | string[]>(obj: { en: T; ml: T }) => obj[lang];

  const pct = useMemo(() => Math.round(((i) / QUIZ.length) * 100), [i]);

  function start() {
    setStarted(true);
    setI(0);
    setSel(null);
    setScore(0);
    setAnswers([]);
  }

  function submit() {
    if (sel === null) return;
    if (sel === q.answer) setScore(s => s + 1);
    setAnswers(prev => {
      const next = prev.filter(a => a.id !== q.id);
      next.push({ id: q.id, choice: sel });
      return next;
    });

    if (!isLast) {
      setI(i + 1);
      setSel(null);
    }
  }

  function resetAll() {
    setStarted(false);
    setI(0);
    setSel(null);
    setScore(0);
    setAnswers([]);
  }

  return (
    <div className="p-5 rounded-2xl border bg-white max-w-2xl mx-auto">
      {/* top bar: progress only (language is global via header) */}
      <div className="flex items-center justify-end mb-4">
        <div className="w-40 h-2 bg-neutral-200 rounded overflow-hidden" aria-label="progress">
          <div className="h-full bg-green-600 transition-all" style={{ width: `${pct}%` }} />
        </div>
      </div>

      {!started ? (
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">
            {lang === "en" ? "Quick Quiz" : "വേഗത്തിലുള്ള ക്വിസ്"}
          </h2>
          <p className="text-sm opacity-80">
            {lang === "en"
              ? "Learn one useful idea from space in under a minute."
              : "ഒരു മിനിറ്റിനുള്ളിൽ സ്‌പേസിൽ നിന്നുള്ള ഒരു ഉപകാരപ്രദമായ ആശയം."}
          </p>
          <button onClick={start} className="mt-2 px-3 py-2 border rounded-lg bg-green-50 border-green-600 text-green-700 hover:bg-green-600 hover:text-white">
            {lang === "en" ? "Start Quiz" : "ക்வിസ് ആരംഭിക്കുക"}
          </button>
        </div>
      ) : (
        <>
          <div className="text-sm mb-2">
            {lang === "en" ? "Question" : "ചോദ്യം"} {i + 1} / {QUIZ.length}
          </div>
          <h2 className="font-semibold text-lg mb-3">{t(q.q)}</h2>

          <div className="space-y-2">
            {t(q.options).map((opt, idx) => {
              const active = sel === idx;
              return (
                <label
                  key={idx}
                  className={`block border rounded-lg p-2 cursor-pointer transition-colors ${
                    active ? "bg-green-50 border-green-600" : "hover:bg-neutral-50"
                  }`}
                >
                  <input
                    type="radio"
                    className="mr-2"
                    checked={sel === idx}
                    onChange={() => setSel(idx)}
                  />
                  {opt}
                </label>
              );
            })}
          </div>

          {sel !== null && (
            <p className={`mt-3 text-sm ${sel === q.answer ? "text-green-700" : "text-red-700"}`}>
              {sel === q.answer ? (lang === "en" ? "✅ Correct" : "✅ ശരിയാണ്") : "❌"}
              {" — "}
              {t(q.explain)}
            </p>
          )}

          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm">
              {lang === "en" ? "Score" : "സ്കോർ"}: {score}
            </div>
            <button
              onClick={submit}
              className="px-3 py-2 border rounded-lg bg-green-600 text-white hover:brightness-95"
            >
              {isLast ? (lang === "en" ? "Finish" : "പൂർത്തിയാക്കുക") : (lang === "en" ? "Next" : "അടുത്തത്")}
            </button>
          </div>

          {isLast && sel !== null && (
            <div className="mt-5 p-4 border rounded-xl bg-neutral-50">
              <div className="font-medium mb-2">
                {lang === "en" ? "Quiz complete!" : "ക്വിസ് പൂർത്തിയായി!"}
              </div>
              <div className="mb-3">
                {lang === "en" ? "Final score" : "അവസാന സ്കോർ"}: {score} / {QUIZ.length}
              </div>
              <ul className="list-disc pl-6 space-y-1">
                {QUIZ.map((item) => {
                  const a = answers.find((x) => x.id === item.id);
                  const chosen = a?.choice ?? -1;
                  const correct = chosen === item.answer;
                  const opts = t(item.options);
                  return (
                    <li key={item.id} className={correct ? "text-green-700" : "text-red-700"}>
                      {t(item.q)} — {correct ? (lang === "en" ? "Correct" : "ശരി") : (lang === "en" ? "Your answer was" : "നിങ്ങളുടെ ഉത്തരം")}{" "}
                      {chosen >= 0 ? opts[chosen] : (lang === "en" ? "No answer" : "ഉത്തരം ഇല്ല")}
                    </li>
                  );
                })}
              </ul>

              <div className="mt-4 flex gap-2">
                <button onClick={start} className="px-3 py-2 border rounded-lg">
                  {lang === "en" ? "Try again" : "വീണ്ടും ശ്രമിക്കുക"}
                </button>
                <button onClick={resetAll} className="px-3 py-2 border rounded-lg">
                  {lang === "en" ? "Exit" : "പുറത്തുകടക്കുക"}
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
