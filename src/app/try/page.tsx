"use client";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/components/LangProvider";
import { t } from "@/lib/i18n";

/* ================== COPY (bilingual) ================== */
const copy = {
  title: { en: "Try — Astronaut Tools", ml: "ട്രൈ — ആസ്ട്രോണോട്ട് ഉപകരണങ്ങൾ" },
  intro: {
    en: "Three quick tools astronauts use to manage stress and stay effective.",
    ml: "സമ്മർദ്ദം കൈകാര്യം ചെയ്യാനും ഫലപ്രദമായി തുടരാനുമായി ആസ്ട്രോണോട്ടുകൾ ഉപയോഗിക്കുന്ന മൂന്നു ദ്രുത ഉപകരണങ്ങൾ."
  },

  // (1) Breathing (UNCHANGED)
  b_title: { en: "1-minute Breathing", ml: "1-മിനിറ്റ് ശ്വാസ വ്യായാമം" },
  b_intro: {
    en: "Follow the rhythm: Inhale 4s • Hold 2s • Exhale 6s. Repeat for one minute.",
    ml: "റിതം പിന്തുടരുക: ശ്വസിക്കുക 4സെ • നിശ്ചലം 2സെ • ശ്വസനം വിടുക 6സെ. ഒരു മിനിറ്റ് ആവർത്തിക്കുക."
  },
  inhale: { en: "Inhale", ml: "ശ്വസിക്കുക" },
  hold:   { en: "Hold",   ml: "നിശ്ചലം" },
  exhale: { en: "Exhale", ml: "ശ്വസനം വിടുക" },
  start:  { en: "Start",  ml: "ആരംഭിക്കുക" },
  stop:   { en: "Stop",   ml: "നിറുത്തുക" },
  reset:  { en: "Reset",  ml: "റീസെറ്റ്" },
  tip: {
    en: "Tip: Relax shoulders and breathe softly through the nose.",
    ml: "ടിപ്പ്: തോളുകൾ ആശ്വാസപ്പെടുത്തുക, മൂക്കിലൂടെ മൃദുവായി ശ്വസിക്കുക."
  },

  // (2) Grounding
  g_title: { en: "Grounding 5-4-3-2-1", ml: "ഗ്രൗണ്ടിംഗ് 5-4-3-2-1" },
  g_desc: {
    en: "Notice 5 things you see, 4 feel, 3 hear, 2 smell, 1 taste. Use counters below.",
    ml: "5 കാണുന്നവ, 4 സ്പർശിക്കുന്നവ, 3 കേൾക്കുന്നവ, 2 മണക്കുന്നവ, 1 രുചിക്കുന്നവ. താഴെ കൗണ്ടറുകൾ ഉപയോഗിക്കുക."
  },
  see:   { en: "Things you see",   ml: "കാണുന്നവ" },
  feel:  { en: "Things you feel",  ml: "സ്പർശിക്കുന്നവ" },
  hear:  { en: "Things you hear",  ml: "കേൾക്കുന്നവ" },
  smell: { en: "Things you smell", ml: "മണക്കുന്നവ" },
  taste: { en: "Thing you taste",  ml: "രുചിക്കുന്നവ" },
  done:  { en: "Done!", ml: "പൂർത്തിയായി!" },
  resetG:{ en: "Reset counters", ml: "കൗണ്ടറുകൾ റീസെറ്റ്" },

  // (3) Micro-Pause
  m_title: { en: "Micro-Pause Reset (30s)", ml: "മൈക്രോ-പോസ് റീസെറ്റ് (30സെ)" },
  m_desc: {
    en: "Between tasks: sit/stand tall, 2 deep breaths, quick arm stretch, focus on one calming word.",
    ml: "ജോലികളിടയിൽ: നിവർന്ന് ഇരിക്കുക/നിൽക്കുക, 2 ആഴത്തിലുള്ള ശ്വാസങ്ങൾ, വേഗത്തിൽ കൈ നീട്ടൽ, ഒരു ശാന്തമായ വാക്കിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കുക."
  },
  m_start: { en: "Start 30s", ml: "30സെ ആരംഭിക്കുക" },
  m_stop:  { en: "Stop",     ml: "നിർത്തുക" },
  m_reset: { en: "Reset",    ml: "റീസെറ്റ്" },
};

/* ================== PAGE ================== */
type Phase = "inhale" | "hold" | "exhale";

