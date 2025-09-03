"use client";
import { useLang } from "@/components/LangProvider";
import { t } from "@/lib/i18n";
import AudioPlayer from "@/components/AudioPlayer";
import VideoEmbed from "@/components/VideoEmbed";

const OX_URL = "https://www.youtube.com/embed/7rB8BW3BAfo?rel=0&modestbranding=1&controls=1";
const copy = {
  title: { en: "Learn", ml: "ലേൺ" },

  // New overview intro
  overview: {
    en: "From here you’ll learn how space travel affects the human body and mind. Start by listening to a short audio conversation, then explore three core concepts astronauts use, and finally watch a video on oxytocin and teamwork.",
    ml: "ഇവിടെ നിന്ന് മനുഷ്യന്റെ ശരീരത്തെയും മനസ്സിനെയും സ്പേസ് യാത്ര എങ്ങിനെ സ്വാധീനിക്കുന്നു എന്ന് പഠിക്കാം. ആദ്യം ഒരു ചെറിയ ഓഡിയോ സംഭാഷണം കേൾക്കൂ, തുടർന്ന് ആസ്ട്രോനോട്ടുകൾ ആശ്രയിക്കുന്ന മൂന്ന് അടിസ്ഥാന ആശയങ്ങൾ പഠിക്കൂ, ഒടുവിൽ ടീമ്വർക്കിൽ ഓക്സിറ്റോസിൻ എന്തുകൊണ്ട് പ്രധാനമാണെന്ന് വീഡിയോയിൽ കാണൂ."
  },

  // Audio section
  g_h: { en: "Gravity — Body & Mind", ml: "ഗ്രാവിറ്റി — ശരീരവും മനസ്സും" },
  g_p1: {
    en: "How do gravity and microgravity shape physiology and psychology? Listen first:",
    ml: "ഗ്രാവിറ്റിയും മൈക്രോഗ്രാവിറ്റിയും ശരീരവും മനസ്സും എങ്ങനെ രൂപപ്പെടുത്തുന്നു? ആദ്യം കേൾക്കൂ:"
  },
  g_audio_title: {
    en: "Conversation: physiological & psychological effects of gravity",
    ml: "സംഭാഷണം: ഗ്രാവിറ്റിയുടെ ശാരീരികവും മാനസികവുമായ പ്രഭാവങ്ങൾ"
  },
  g_transcript_en: [
    "Host: Welcome—today we explore how gravity influences the body and mind.",
    "Guest: The vestibular system and fluid distribution adapt first; mood and sleep often follow.",
    "Host: And in space?",
    "Guest: Microgravity shifts fluids headward, alters balance and vision; routines and light cues help."
  ],
  g_transcript_ml: [
    "ഹോസ്റ്റ്: സ്വാഗതം—ഗ്രാവിറ്റി ശരീരത്തെയും മനസ്സിനെയും എങ്ങനെ സ്വാധീനിക്കുന്നു എന്ന് പരിശോധിക്കാം.",
    "ഗസ്റ്റ്: വെസ്റ്റിബുലാർ സംവിധാനം, ദ്രവവിനിമയം എന്നിവ ആദ്യം അഭ്യാസപ്പെടുന്നു; മനോഭാവവും ഉറക്കവും പിന്നെ മാറാം.",
    "ഹോസ്റ്റ്: സ്പേസിൽ?",
    "ഗസ്റ്റ്: മൈക്രോഗ്രാവിറ്റിയിൽ ദ്രവങ്ങൾ തലഭാഗത്തേക്ക് നീങ്ങും; ബാലൻസ്, ദൃഷ്ടി എന്നിവ മാറാം; രീതികളും വെളിച്ച സൂചനകളും സഹായിക്കും."
  ],

  // Three core topics
  b_title: { en: "Breathing as a Tool", ml: "ശ്വാസം: ഒരു ഉപകരണം" },
  b_text: {
    en: "60 seconds of paced breathing (inhale 4s, hold 2s, exhale 6s) lowers stress and sharpens focus—astronauts use this before critical tasks.",
    ml: "60 സെക്കൻഡ് പേസ് ചെയ്ത ശ്വസനം (4 സെ ശ്വസിക്കുക, 2 സെ നിശ്ചലം, 6 സെ ശ്വസനം വിടുക) സമ്മർദ്ദം കുറയ്ക്കുകയും ശ്രദ്ധ വർധിപ്പിക്കുകയും ചെയ്യും—നിർണ്ണായക പ്രവർത്തനങ്ങൾക്ക് മുൻപ് ആസ്ട്രോനോട്ടുകൾ ഇങ്ങനെ ചെയ്യുന്നു."
  },

  f_title: { en: "Fluid Shift in Space", ml: "സ്‌പേസിലെ ദ്രവമാറ്റം" },
  f_text: {
    en: "In microgravity, body fluids move headward. Crews use routines (sleep hygiene, light timing) to manage effects—useful on Earth too.",
    ml: "മൈക്രോഗ്രാവിറ്റിയിൽ ദ്രവങ്ങൾ തല ഭാഗത്തേക്ക് നീങ്ങുന്നു. ഉറക്ക ശുചിത്വം, വെളിച്ച സമയനം പോലുള്ള രീതികളിലൂടെ ടീമുകൾ ഇത് കൈകാര്യംിക്കുന്നു—ഭൂമിയിൽ പോലും ഇത് പ്രയോജനകരം."
  },

  r_title: { en: "Routines under Pressure", ml: "മർദ്ദത്തിൽ രീതികൾ" },
  r_text: {
    en: "Checklists and brief pauses cut errors when time is tight. Small rituals stabilize attention and sleep over days.",
    ml: "സമയക്കുറവുള്ളപ്പോൾ ചെക്ക്‌ലിസ്റ്റുകളും ചെറിയ ഇടവേളകളും പിഴവുകൾ കുറയ്ക്കുന്നു. ചെറുപതിവുകൾ ശ്രദ്ധയും ഉറക്കവും സ്ഥിരപ്പെടുത്തുന്നു."
  },

  // Oxytocin video
  ox_h: { en: "Oxytocin — the Team Hormone", ml: "ഓക്സിറ്റോസിൻ — ടീമിന്റെ ഹോർമോൺ" },
  ox_p1: {
    en: "Oxytocin relates to trust, bonding, and prosocial behavior. Strong-trust teams coordinate better under stress.",
    ml: "വിശ്വാസം, ബന്ധം, സാമൂഹിക സഹകരണം എന്നിവയുമായി ബന്ധപ്പെട്ട ഹോർമോണാണ് ഓക്സിറ്റോസിൻ. ഉറച്ച വിശ്വാസമുള്ള ടീമുകൾ സമ്മർദ്ദത്തിൽ കൂടുതൽ ഏകോപിതമാണ്."
  },
  ox_p2: {
    en: "In high-reliability settings (spaceflight, surgery, emergency response), shared rituals and positive interactions can support oxytocin pathways.",
    ml: "സ്പേസ്ഫ്ലൈറ്റ്, സർജറി, അടിയന്തര സേവനം പോലുള്ള സാഹചര്യങ്ങളിൽ സംയുക്ത രീതികളും പോസിറ്റീവ് ഇടപെടലുകളും ഓക്സിറ്റോസിൻ വഴികൾ ശക്തിപ്പെടുത്താം."
  },
  ox_watch: {
    en: "Watch: how oxytocin supports teamwork",
    ml: "കാണൂ: ടീമ്വർക്കിനെ ഓക്സിറ്റോസിൻ എങ്ങനെ പിന്തുണയ്ക്കുന്നു"
  },
  ox_note: {
    en: "Note: Physiology varies—the goal is to create conditions for trust, not to force it.",
    ml: "ശ്രദ്ധിക്കുക: ശരീരപ്രവർത്തനം ഒരോരുത്തർക്കും വ്യത്യസ്തമാണ്—ലക്ഷ്യം വിശ്വാസത്തിനുള്ള അന്തരീക്ഷം സൃഷ്ടിക്കലാണ്; നിർബന്ധപ്പെടുത്തൽ അല്ല."
  }
};

