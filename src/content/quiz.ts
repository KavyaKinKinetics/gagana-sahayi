export type Q = {
  id: string;
  q: { en: string; ml: string };
  options: { en: string[]; ml: string[] };
  answer: number;      // index of correct option
  explain: { en: string; ml: string };
};

export const QUIZ: Q[] = [
  {
    id: "fluids",
    q: {
      en: "In microgravity, what tends to shift toward the head?",
      ml: "മൈക്രോഗ്രാവിറ്റിയിൽ ശരീരത്തിലെ ഏത് ദ്രവങ്ങൾ തലഭാഗത്തേക്ക് മാറുന്നു?"
    },
    options: {
      en: ["Body fluids", "Gravity", "Mountains"],
      ml: ["ശരീര ദ്രവങ്ങൾ", "ഗ്രാവിറ്റി", "മലകൾ"]
    },
    answer: 0,
    explain: {
      en: "Fluids move headward; routines help manage the effects.",
      ml: "ദ്രവങ്ങൾ തലഭാഗത്തേക്ക് നീങ്ങാം; ലളിതമായ രീതികൾ ഈ സ്വാധീനം കൈകാര്യം ചെയ്യാൻ സഹായിക്കുന്നു."
    }
  },
  {
    id: "breathing",
    q: {
      en: "Which short routine can reduce stress in ~60 seconds?",
      ml: "ഏത് ചെറിയ രീതിയാണ് ഏകദേശം 60 സെക്കൻഡിൽ സമ്മർദ്ദം കുറയ്ക്കാൻ സഹായിക്കുന്നത്?"
    },
    options: {
      en: ["Doomscrolling", "Paced breathing", "Holding your breath"],
      ml: ["ഡൂംസ്ക്രോളിംഗ്", "പേസ് ചെയ്ത ശ്വസനം", "ശ്വാസം പിടിച്ച് നില്‍ക്കുക"]
    },
    answer: 1,
    explain: {
      en: "Paced breathing (e.g., 4–2–6) calms the nervous system.",
      ml: "പേസ് ചെയ്ത ശ്വസനം (ഉദാ: 4–2–6) നാഡീ വ്യവസ്ഥയെ ശാന്തമാക്കുന്നു."
    }
  },
  {
    id: "routines",
    q: {
      en: "Why do astronauts follow strict routines?",
      ml: "ബഹിരാകാശ യാത്രികർ കർശനമായ രീതികൾ പിന്തുടരുന്നത് എന്തുകൊണ്ട്?"
    },
    options: {
      en: [
        "To make days feel longer",
        "To manage sleep, focus and performance",
        "Because mission control said so"
      ],
      ml: [
        "ദിവസങ്ങൾ നീണ്ടതായി തോന്നാൻ",
        "ഉറക്കം, ശ്രദ്ധ, പ്രകടനം നിയന്ത്രിക്കാൻ",
        "മിഷൻ കൺട്രോൾ പറഞ്ഞതുകൊണ്ട്"
      ]
    },
    answer: 1,
    explain: {
      en: "Routines stabilize sleep and attention in demanding conditions.",
      ml: "കർശന സാഹചര്യങ്ങളിൽ ഉറക്കവും ശ്രദ്ധയും സ്ഥിരതയാർജ്ജിക്കാൻ രീതികൾ സഹായിക്കുന്നു."
    }
  },
  {
    id: "bones",
    q: {
      en: "What happens to astronauts’ bones in microgravity?",
      ml: "മൈക്രോഗ്രാവിറ്റിയിൽ ആസ്ട്രോനോട്ടുകളുടെ അസ്ഥികൾക്ക് എന്ത് സംഭവിക്കുന്നു?"
    },
    options: {
      en: ["They get denser", "They lose density", "They grow longer"],
      ml: ["അവ സാന്ദ്രമാകും", "അവ സാന്ദ്രത നഷ്ടപ്പെടും", "അവ നീളം കൂടും"]
    },
    answer: 1,
    explain: {
      en: "Bones lose density without gravity, like osteoporosis.",
      ml: "ഗ്രാവിറ്റി ഇല്ലാതെ അസ്ഥികൾ സാന്ദ്രത നഷ്ടപ്പെടും, ഓസ്റ്റിയോപ്പോറോസിസ് പോലെ."
    }
  },
  {
    id: "muscles",
    q: {
      en: "What happens to muscles in space without exercise?",
      ml: "ബഹിരാകാശത്ത് വ്യായാമമില്ലാതെ പേശികൾക്ക് എന്ത് സംഭവിക്കും?"
    },
    options: {
      en: ["They get stronger", "They shrink (atrophy)", "They don’t change"],
      ml: ["അവ ശക്തമാകും", "അവ ചുരുങ്ങും (അട്രോഫി)", "അവ മാറില്ല"]
    },
    answer: 1,
    explain: {
      en: "Muscles atrophy without daily exercise in space.",
      ml: "വ്യായാമമില്ലാതെ പേശികൾ ബഹിരാകാശത്ത് അട്രോഫി ചെയ്യും."
    }
  },
  {
    id: "cortisol",
    q: {
      en: "Which hormone rises during stress in astronauts?",
      ml: "ആസ്ട്രോനോട്ടുകളുടെ സമ്മർദ്ദകാലത്ത് ഏത് ഹോർമോൺ കൂടും?"
    },
    options: {
      en: ["Oxytocin", "Cortisol", "Melatonin"],
      ml: ["ഓക്സിടോസിൻ", "കോർട്ടിസോൾ", "മെലട്ടോണിൻ"]
    },
    answer: 1,
    explain: {
      en: "Cortisol is the main stress hormone monitored in space.",
      ml: "കോർട്ടിസോൾ ആണ് ബഹിരാകാശത്തിൽ ശ്രദ്ധിക്കപ്പെടുന്ന പ്രധാന സമ്മർദ്ദ ഹോർമോൺ."
    }
  },
  {
    id: "oxytocin",
    q: {
      en: "Which hormone is linked to bonding and teamwork?",
      ml: "ബന്ധത്തിനും ടീം വർക്ക്‍ക്കും ഏത് ഹോർമോൺ ബന്ധപ്പെട്ടിരിക്കുന്നു?"
    },
    options: {
      en: ["Oxytocin", "Adrenaline", "Insulin"],
      ml: ["ഓക്സിടോസിൻ", "അഡ്രിനലൈൻ", "ഇൻസുലിൻ"]
    },
    answer: 0,
    explain: {
      en: "Oxytocin supports trust and cohesion in teams.",
      ml: "ഓക്സിടോസിൻ ടീമിലെ വിശ്വാസവും ഐക്യവും വളർത്തുന്നു."
    }
  },
  {
    id: "vestibular",
    q: {
      en: "Why do astronauts feel dizzy in microgravity?",
      ml: "മൈക്രോഗ്രാവിറ്റിയിൽ ആസ്ട്രോനോട്ടുകൾ തലകറങ്ങുന്നത് എന്തുകൊണ്ട്?"
    },
    options: {
      en: ["Vestibular system gets confused", "Oxygen drops", "Eyes stop working"],
      ml: ["വെസ്റ്റിബുലാർ സിസ്റ്റം കുഴങ്ങുന്നു", "ഓക്സിജൻ കുറയുന്നു", "കണ്ണുകൾ പ്രവർത്തനം നിർത്തുന്നു"]
    },
    answer: 0,
    explain: {
      en: "The balance system is confused without gravity cues.",
      ml: "ഗ്രാവിറ്റി സൂചനകളില്ലാതെ ബാലൻസ് സിസ്റ്റം കുഴങ്ങുന്നു."
    }
  },
  {
    id: "immune",
    q: {
      en: "How does spaceflight affect the immune system?",
      ml: "ബഹിരാകാശയാത്ര പ്രതിരോധ സംവിധാനത്തെ എങ്ങനെ ബാധിക്കുന്നു?"
    },
    options: {
      en: ["Strengthens it", "Weakens it", "No effect"],
      ml: ["അത് ശക്തമാക്കും", "അത് ദുർബലമാക്കും", "എന്തും സംഭവിക്കില്ല"]
    },
    answer: 1,
    explain: {
      en: "Immunity weakens, increasing infection risk.",
      ml: "പ്രതിരോധം ദുർബലമാകുന്നു, അണുബാധാ സാധ്യത കൂടുന്നു."
    }
  },
  {
    id: "radiation",
    q: {
      en: "What is the main genetic risk of cosmic radiation?",
      ml: "കോസ്മിക് റേഡിയേഷൻ്റെ പ്രധാന ജനിതക അപകടം ഏതാണ്?"
    },
    options: {
      en: ["DNA mutations", "Bone fractures", "Muscle cramps"],
      ml: ["ഡിഎൻഎ മ്യൂട്ടേഷനുകൾ", "അസ്ഥി പൊട്ടലുകൾ", "പേശി വേദനകൾ"]
    },
    answer: 0,
    explain: {
      en: "Radiation damages DNA, leading to mutations.",
      ml: "റേഡിയേഷൻ ഡിഎൻഎയെ കേടാക്കുകയും മ്യൂട്ടേഷനുകൾ ഉണ്ടാക്കുകയും ചെയ്യും."
    }
  },
  {
    id: "sleep",
    q: {
      en: "Why is melatonin important for astronauts?",
      ml: "ആസ്ട്രോനോട്ടുകൾക്ക് മെലട്ടോണിൻ എന്തുകൊണ്ട് പ്രധാനമാണ്?"
    },
    options: {
      en: ["Regulates sleep", "Builds muscles", "Boosts appetite"],
      ml: ["ഉറക്കം നിയന്ത്രിക്കുന്നു", "പേശികൾ നിർമ്മിക്കുന്നു", "ഭക്ഷണാഭിലാഷം കൂട്ടുന്നു"]
    },
    answer: 0,
    explain: {
      en: "Melatonin helps regulate sleep in disrupted cycles.",
      ml: "മെലട്ടോണിൻ തടസ്സപ്പെട്ട ചക്രങ്ങളിൽ ഉറക്കം നിയന്ത്രിക്കുന്നു."
    }
  },
  {
    id: "teamwork",
    q: {
      en: "What psychological factor is key for long missions?",
      ml: "ദീർഘകാല ദൗത്യങ്ങൾക്ക് ഏത് മാനസിക ഘടകമാണ് പ്രധാനപ്പെട്ടത്?"
    },
    options: {
      en: ["Team cohesion", "Hair growth", "Appetite"],
      ml: ["ടീം ഐക്യം", "മുടി വളർച്ച", "ഭക്ഷണാഭിലാഷം"]
    },
    answer: 0,
    explain: {
      en: "Strong team cohesion reduces conflict in space.",
      ml: "ടീം ഐക്യം ബഹിരാകാശത്തിലെ സംഘർഷങ്ങൾ കുറയ്ക്കുന്നു."
    }
  },
  {
    id: "dna",
    q: {
      en: "Which body system repairs radiation damage?",
      ml: "റേഡിയേഷൻ കേടുപാടുകൾ ഏത് ശരീര സംവിധാനം അറ്റകുറ്റപ്പണികൾ നടത്തുന്നു?"
    },
    options: {
      en: ["DNA repair system", "Digestive system", "Respiratory system"],
      ml: ["ഡിഎൻഎ അറ്റകുറ്റ സംവിധാനം", "ജീർണ്ണ വ്യവസ്ഥ", "ശ്വസന വ്യവസ്ഥ"]
    },
    answer: 0,
    explain: {
      en: "DNA repair mechanisms try to fix space radiation damage.",
      ml: "ഡിഎൻഎ അറ്റകുറ്റ സംവിധാനങ്ങൾ ബഹിരാകാശ റേഡിയേഷൻ കേടുപാടുകൾ പരിഹരിക്കാൻ ശ്രമിക്കുന്നു."
    }
  },
  {
    id: "antioxidants",
    q: {
      en: "Which nutrient helps protect against space radiation?",
      ml: "ബഹിരാകാശ റേഡിയേഷനിൽ നിന്ന് സംരക്ഷിക്കാൻ ഏത് പോഷകമാണ് സഹായിക്കുന്നത്?"
    },
    options: {
      en: ["Antioxidants", "Calcium", "Protein"],
      ml: ["ആന്റിഓക്സിഡന്റുകൾ", "കാൽസ്യം", "പ്രോട്ടീൻ"]
    },
    answer: 0,
    explain: {
      en: "Antioxidants reduce DNA and cell damage.",
      ml: "ആന്റിഓക്സിഡന്റുകൾ ഡിഎൻഎയും കോശ കേടുപാടുകളും കുറയ്ക്കുന്നു."
    }
  }
];