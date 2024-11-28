export {
    Api,
    Bot,
    type ChatTypeContext,
    type ChatTypeMiddleware,
    type CommandContext,
    type CommandMiddleware,
    Composer,
    Context,
    type Middleware,
    type MiddlewareObj,
    type NextFunction,
} from "grammy";
export type {
    BotCommand,
    BotCommandScope,
    BotCommandScopeAllChatAdministrators,
    BotCommandScopeAllGroupChats,
    BotCommandScopeAllPrivateChats,
    BotCommandScopeChat,
    Chat,
    MessageEntity
} from "grammy/types";

/** A two-letter ISO 639-1 language code.
 * @see https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes
 * @see https://www.loc.gov/standards/iso639-2/php/code_list.php
 */
export type LanguageCode = typeof LanguageCodes[keyof typeof LanguageCodes];

/**
 * @see {@link LanguageCode}
 */
export const LanguageCodes = {
    Abkhazian: "ab",
    Afar: "aa",
    Afrikaans: "af",
    Akan: "ak",
    Albanian: "sq",
    Amharic: "am",
    Arabic: "ar",
    Aragonese: "an",
    Armenian: "hy",
    Assamese: "as",
    Avaric: "av",
    Avestan: "ae",
    Aymara: "ay",
    Azerbaijani: "az",
    Bambara: "bm",
    Bashkir: "ba",
    Basque: "eu",
    Belarusian: "be",
    Bengali: "bn",
    Bislama: "bi",
    Bosnian: "bs",
    Breton: "br",
    Bulgarian: "bg",
    Burmese: "my",
    Catalan: "ca",
    Chamorro: "ch",
    Chechen: "ce",
    Chichewa: "ny",
    Chinese: "zh",
    ChurchSlavonic: "cu",
    Chuvash: "cv",
    Cornish: "kw",
    Corsican: "co",
    Cree: "cr",
    Croatian: "hr",
    Czech: "cs",
    Danish: "da",
    Divehi: "dv",
    Dutch: "nl",
    Dzongkha: "dz",
    English: "en",
    Esperanto: "eo",
    Estonian: "et",
    Ewe: "ee",
    Faroese: "fo",
    Fijian: "fj",
    Finnish: "fi",
    French: "fr",
    WesternFrisian: "fy",
    Fulah: "ff",
    Gaelic: "gd",
    Galician: "gl",
    Ganda: "lg",
    Georgian: "ka",
    German: "de",
    Greek: "el",
    Kalaallisut: "kl",
    Guarani: "gn",
    Gujarati: "gu",
    Haitian: "ht",
    Hausa: "ha",
    Hebrew: "he",
    Herero: "hz",
    Hindi: "hi",
    HiriMotu: "ho",
    Hungarian: "hu",
    Icelandic: "is",
    Ido: "io",
    Igbo: "ig",
    Indonesian: "id",
    Interlingua: "ia",
    Interlingue: "ie",
    Inuktitut: "iu",
    Inupiaq: "ik",
    Irish: "ga",
    Italian: "it",
    Japanese: "ja",
    Javanese: "jv",
    Kannada: "kn",
    Kanuri: "kr",
    Kashmiri: "ks",
    Kazakh: "kk",
    CentralKhmer: "km",
    Kikuyu: "ki",
    Kinyarwanda: "rw",
    Kirghiz: "ky",
    Komi: "kv",
    Kongo: "kg",
    Korean: "ko",
    Kuanyama: "kj",
    Kurdish: "ku",
    Lao: "lo",
    Latin: "la",
    Latvian: "lv",
    Limburgan: "li",
    Lingala: "ln",
    Lithuanian: "lt",
    LubaKatanga: "lu",
    Luxembourgish: "lb",
    Macedonian: "mk",
    Malagasy: "mg",
    Malay: "ms",
    Malayalam: "ml",
    Maltese: "mt",
    Manx: "gv",
    Maori: "mi",
    Marathi: "mr",
    Marshallese: "mh",
    Mongolian: "mn",
    Nauru: "na",
    Navajo: "nv",
    NorthNdebele: "nd",
    SouthNdebele: "nr",
    Ndonga: "ng",
    Nepali: "ne",
    Norwegian: "no",
    NorwegianBokmål: "nb",
    NorwegianNynorsk: "nn",
    SichuanYi: "ii",
    Occitan: "oc",
    Ojibwa: "oj",
    Oriya: "or",
    Oromo: "om",
    Ossetian: "os",
    Pali: "pi",
    Pashto: "ps",
    Persian: "fa",
    Polish: "pl",
    Portuguese: "pt",
    Punjabi: "pa",
    Quechua: "qu",
    Romanian: "ro",
    Romansh: "rm",
    Rundi: "rn",
    Russian: "ru",
    NorthernSami: "se",
    Samoan: "sm",
    Sango: "sg",
    Sanskrit: "sa",
    Sardinian: "sc",
    Serbian: "sr",
    Shona: "sn",
    Sindhi: "sd",
    Sinhala: "si",
    Slovak: "sk",
    Slovenian: "sl",
    Somali: "so",
    SouthernSotho: "st",
    Spanish: "es",
    Sundanese: "su",
    Swahili: "sw",
    Swati: "ss",
    Swedish: "sv",
    Tagalog: "tl",
    Tahitian: "ty",
    Tajik: "tg",
    Tamil: "ta",
    Tatar: "tt",
    Telugu: "te",
    Thai: "th",
    Tibetan: "bo",
    Tigrinya: "ti",
    Tonga: "to",
    Tsonga: "ts",
    Tswana: "tn",
    Turkish: "tr",
    Turkmen: "tk",
    Twi: "tw",
    Uighur: "ug",
    Ukrainian: "uk",
    Urdu: "ur",
    Uzbek: "uz",
    Venda: "ve",
    Vietnamese: "vi",
    Volapük: "vo",
    Walloon: "wa",
    Welsh: "cy",
    Wolof: "wo",
    Xhosa: "xh",
    Yiddish: "yi",
    Yoruba: "yo",
    Zhuang: "za",
    Zulu: "zu",
} as const;
