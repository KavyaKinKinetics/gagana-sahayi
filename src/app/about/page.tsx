"use client";
import { useLang } from "@/components/LangProvider";
import { t } from "@/lib/i18n";

const copy = {
  title: { en: "About Gagana Sahayi", ml: "ഗഗന സഹായി കുറിച്ച്" },

  intro: {
    en: "Gagana Sahayi is KinKinetics’ outreach app — created to make space science and astronaut routines accessible to everyone on Earth.",
    ml: "ഗഗന സഹായി കിൻകിനറ്റിക്സിന്റെ ഔട്ട്‌റീച്ച് ആപ്പാണ് — സ്പേസ് ശാസ്ത്രവും ആസ്ട്രോനോട്ട് രീതികളും ഭൂമിയിലെ എല്ലാവർക്കും ലഭ്യമാക്കാനാണ് ഇത് സൃഷ്ടിച്ചത്."
  },

  mission: {
    title: { en: "Our Mission", ml: "ഞങ്ങളുടെ ദൗത്യം" },
    text: {
      en: "We focus on psychological and emotional well-being in high-stress environments. KinKinetics translates astronaut countermeasures — like paced breathing, light cues, and checklists — into one-minute tools for daily life. We also research taVNS (transcutaneous auricular vagus nerve stimulation), endocrine substitutions, and long-duration psychological support systems for space crews.",
      ml: "ഉയർന്ന സമ്മർദ്ദമുള്ള സാഹചര്യങ്ങളിൽ മാനസികവും മാനസികവുമായ ക്ഷേമത്തിലാണ് ഞങ്ങൾ ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്നത്. കിൻകിനറ്റിക്സ്, ആസ്ട്രോനോട്ടുകളുടെ പ്രതിരോധങ്ങൾ (പേസ് ചെയ്ത ശ്വാസം, വെളിച്ച സൂചനകൾ, ചെക്ക്‌ലിസ്റ്റുകൾ പോലുള്ളവ) ദൈനംദിന ജീവിതത്തിനായി ഒരു മിനിറ്റ് ഉപകരണങ്ങളാക്കി മാറ്റുന്നു. സ്പേസ് ടീമുകൾക്കായി taVNS, എൻഡോക്രൈൻ സബ്സ്റ്റിറ്റ്യൂഷൻസ്, ദീർഘകാല മാനസിക പിന്തുണാ സിസ്റ്റങ്ങൾ എന്നിവയിലും ഞങ്ങൾ ഗവേഷണം നടത്തുന്നു."
    }
  },

  whatwedo: {
    title: { en: "What We Do", ml: "ഞങ്ങൾ ചെയ്യുന്ന കാര്യങ്ങൾ" },
    text: {
      en: "Through quizzes, mini-games, and myth-busting challenges, Gagana Sahayi makes space knowledge simple, fun, and inspiring. The goal: spark curiosity and help people understand space as a shared human journey.",
      ml: "ക്വിസുകൾ, മിനി-ഗെയിമുകൾ, മിഥ്യാഭ്രമങ്ങൾ പൊളിക്കുന്ന വെല്ലുവിളികൾ വഴി ഗഗന സഹായി സ്പേസ് അറിവിനെ ലളിതവും രസകരവും പ്രചോദനകരവുമാക്കുന്നു. ലക്ഷ്യം: ജിജ്ഞാസ ഉണർത്തുകയും സ്പേസ് ഒരു പൊതുവായ മനുഷ്യയാത്രയായി മനസ്സിലാക്കാൻ ആളുകൾക്ക് സഹായിക്കുകയും ചെയ്യുക."
    }
  },

  why: {
    title: { en: "Why Space for People?", ml: "ജനങ്ങൾക്ക് സ്പേസ് എന്തിന്?" },
    text: {
      en: "Astronauts manage isolation, time pressure, and risk every day. The same lessons are useful on Earth — for caregivers, students, and professionals. Many technologies we use daily were born in space programs: from radiation shielding to medical radiotherapy. Space is not just about distant missions, it already shapes life around us.",
      ml: "ആസ്ട്രോനോട്ടുകൾ ദിവസേന ഒറ്റപ്പെടലും സമയ സമ്മർദ്ദവും അപകടവും കൈകാര്യം ചെയ്യുന്നു. ഈ പാഠങ്ങൾ ഭൂമിയിലും ഉപകാരപ്പെടുന്നു — പരിചാരകർക്ക്, വിദ്യാർത്ഥികൾക്ക്, പ്രൊഫഷണലുകൾക്ക്. നാം ദിവസേന ഉപയോഗിക്കുന്ന പല സാങ്കേതികവിദ്യകളും സ്പേസ് പ്രോഗ്രാമുകളിൽ നിന്നാണ് ജനിച്ചത്: റേഡിയേഷൻ ഷീൽഡിംഗിൽ നിന്ന് മെഡിക്കൽ റേഡിയോതെറാപ്പി വരെ. സ്പേസ് അകലെയുള്ള ദൗത്യങ്ങളെക്കുറിച്ച് മാത്രം അല്ല, അത് ഇതിനകം തന്നെ നമ്മുടെ ജീവിതത്തെ സ്വാധീനിക്കുന്നു."
    }
  },

  program: {
    title: { en: "The Program", ml: "പ്രോഗ്രാം" },
    text: {
      en: "Gagana Sahayi is KinKinetics’ way of reaching people directly. It is built to be used anywhere and everywhere — in classrooms, clinics, workplaces, and homes.",
      ml: "ഗഗന സഹായി കിൻകിനറ്റിക്സ് ജനങ്ങളുമായി നേരിട്ട് ബന്ധപ്പെടാനുള്ള മാർഗമാണ്. ക്ലാസ്റൂമുകളിൽ, ക്ലിനിക്കുകളിൽ, ജോലിസ്ഥലങ്ങളിൽ, വീടുകളിൽ — എല്ലായിടത്തും ഉപയോഗിക്കാനാണ് ഇത് നിർമ്മിച്ചിരിക്കുന്നത്."
    }
  },

  values: {
    title: { en: "Our Values", ml: "ഞങ്ങളുടെ മൂല്യങ്ങൾ" },
    list: [
      { en: "Human factors & space medicine first", ml: "ഹ്യൂമൻ ഫാക്ടറുകളും സ്പേസ് മെഡിസിനും മുൻഗണന" },
      { en: "Privacy-first: core features work without personal data", ml: "സ്വകാര്യത മുൻഗണന: വ്യക്തിഗത ഡാറ്റ ഇല്ലാതെ മുഖ്യ ഫീച്ചറുകൾ പ്രവർത്തിക്കും" },
      { en: "Science-driven, evidence-based", ml: "ശാസ്ത്രീയമായും തെളിവുകളെ അടിസ്ഥാനമാക്കിയുമുള്ളത്" }
    ]
  },

  contact: {
    title: { en: "Get in Touch", ml: "ബന്ധപ്പെടുക" },
    email: "info@kinkinetics.com",
    note: {
      en: "We welcome collaborations and feedback to bring space science closer to people.",
      ml: "സ്പേസ് ശാസ്ത്രം ജനങ്ങളോട് അടുത്തുവരാൻ സഹകരണങ്ങളും അഭിപ്രായങ്ങളും സ്വാഗതം ചെയ്യുന്നു."
    }
  }
};

