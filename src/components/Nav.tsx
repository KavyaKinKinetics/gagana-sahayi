"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLang } from "./LangProvider";
import { t } from "@/lib/i18n";
import getConfig from "next/config";

const labels = {
  title: { en: "Gagana Sahayi", ml: "ഗഗന സഹായി" },
  home:  { en: "Home", ml: "ഹോം" },
  learn: { en: "Learn", ml: "ലേൺ" },
  try:   { en: "Try", ml: "ട്രൈ" },
  play:  { en: "Play", ml: "പ്ലേ" },
  quiz:  { en: "Quiz", ml: "ക്വിസ്" },
  about: { en: "About", ml: "അബൗട്ട്" },
  visit: { en: "KinKinetics ↗", ml: "കിൻകിനെറ്റിക്സ് ↗" },
  langBtn: { en: "മലയാളം", ml: "English" },
};

export function Nav() {
  const pathname = usePathname();
  const { lang, toggle } = useLang();

  // 👇 basePath from next.config.ts
  const { publicRuntimeConfig } = getConfig();
  const basePath = publicRuntimeConfig?.basePath || "";

  const links = [
    { href: "/", label: labels.home },
    { href: "/learn", label: labels.learn },
    { href: "/try", label: labels.try },
    { href: "/play", label: labels.play },
    { href: "/quiz", label: labels.quiz },
    { href: "/about", label: labels.about },
  ];

  return (
    <header className="border-b bg-white">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={`${basePath}/kinkinetics-logo.png`}
            alt="KinKinetics"
            width={36}
            height={36}
            priority
          />
          <span className="font-semibold text-green-700">
            {t(lang, labels.title)}
          </span>
        </Link>

        <div className="flex items-center gap-3">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`hover:underline ${active ? "font-semibold text-green-700" : ""}`}
              >
                {t(lang, l.label)}
              </Link>
            );
          })}

          <a
            href="https://kinkinetics.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-green-700 px-3 py-1 rounded-lg text-green-700 hover:bg-green-700 hover:text-white"
          >
            {t(lang, labels.visit)}
          </a>

          <button
            onClick={toggle}
            className="px-3 py-1 border rounded-lg"
            aria-label="Toggle language"
            title="Toggle language"
          >
            {t(lang, labels.langBtn)}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Nav;