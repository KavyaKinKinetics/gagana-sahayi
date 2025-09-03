import type { Lang } from "@/components/LangProvider";
export type Bi<T = string> = { en: T; ml: T };
export const t = <T = string>(lang: Lang, bi: Bi<T>) => bi[lang];