export default function TryPage() {
  const { lang } = useLang();

  /* ---------- (1) Breathing state (UNCHANGED) ---------- */
  const [phase, setPhase] = useState<Phase>("inhale");
  const [running, setRunning] = useState(false);
  const [count, setCount] = useState(4);
  const timer = useRef<NodeJS.Timeout | null>(null);
  const durations = { inhale: 4, hold: 2, exhale: 6 };

  useEffect(() => {
    if (!running) return;
    timer.current = setInterval(() => setCount((c) => c - 1), 1000);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [running, phase]);

  useEffect(() => {
    if (!running) return;
    if (count <= 0) {
      setPhase((p) => {
        const order: Phase[] = ["inhale", "hold", "exhale"];
        const next = order[(order.indexOf(p) + 1) % order.length];
        setCount(durations[next]);
        return next;
      });
    }
  }, [count, running]);

  function start() {
    setPhase("inhale");
    setCount(durations.inhale);
    setRunning(true);
  }
  function stop() {
    setRunning(false);
    if (timer.current) clearInterval(timer.current);
  }
  function reset() {
    stop();
    setPhase("inhale");
    setCount(durations.inhale);
  }
  const label = phase === "inhale" ? copy.inhale : phase === "hold" ? copy.hold : copy.exhale;

  /* ---------- (2) Grounding counters ---------- */
  const target = { see: 5, feel: 4, hear: 3, smell: 2, taste: 1 };
  const [g, setG] = useState({ see: 0, feel: 0, hear: 0, smell: 0, taste: 0 });
  const inc = (k: keyof typeof g) =>
    setG((prev) => ({ ...prev, [k]: Math.min(prev[k] + 1, target[k]) }));
  const dec = (k: keyof typeof g) =>
    setG((prev) => ({ ...prev, [k]: Math.max(prev[k] - 1, 0) }));
  const resetG = () => setG({ see: 0, feel: 0, hear: 0, smell: 0, taste: 0 });
  const gDone =
    g.see === target.see &&
    g.feel === target.feel &&
    g.hear === target.hear &&
    g.smell === target.smell &&
    g.taste === target.taste;

  /* ---------- (3) Micro-Pause timer ---------- */
  const [mp, setMp] = useState({ t: 30, on: false });
  useEffect(() => {
    if (!mp.on) return;
    if (mp.t === 0) { setMp({ t: 30, on: false }); return; }
    const id = setTimeout(() => setMp((s) => ({ ...s, t: s.t - 1 })), 1000);
    return () => clearTimeout(id);
  }, [mp]);

  return (
    <section className="max-w-3xl mx-auto p-6 space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">{t(lang, copy.title)}</h1>
        <p className="text-neutral-700">{t(lang, copy.intro)}</p>
      </header>

      {/* ========== (1) BREATHING — UNCHANGED ========== */}
      <article className="p-6 border rounded-2xl bg-white space-y-3">
        <h2 className="text-xl font-semibold">{t(lang, copy.b_title)}</h2>
        <p className="text-neutral-700">{t(lang, copy.b_intro)}</p>

        <div className="flex flex-col items-center gap-3">
          <div className="text-lg font-medium">{t(lang, label)}</div>
          <div className="text-5xl font-bold tabular-nums">{count}s</div>

          <div
            className="w-40 h-40 rounded-full border-4 border-green-600"
            style={{
              transform:
                phase === "inhale" ? "scale(1.05)" :
                phase === "hold"   ? "scale(1.0)"  :
                                     "scale(0.95)",
              transition: "transform 1s ease-in-out"
            }}
            aria-hidden
          />

          <div className="flex gap-3 mt-2">
            {!running ? (
              <button onClick={start} className="px-4 py-2 border rounded-lg bg-green-600 text-white">
                {t(lang, copy.start)}
              </button>
            ) : (
              <button onClick={stop} className="px-4 py-2 border rounded-lg">
                {t(lang, copy.stop)}
              </button>
            )}
            <button onClick={reset} className="px-4 py-2 border rounded-lg">
              {t(lang, copy.reset)}
            </button>
          </div>
        </div>

        <p className="text-sm text-neutral-600">{t(lang, copy.tip)}</p>
      </article>

      {/* ========== (2) GROUNDING ==========
          Interactive counters with caps at 5-4-3-2-1 */}
      <article className="p-6 border rounded-2xl bg-white space-y-4">
        <h2 className="text-xl font-semibold">{t(lang, copy.g_title)}</h2>
        <p className="text-neutral-700">{t(lang, copy.g_desc)}</p>

        <div className="grid gap-3">
          {([
            ["see", copy.see],
            ["feel", copy.feel],
            ["hear", copy.hear],
            ["smell", copy.smell],
            ["taste", copy.taste],
          ] as const).map(([key, label]) => (
            <div key={key} className="flex items-center justify-between border rounded-xl p-3">
              <div className="font-medium">{t(lang, label)}</div>
              <div className="flex items-center gap-2">
                <button onClick={() => dec(key)} className="px-3 py-1 border rounded-lg">−</button>
                <div className="w-10 text-center font-mono">
                  {g[key as keyof typeof g]} / {target[key as keyof typeof g]}
                </div>
                <button onClick={() => inc(key)} className="px-3 py-1 border rounded-lg">+</button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button onClick={resetG} className="px-3 py-2 border rounded-lg">
            {t(lang, copy.resetG)}
          </button>
          {gDone && <span className="text-green-700 font-medium">{t(lang, copy.done)}</span>}
        </div>
      </article>

      {/* ========== (3) MICRO-PAUSE RESET (30s) ========== */}
      <article className="p-6 border rounded-2xl bg-white space-y-3">
        <h2 className="text-xl font-semibold">{t(lang, copy.m_title)}</h2>
        <p className="text-neutral-700">{t(lang, copy.m_desc)}</p>

        <div className="flex items-center gap-3">
          {!mp.on ? (
            <button
              onClick={() => setMp({ t: 30, on: true })}
              className="px-4 py-2 rounded-lg bg-green-600 text-white hover:brightness-95"
            >
              {t(lang, copy.m_start)}
            </button>
          ) : (
            <button
              onClick={() => setMp((s) => ({ ...s, on: false }))}
              className="px-4 py-2 border rounded-lg"
            >
              {t(lang, copy.m_stop)}
            </button>
          )}
          <button
            onClick={() => setMp({ t: 30, on: false })}
            className="px-4 py-2 border rounded-lg"
          >
            {t(lang, copy.m_reset)}
          </button>

          <div className="text-2xl font-mono tabular-nums">{mp.t}s</div>
        </div>
      </article>
    </section>
  );
}