import { az } from "./az";
import { en } from "./en";
import type { Locale, Translation } from "./types";

export type { Locale, Translation } from "./types";

export const locales: Record<Locale, Translation> = { en, az };

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_STORAGE_KEY = "salesghost-lang";
