"use client";
import Link from "next/link";
import { useLang } from "@/components/LangProvider";
import { t } from "@/lib/i18n";

const copy = {
  appName: { en: "Gagana Sahayi", ml: "ഗഗന സഹായി" },
  motto: {
    en: "Space for People — calm, focus, and fun!",
    ml: "എല്ലാർക്കും സ്പേസ് — ശാന്തത, ശ്രദ്ധ, കളിയും!"
  },
  sub: {
    en: "Learn astronaut habits, try quick wellbeing tools, and play myth-busting games.",
    ml: "ആസ്ട്രോനോട്ടുകളുടെ ശീലങ്ങൾ പഠിക്കൂ, ദ്രുത വെൽബീയിംഗ് ഉപകരണങ്ങൾ പരീക്ഷിക്കൂ, മിഥ്യകളെ പൊളിക്കുന്ന ഗെയിംസും കളിക്കൂ."
  },
  badges: [
    { en: "🚀 Space for everyone", ml: "🚀 എല്ലാവർക്കും സ്പേസ്" },
    { en: "💨 1-min tools",        ml: "💨 1-മിനിറ്റ് ഉപകരണങ്ങൾ" },
    { en: "🧠 Brain & body",       ml: "🧠 മസ്തിഷ്കവും ശരീരവും" },
  ],
  ctaLearn: { en: "Learn", ml: "ലേൺ" },
  ctaTry:   { en: "Try",   ml: "ട്രൈ" },
  ctaPlay:  { en: "Play",  ml: "പ്ലേ" },
  ctaQuiz:  { en: "Quiz",  ml: "ക്വിസ്" },
  sectionsH: { en: "What’s inside", ml: "അകത്ത് എന്തുണ്ട്" },
  sec1H: { en: "Learn", ml: "ലേൺ" },
  sec1P: {
    en: "Breathing, fluid shift, routines — simple science with stories.",
    ml: "ശ്വാസം, ദ്രവമാറ്റം, രീതികൾ — കഥകളോടെ ലളിത ശാസ്ത്രം."
  },
  sec2H: { en: "Try", ml: "ട്രൈ" },
  sec2P: {
    en: "1-minute breathing, grounding, micro-pause reset.",
    ml: "1-മിനിറ്റ് ശ്വാസം, ഗ്രൗണ്ടിംഗ്, മൈക്രോ-പോസ് റീസെറ്റ്."
  },
  sec3H: { en: "Play", ml: "പ്ലേ" },
  sec3P: {
    en: "Quick self-check about stress in ‘space-like’ conditions.",
    ml: "‘സ്പേസ് പോലെ’ സാഹചര്യങ്ങളിലെ സമ്മർദ്ദത്തെപ്പറ്റിയുള്ള ചെറിയ സ്വയം പരിശോധന."
  },
  sec4H: { en: "Quiz", ml: "ക്വിസ്" },
  sec4P: {
    en: "Bust myths and track your progress.",
    ml: "മിഥ്യകൾ പൊളിക്കൂ, നിങ്ങളുടെ പുരോഗതി നോക്കൂ."
  },
};

export default function Home() {
  const { lang } = useLang();

  return (
    <section className="relative overflow-hidden">
      {/* soft colorful blobs in the background */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-40"
           style={{ background: "radial-gradient(circle at 30% 30%, #a78bfa, transparent 60%)" }} />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full blur-3xl opacity-40"
           style={{ background: "radial-gradient(circle at 70% 70%, #34d399, transparent 60%)" }} />
      <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full blur-3xl opacity-30"
           style={{ background: "radial-gradient(circle, #60a5fa, transparent 60%)" }} />

      {/* HERO */}
      <div className="relative mx-auto max-w-5xl px-6 pt-10 pb-8">
        <div className="rounded-3xl p-[1px] bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400">
          <div className="rounded-3xl bg-white/70 backdrop-blur-md px-6 py-10 md:px-10 md:py-14 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600 bg-clip-text text-transparent">
              {t(lang, copy.appName)}
            </h1>
            <p className="mt-3 text-lg md:text-xl text-neutral-800">
              {t(lang, copy.motto)}
            </p>
            <p className="mt-2 text-neutral-700 max-w-2xl mx-auto">
              {t(lang, copy.sub)}
            </p>

            {/* fun badges */}
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {copy.badges.map((b, i) => (
                <span key={i} className="rounded-full px-3 py-1 text-sm bg-gradient-to-r from-fuchsia-200 via-rose-200 to-amber-200 border border-white/60 shadow-sm">
                  {t(lang, b)}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link href="/learn" className="px-5 py-3 rounded-xl text-white shadow-md hover:brightness-95 bg-gradient-to-r from-sky-500 to-indigo-500">
                {t(lang, copy.ctaLearn)}
              </Link>
              <Link href="/try" className="px-5 py-3 rounded-xl text-white shadow-md hover:brightness-95 bg-gradient-to-r from-emerald-500 to-teal-500">
                {t(lang, copy.ctaTry)}
              </Link>
              <Link href="/play" className="px-5 py-3 rounded-xl text-white shadow-md hover:brightness-95 bg-gradient-to-r from-pink-500 to-rose-500">
                {t(lang, copy.ctaPlay)}
              </Link>
              <Link href="/quiz" className="px-5 py-3 rounded-xl text-white shadow-md hover:brightness-95 bg-gradient-to-r from-amber-500 to-orange-500">
                {t(lang, copy.ctaQuiz)}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* WHAT’S INSIDE */}
      <div className="relative mx-auto max-w-5xl px-6 pb-10">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
          {t(lang, copy.sectionsH)}
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Learn */}
          <Card color="from-sky-100 to-indigo-100" border="from-sky-400 to-indigo-400"
                title={t(lang, copy.sec1H)} desc={t(lang, copy.sec1P)} href="/learn" emoji="📚" />
          {/* Try */}
          <Card color="from-emerald-100 to-teal-100" border="from-emerald-400 to-teal-400"
                title={t(lang, copy.sec2H)} desc={t(lang, copy.sec2P)} href="/try" emoji="💨" />
          {/* Play */}
          <Card color="from-rose-100 to-amber-100" border="from-rose-400 to-amber-400"
                title={t(lang, copy.sec3H)} desc={t(lang, copy.sec3P)} href="/play" emoji="🎮" />
          {/* Quiz */}
          <Card color="from-fuchsia-100 to-purple-100" border="from-fuchsia-400 to-purple-400"
                title={t(lang, copy.sec4H)} desc={t(lang, copy.sec4P)} href="/quiz" emoji="❓" />
        </div>
      </div>
    </section>
  );
}

/* Small helper card component */
function Card({
  title,
  desc,
  href,
  emoji,
  color,
  border
}: {
  title: string;
  desc: string;
  href: string;
  emoji: string;
  color: string;
  border: string;
}) {
  return (
    <Link
      href={href}
      className={`group rounded-2xl p-[1px] bg-gradient-to-r ${border} hover:scale-[1.01] transition-transform`}
    >
      <div className={`rounded-2xl p-4 md:p-5 bg-gradient-to-br ${color}`}>
        <div className="text-3xl mb-1">{emoji}</div>
        <div className="text-xl font-semibold text-neutral-900">{title}</div>
        <p className="text-neutral-700 mt-1">{desc}</p>
        <div className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-neutral-800">
          <span>Open</span>
          <span className="translate-x-0 group-hover:translate-x-0.5 transition-transform">→</span>
        </div>
      </div>
    </Link>
  );
}