export default function LearnPage() {
  const { lang } = useLang();

  return (
    <section className="max-w-3xl mx-auto p-6 space-y-8">
      {/* Overview */}
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">{t(lang, copy.title)}</h1>
        <p className="text-neutral-700">{t(lang, copy.overview)}</p>
      </header>

      {/* 1) Audio FIRST */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold">{t(lang, copy.g_h)}</h2>
        <p className="text-neutral-700">{t(lang, copy.g_p1)}</p>

        <div className="p-4 border rounded-2xl bg-white space-y-3">
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
        <article className="p-4 rounded-2xl border bg-white">
          <h2 className="text-xl font-semibold">{t(lang, copy.b_title)}</h2>
          <p className="mt-2 leading-relaxed">{t(lang, copy.b_text)}</p>
        </article>

        <article className="p-4 rounded-2xl border bg-white">
          <h2 className="text-xl font-semibold">{t(lang, copy.f_title)}</h2>
          <p className="mt-2 leading-relaxed">{t(lang, copy.f_text)}</p>
        </article>

        <article className="p-4 rounded-2xl border bg-white">
          <h2 className="text-xl font-semibold">{t(lang, copy.r_title)}</h2>
          <p className="mt-2 leading-relaxed">{t(lang, copy.r_text)}</p>
        </article>
      </div>

      {/* 3) Oxytocin video LAST */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold">{t(lang, copy.ox_h)}</h2>
        <p className="text-neutral-700">{t(lang, copy.ox_p1)}</p>
        <p className="text-neutral-700">{t(lang, copy.ox_p2)}</p>

        <div className="space-y-2">
          <div className="text-sm font-medium">{t(lang, copy.ox_watch)}</div>
          <VideoEmbed url={OX_URL} title={t(lang, copy.ox_watch)} />
          <p className="text-xs text-neutral-500">{t(lang, copy.ox_note)}</p>
        </div>
      </section>
    </section>
  );
}