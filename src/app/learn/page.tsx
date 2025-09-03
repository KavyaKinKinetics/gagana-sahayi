"use client";
import { useLang } from "@/components/LangProvider";
import { t } from "@/lib/i18n";
import VideoEmbed from "@/components/VideoEmbed";

const BLUE = "#0a0874ff";
const OX_URL =
  "https://www.youtube.com/embed/7rB8BW3BAfo?rel=0&modestbranding=1&controls=1";

const copy = {
  title: { en: "Learn", ml: "പഠിക്കുക" },

  // Overview (Malayalam rewritten, story-style)
  overview: {
    en: "From here you’ll learn how space travel affects the human body and mind. Start by listening to a short audio conversation, then explore three core concepts astronauts use, and finally watch a video on oxytocin and teamwork.",
    ml: "ഇവിടെ നിന്ന് ബഹിരാകാശ യാത്ര മനുഷ്യന്റെ ശരീരത്തെയും മനസ്സിനെയും എങ്ങനെ സ്വാധീനിക്കുമെന്ന് നമുക്ക് പഠിക്കാം. ആദ്യം ഒരു ചെറിയ ഓഡിയോ സംഭാഷണം കേൾക്കൂ. പിന്നെ ആസ്ട്രോനോട്ടുകൾ ദിനചര്യയിൽ ആശ്രയിക്കുന്ന മൂന്നു പ്രധാന രീതികളെ കുറിച്ച് അറിയൂ. ഒടുവിൽ, ടീമ്വർക്കിൽ ഓക്സിറ്റോസിൻ എങ്ങനെ സഹായിക്കുന്നു എന്ന് ഒരു വീഡിയോയിലൂടെ നോക്കാം."
  },

  // Audio section
  g_h: { en: "Gravity — Body & Mind", ml: "ഗ്രാവിറ്റി — ശരീരവും മനസ്സും" },
  g_p1: {
    en: "How do gravity and microgravity shape physiology and psychology? Listen first:",
    ml: "ഗ്രാവിറ്റിയും മൈക്രോഗ്രാവിറ്റിയും ശരീരപ്രവർത്തനത്തെയും (ഫിസിയോളജി) മനശ്ശാസ്ത്രത്തെയും എങ്ങനെ സ്വാധീനിക്കുന്നു? ആദ്യം കേൾക്കാം:"
  },
  g_audio_title: {
    en: "Conversation: physiological & psychological effects of gravity",
    ml: "സംഭാഷണം: ഗ്രാവിറ്റിയുടെ ശാരീരികവും മാനസികവുമായ സ്വാധീനങ്ങൾ"
  },
  g_transcript_en: [
    "Host: Welcome—today we explore how gravity influences the body and mind.",
    "Guest: The vestibular system and fluid distribution adapt first; mood and sleep often follow.",
    "Host: And in space?",
    "Guest: Microgravity shifts fluids headward, alters balance and vision; routines and light cues help."
  ],
  g_transcript_ml: [
    "ഹോസ്റ്റ്: സ്വാഗതം—ഗ്രാവിറ്റി ശരീരത്തെയും മനസ്സിനെയും എങ്ങനെ സ്വാധീനിക്കുന്നു എന്ന് നോക്കാം.",
    "ഗസ്റ്റ്: വെസ്റ്റിബുലാർ സംവിധാനം, ദ്രവവിനിമയം ആദ്യം ഇന്ഗ്രഹിച്ചു മാറും; മനോഭാവവും ഉറക്കവും തുടർന്ന് മാറാം.",
    "ഹോസ്റ്റ്: സ്പേസിൽ?",
    "ഗസ്റ്റ്: മൈക്രോഗ്രാവിറ്റിയിൽ ദ്രവങ്ങൾ തലഭാഗത്തേക്ക് മാറും; ബാലൻസ്, ദൃഷ്ടി എന്നിവയ്ക്ക് മാറ്റം വരാം; പരിശീലിത രീതികളും വെളിച്ച സൂചനകളും സഹായകരമാണ്."
  ],

  // Three core topics
  b_title: { en: "Breathing as a Tool", ml: "ശ്വാസം — ഒരു ഉപകരണം" },
  b_text: {
    en: "60 seconds of paced breathing (inhale 4s, hold 2s, exhale 6s) lowers stress and sharpens focus—astronauts use this before critical tasks.",
    ml: "60 സെക്കൻഡ് പേസ് ചെയ്ത ശ്വസനം (4 സെ ശ്വസിക്കുക, 2 സെ നിശ്ചലം, 6 സെ ശ്വസനം വിടുക) സമ്മർദ്ദം കുറക്കുകയും ശ്രദ്ധ തീക്ഷ്ണമാക്കുകയും ചെയ്യും—നിർണ്ണായക പ്രവർത്തനങ്ങൾക്ക് മുമ്പ് ആസ്ട്രോനോട്ടുകൾ ഇത് ഉപയോഗിക്കുന്നു."
  },

  f_title: { en: "Fluid Shift in Space", ml: "സ്പേസിലെ ദ്രവമാറ്റം" },
  f_text: {
    en: "In microgravity, body fluids move headward. Crews use routines (sleep hygiene, light timing) to manage effects—useful on Earth too.",
    ml: "മൈക്രോഗ്രാവിറ്റിയിൽ ശരീരദ്രവങ്ങൾ തലഭാഗത്തേക്ക് മാറും. ഉറക്കശുചിത്വം, വെളിച്ചസമയനം പണിയൽ തുടങ്ങിയ രീതികളിലൂടെ ടീം ഇത് നിയന്ത്രിക്കുന്നു—ഭൂമിയിലും അതുപോലെ പ്രയോജനകരം."
  },

  r_title: { en: "Routines under Pressure", ml: "മർദ്ദത്തിൽ രീതികൾ" },
  r_text: {
    en: "Checklists and brief pauses cut errors when time is tight. Small rituals stabilize attention and sleep over days.",
    ml: "സമയപരിമിതിയിൽ ചെക്ക്‌ലിസ്റ്റുകളും ചെറിയ ഇടവേളകളും പിഴവുകൾ കുറയ്ക്കും. ചെറു പതിവുകൾ ദിനങ്ങളിലായി ശ്രദ്ധയും ഉറക്കവും സ്ഥിരപ്പെടുത്തുന്നു."
  },

  // Oxytocin video
  ox_h: { en: "Oxytocin — the Team Hormone", ml: "ഓക്സിറ്റോസിൻ — ടീം ഹോർമോൺ" },
  ox_p1: {
    en: "Oxytocin relates to trust, bonding, and prosocial behavior. Strong-trust teams coordinate better under stress.",
    ml: "വിശ്വാസം, ബന്ധം, സഹകരണ പെരുമാറ്റം എന്നിവയുമായി ബന്ധപ്പെട്ട ഹോർമോണാണ് ഓക്സിറ്റോസിൻ. ഉയർന്ന വിശ്വാസമുള്ള ടീമുകൾ സമ്മർദ്ദത്തിൽ കൂടുതൽ ഏകോപിതമായി പ്രവർത്തിക്കും."
  },
  ox_p2: {
    en: "In high-reliability settings (spaceflight, surgery, emergency response), shared rituals and positive interactions can support oxytocin pathways.",
    ml: "സ്പേസ്ഫ്ലൈറ്റ്, സർജറി, അടിയന്തര സേവനം പോലുള്ള ഉയർന്ന ഉത്തരവാദിത്വമുള്ള സാഹചര്യങ്ങളിൽ, പങ്കിട്ട രീതികളും പോസിറ്റീവ് ഇടപെടലുകളും ഓക്സിറ്റോസിൻ വഴികളെ പിന്തുണയ്ക്കാം."
  },
  ox_watch: {
    en: "Watch: how oxytocin supports teamwork",
    ml: "കാണൂ: ടീമ്വർക്കിനെ ഓക്സിറ്റോസിൻ എങ്ങനെ പിന്തുണയ്ക്കുന്നു"
  },
  ox_note: {
    en: "Note: Physiology varies—the goal is to create conditions for trust, not to force it.",
    ml: "ശ്രദ്ധിക്കുക: ശരീരപ്രവർത്തനം ഓരോരുത്തർക്കും വ്യത്യസ്തമാണ്—ലക്ഷ്യം വിശ്വാസത്തിനുള്ള അന്തരീക്ഷം സൃഷ്ടിക്കലാണ്, അത് നിർബന്ധിപ്പിക്കലല്ല."
  }
};