export default function AboutPage() {
  const { lang } = useLang();

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-10">
      <header className="space-y-2 text-center">
        <h1 className="text-4xl font-bold text-green-700">{t(lang, copy.title)}</h1>
        <p className="text-neutral-700">{t(lang, copy.intro)}</p>
      </header>

      {/* Mission */}
      <section className="p-6 bg-green-50 border-l-4 border-green-600 rounded-lg">
        <h2 className="text-2xl font-semibold text-green-700">{t(lang, copy.mission.title)}</h2>
        <p className="mt-2 text-neutral-800 leading-relaxed">{t(lang, copy.mission.text)}</p>
      </section>

      {/* What we do */}
      <section className="p-6 bg-blue-50 border-l-4 border-blue-600 rounded-lg">
        <h2 className="text-2xl font-semibold text-blue-700">{t(lang, copy.whatwedo.title)}</h2>
        <p className="mt-2 text-neutral-800 leading-relaxed">{t(lang, copy.whatwedo.text)}</p>
      </section>

      {/* Why space for people */}
      <section className="p-6 bg-purple-50 border-l-4 border-purple-600 rounded-lg">
        <h2 className="text-2xl font-semibold text-purple-700">{t(lang, copy.why.title)}</h2>
        <p className="mt-2 text-neutral-800 leading-relaxed">{t(lang, copy.why.text)}</p>
      </section>

      {/* Program */}
      <section className="p-6 bg-orange-50 border-l-4 border-orange-600 rounded-lg">
        <h2 className="text-2xl font-semibold text-orange-700">{t(lang, copy.program.title)}</h2>
        <p className="mt-2 text-neutral-800 leading-relaxed">{t(lang, copy.program.text)}</p>
      </section>

      {/* Values */}
      <section className="p-6 bg-teal-50 border-l-4 border-teal-600 rounded-lg">
        <h2 className="text-2xl font-semibold text-teal-700">{t(lang, copy.values.title)}</h2>
        <ul className="mt-3 list-disc pl-6 text-neutral-800 space-y-1">
          {copy.values.list.map((item, i) => (
            <li key={i}>{t(lang, item)}</li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section className="p-6 bg-pink-50 border-l-4 border-pink-600 rounded-lg">
        <h2 className="text-2xl font-semibold text-pink-700">{t(lang, copy.contact.title)}</h2>
        <p className="mt-2 text-neutral-800">{t(lang, copy.contact.note)}</p>
        <form className="mt-4 space-y-3">
          <input
            type="email"
            placeholder="Your email"
            className="w-full border rounded-lg p-2"
          />
          <textarea
            placeholder="Your message"
            className="w-full border rounded-lg p-2"
            rows={4}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
          >
            Send
          </button>
        </form>
        <p className="mt-3 text-sm text-neutral-600">Email: {copy.contact.email}</p>
      </section>
    </main>
  );
}