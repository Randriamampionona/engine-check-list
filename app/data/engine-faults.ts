export const ENGINE_FAULTS_LIST: EngineFault[] = [
  {
    Blinks: 1,
    FailureCode: "P0217",
    Priority: 1,
    FaultDescription: {
      en: "Engine Overheating",
      fr: "Surchauffe du moteur",
    },
    FaultManagement: {
      en: [
        "Stop immediately and check CELP code",
        "Check engine thermo sensor wiring and connections",
        "Check lubrication and cooling systems",
      ],
      fr: [
        "Arrêtez-vous immédiatement et vérifiez le code CELP",
        "Vérifiez le câblage du thermosonde moteur",
        "Vérifiez les systèmes de lubrification et de refroidissement",
      ],
    },
  },
  {
    Blinks: 2,
    FailureCode: "P0335",
    Priority: 2,
    FaultDescription: {
      en: "Crank Position Sensor (CPS) Fault",
      fr: "Défaut du capteur de position du vilebrequin (CPS)",
    },
    FaultManagement: {
      en: [
        "Check CPS wiring and connections",
        "Check CPS to flywheel gap (0.6mm-1.2mm)",
        "Check circuit resistance (100-130 ohms)",
      ],
      fr: [
        "Vérifiez le câblage et les connexions du CPS",
        "Vérifiez l'entrefer du CPS (0,6 mm - 1,2 mm)",
        "Vérifiez la résistance du circuit (100-130 ohms)",
      ],
    },
  },
  {
    Blinks: 3,
    FailureCode: "P1120",
    Priority: 2,
    FaultDescription: {
      en: "Throttle Position Sensor (TPS) Fault",
      fr: "Défaut du capteur de position du papillon (TPS)",
    },
    FaultManagement: {
      en: [
        "Check TPS wiring and connections",
        "Ensure TPS is 0% when throttle is closed (0.68V +/- 0.03V)",
        "Use diagnostic tool to reset code",
      ],
      fr: [
        "Vérifiez le câblage et les connexions du TPS",
        "Vérifiez que le TPS est à 0% papillon fermé (0,68V +/- 0,03V)",
        "Utilisez l'outil de diagnostic pour réinitialiser le code",
      ],
    },
  },
  {
    Blinks: 4,
    FailureCode: "P1121",
    Priority: 2,
    FaultDescription: {
      en: "TPS Output abnormal",
      fr: "Sortie du capteur TPS anormale",
    },
    FaultManagement: {
      en: [
        "Check TPS wiring for loose connections",
        "Check TPS voltage range (below 0.5V at idle)",
      ],
      fr: [
        "Vérifiez les connexions lâches du TPS",
        "Vérifiez la plage de tension du TPS (inférieure à 0,5V au ralenti)",
      ],
    },
  },
  {
    Blinks: 5,
    FailureCode: "P1122",
    Priority: 2,
    FaultDescription: {
      en: "TPS Velocity Fault",
      fr: "Défaut de vélocité du capteur TPS",
    },
    FaultManagement: {
      en: [
        "Check TPS wiring",
        "Check for mechanical sticking in throttle body",
        "Replace TPS sensor if needed",
      ],
      fr: [
        "Vérifiez le câblage du TPS",
        "Vérifiez si le corps de papillon est grippé",
        "Remplacez le capteur TPS si nécessaire",
      ],
    },
  },
  {
    Blinks: 6,
    FailureCode: "P0560",
    Priority: 1,
    FaultDescription: {
      en: "Battery Voltage abnormal",
      fr: "Tension de batterie anormale",
    },
    FaultManagement: {
      en: [
        "Check battery voltage (12-15V)",
        "Check stator output (13.5-14.5V)",
        "Check ECU wiring for shorts",
      ],
      fr: [
        "Vérifiez la tension de la batterie (12-15V)",
        "Vérifiez la sortie du stator (13,5-14,5V)",
        "Vérifiez les courts-circuits dans le câblage de l'ECU",
      ],
    },
  },
  {
    Blinks: 7,
    FailureCode: "P0110",
    Priority: 2,
    FaultDescription: {
      en: "Inlet Air Thermosensor (IAT) Fault",
      fr: "Défaut du capteur de température d'air (IAT)",
    },
    FaultManagement: {
      en: [
        "Check IAT wiring and connections",
        "Check IAT resistance (2554-568.9 ohms @ 20-60°C)",
      ],
      fr: [
        "Vérifiez le câblage et les connexions de l'IAT",
        "Vérifiez la résistance de l'IAT (2554-568,9 ohms à 20-60°C)",
      ],
    },
  },
  {
    Blinks: 8,
    FailureCode: "P0410",
    Priority: 2,
    FaultDescription: {
      en: "Idle Air Bypass Valve (IABV) Fault",
      fr: "Défaut de la valve d'air de ralenti (IABV/ISC)",
    },
    FaultManagement: {
      en: ["Check IABV wiring", "Check IABV resistance (24.7-27.3 ohms)"],
      fr: [
        "Vérifiez le câblage de l'IABV",
        "Vérifiez la résistance de l'IABV (24,7-27,3 ohms)",
      ],
    },
  },
  {
    Blinks: 9,
    FailureCode: "P0505",
    Priority: 2,
    FaultDescription: {
      en: "Idle Air Bypass Control Range Fault",
      fr: "Défaut de plage du contrôle d'air de ralenti",
    },
    FaultManagement: {
      en: [
        "Check throttle body for carbon deposits",
        "Check intake for air leaks",
        "Check idle throttle valve for sticking",
      ],
      fr: [
        "Vérifiez les dépôts de carbone dans le corps de papillon",
        "Vérifiez les fuites d'air à l'admission",
        "Vérifiez si la valve de ralenti est grippée",
      ],
    },
  },
  {
    Blinks: 10,
    FailureCode: "P0251",
    Priority: 2,
    FaultDescription: {
      en: "Fuel Injector Fault",
      fr: "Défaut de l'injecteur de carburant",
    },
    FaultManagement: {
      en: [
        "Check injector resistance (13.78-15.23 ohms)",
        "Check injector wiring and ECU connections",
      ],
      fr: [
        "Vérifiez la résistance de l'injecteur (13,78-15,23 ohms)",
        "Vérifiez le câblage de l'injecteur et de l'ECU",
      ],
    },
  },
  {
    Blinks: 11,
    FailureCode: "P0350",
    Priority: 2,
    FaultDescription: {
      en: "Ignition Coil Fault",
      fr: "Défaut de la bobine d'allumage",
    },
    FaultManagement: {
      en: [
        "Verify ignition coil resistance (0.57-0.66 ohms)",
        "Check wiring and spark plug cap",
      ],
      fr: [
        "Vérifiez la résistance de la bobine (0,57-0,66 ohms)",
        "Vérifiez le câblage et l'antiparasite",
      ],
    },
  },
  {
    Blinks: 12,
    FailureCode: "P0230",
    Priority: 2,
    FaultDescription: {
      en: "Fuel Pump Relay Fault",
      fr: "Défaut du relais de pompe à carburant",
    },
    FaultManagement: {
      en: ["Check relay wiring", "Listen for relay click on ignition ON"],
      fr: [
        "Vérifiez le câblage du relais",
        "Écoutez le clic du relais à la mise du contact",
      ],
    },
  },
  {
    Blinks: 13,
    FailureCode: "P0219",
    Priority: 2,
    FaultDescription: {
      en: "Engine Over Speed Condition Fault",
      fr: "Défaut de surrégime moteur",
    },
    FaultManagement: {
      en: [
        "Check CVT belt condition",
        "Ensure resistor spark plug (type R) is used",
      ],
      fr: [
        "Vérifiez l'état de la courroie CVT",
        "Assurez-vous d'utiliser une bougie avec résistance (type R)",
      ],
    },
  },
  {
    Blinks: 14,
    FailureCode: "P1560",
    Priority: 2,
    FaultDescription: {
      en: "Sensor Power Supply Fault",
      fr: "Défaut d'alimentation des capteurs",
    },
    FaultManagement: {
      en: [
        "Check ECU pin 18 (5V DC output)",
        "If multiple faults (IAT, TPS, ECT), ECU may be faulty",
      ],
      fr: [
        "Vérifiez la broche 18 de l'ECU (sortie 5V DC)",
        "Si plusieurs défauts (IAT, TPS, ECT), l'ECU peut être HS",
      ],
    },
  },
  {
    Blinks: 15,
    FailureCode: "P0700",
    Priority: 2,
    FaultDescription: {
      en: "Engine RPM/CVT Fault",
      fr: "Défaut régime moteur / CVT",
    },
    FaultManagement: {
      en: ["Check throttle cables for binding", "Check CVT belt for damage"],
      fr: [
        "Vérifiez si les câbles d'accélérateur sont coincés",
        "Vérifiez si la courroie CVT est endommagée",
      ],
    },
  },
  {
    Blinks: 16,
    FailureCode: "P0115",
    Priority: 2,
    FaultDescription: {
      en: "Cylinder Head Thermosensor Fault",
      fr: "Défaut du thermosonde de culasse",
    },
    FaultManagement: {
      en: [
        "Check resistance (cold: 2445-5458 ohms)",
        "Check wiring for ECU pin 9",
      ],
      fr: [
        "Vérifiez la résistance (froid : 2445-5458 ohms)",
        "Vérifiez le câblage vers la broche 9 de l'ECU",
      ],
    },
  },
  {
    Blinks: 18,
    FailureCode: "P0650",
    Priority: 3,
    FaultDescription: {
      en: "Check Engine Light (CELP) Fault",
      fr: "Défaut du voyant moteur (CELP)",
    },
    FaultManagement: {
      en: ["Check bulb (1.7W 12V DC)", "Check wiring for ECU pin 4"],
      fr: [
        "Vérifiez l'ampoule (1,7W 12V DC)",
        "Vérifiez le câblage vers la broche 4 de l'ECU",
      ],
    },
  },
  {
    Blinks: 21,
    FailureCode: "P0105",
    Priority: 2,
    FaultDescription: {
      en: "Atmospheric Pressure Sensor Fault",
      fr: "Défaut du capteur de pression atmosphérique",
    },
    FaultManagement: {
      en: [
        "Check sensor voltage (5V +/- 0.1V)",
        "Check pressure reading via diagnostic tool (101.3 +/- 3 KPA)",
      ],
      fr: [
        "Vérifiez la tension du capteur (5V +/- 0,1V)",
        "Vérifiez la pression via l'outil de diagnostic (101,3 +/- 3 KPA)",
      ],
    },
  },
  {
    Blinks: 22,
    FailureCode: "P1110",
    Priority: 2,
    FaultDescription: {
      en: "Bank Angle Detector Sensor Fault",
      fr: "Défaut du capteur d'angle (Roll Sensor)",
    },
    FaultManagement: {
      en: ["Check sensor voltage (3.5~4.7V)", "Check wiring for ECU pin 11"],
      fr: [
        "Vérifiez la tension du capteur (3,5~4,7V)",
        "Vérifiez le câblage vers la broche 11 de l'ECU",
      ],
    },
  },
  {
    Blinks: 23,
    FailureCode: "P0136",
    Priority: 1,
    FaultDescription: {
      en: "O2 Sensor Fault",
      fr: "Défaut de la sonde O2 (Lambda)",
    },
    FaultManagement: {
      en: [
        "Check sensor resistance (6.7-9.5 ohms @ 20-30°C)",
        "Check ECU wiring pin 10",
      ],
      fr: [
        "Vérifiez la résistance de la sonde (6,7-9,5 ohms à 20-30°C)",
        "Vérifiez le câblage vers la broche 10 de l'ECU",
      ],
    },
  },
  {
    Blinks: 24,
    FailureCode: "P0141",
    Priority: 2,
    FaultDescription: {
      en: "O2 Heater Sensor Fault",
      fr: "Défaut du chauffage de la sonde O2",
    },
    FaultManagement: {
      en: [
        "Check wiring for ECU pin 14",
        "Replace O2 sensor if heater is open",
      ],
      fr: [
        "Vérifiez le câblage vers la broche 14 de l'ECU",
        "Remplacez la sonde O2 si le chauffage est coupé",
      ],
    },
  },
  {
    Blinks: 25,
    FailureCode: "P0171",
    Priority: 1,
    FaultDescription: {
      en: "Closed Loop Fault",
      fr: "Défaut de boucle fermée",
    },
    FaultManagement: {
      en: [
        "Check for air leaks in intake",
        "Check if injector is clogged",
        "Verify valve timing",
      ],
      fr: [
        "Vérifiez les fuites d'air à l'admission",
        "Vérifiez si l'injecteur est bouché",
        "Vérifiez le calage de la distribution",
      ],
    },
  },
];