export default function LearnPage() {
  const { lang } = useLang();

  return (
    <section className="max-w-3xl mx-auto p-6 space-y-8">
      {/* Overview */}
      <header
        className="space-y-3 rounded-3xl p-6 md:p-7 text-white"
        style={{ background: `linear-gradient(135deg, ${BLUE} 0%, #3b82f6 100%)` }}
      >
        <h1 className="text-3xl font-extrabold">📘 {t(lang, copy.title)}</h1>
        <p className="opacity-95">{t(lang, copy.overview)}</p>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs px-2 py-1 rounded-full bg-white/20">1–2 min reads</span>
          <span className="text-xs px-2 py-1 rounded-full bg-white/20">Mind–Body</span>
          <span className="text-xs px-2 py-1 rounded-full bg-white/20">Evidence-informed</span>
        </div>
      </header>

      {/* 1) Audio FIRST */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold" style={{ color: BLUE }}>
          {t(lang, copy.g_h)}
        </h2>
        <p className="text-neutral-700">{t(lang, copy.g_p1)}</p>

        <div
          className="p-4 rounded-2xl bg-white shadow-sm space-y-3"
          style={{ border: `1px solid ${BLUE}` }}
        >
          <div className="font-semibold">{t(lang, copy.g_audio_title)}</div>
          <audio controls preload="metadata" className="w-full" aria-label={t(lang, copy.g_audio_title)}>
            <source src="/audio/gravity-conversation.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <details className="text-sm text-neutral-700">
            <summary className="cursor-pointer select-none">Transcript</summary>
            <div className="mt-2 space-y-2">
              {(lang === "ml" ? copy.g_transcript_ml : copy.g_transcript_en).map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </details>
        </div>
      </section>

      {/* 2) Three core concepts */}
      <div className="grid gap-4">
        <article
          className="p-4 rounded-2xl bg-white shadow-sm"
          style={{ border: `1px solid ${BLUE}33` }}
        >
          <h3 className="text-xl font-semibold" style={{ color: BLUE }}>
            {t(lang, copy.b_title)}
          </h3>
          <p className="mt-2 leading-relaxed text-neutral-800">{t(lang, copy.b_text)}</p>
        </article>

        <article
          className="p-4 rounded-2xl bg-white shadow-sm"
          style={{ border: `1px solid ${BLUE}33` }}
        >
          <h3 className="text-xl font-semibold" style={{ color: BLUE }}>
            {t(lang, copy.f_title)}
          </h3>
          <p className="mt-2 leading-relaxed text-neutral-800">{t(lang, copy.f_text)}</p>
        </article>

        <article
          className="p-4 rounded-2xl bg-white shadow-sm"
          style={{ border: `1px solid ${BLUE}33` }}
        >
          <h3 className="text-xl font-semibold" style={{ color: BLUE }}>
            {t(lang, copy.r_title)}
          </h3>
          <p className="mt-2 leading-relaxed text-neutral-800">{t(lang, copy.r_text)}</p>
        </article>
      </div>

      {/* 3) Oxytocin video LAST */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold" style={{ color: BLUE }}>
          {t(lang, copy.ox_h)}
        </h2>
        <p className="text-neutral-700">{t(lang, copy.ox_p1)}</p>
        <p className="text-neutral-700">{t(lang, copy.ox_p2)}</p>

        <div
          className="space-y-2 rounded-2xl p-4 bg-white shadow-sm"
          style={{ border: `1px solid ${BLUE}` }}
        >
          <div className="text-sm font-medium" style={{ color: BLUE }}>
            {t(lang, copy.ox_watch)}
          </div>
          <VideoEmbed url={OX_URL} title={t(lang, copy.ox_watch)} />
          <p className="text-xs text-neutral-500">{t(lang, copy.ox_note)}</p>
        </div>
      </section>
    </section>
  );
}