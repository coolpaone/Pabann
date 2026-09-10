export interface Translations {
  nav: {
    about: string;
    experience: string;
    gallery: string;
    expertise: string;
    contact: string;
    languageToggle: string;
    languageLabel: string;
  };
  hero: {
    statusBadge: string;
    name: string;
    role: string;
    summary: string;
    ctaContact: string;
    ctaResume: string;
    stats: {
      experienceTitle: string;
      experienceSub: string;
      uptimeTitle: string;
      uptimeSub: string;
      opticalTitle: string;
      opticalSub: string;
      stationTitle: string;
      stationSub: string;
    };
  };
  experience: {
    badge: string;
    title: string;
    subtitle: string;
    present: string;
    fullTimeRole: string;
    broadbandRole: string;
    fieldOpsRole: string;
    ntcRole: string;
    ntcCompany: string;
    ntcSummary: string;
    ntcHighlights: string[];
    classicRole: string;
    classicCompany: string;
    classicHighlights: string[];
    assistantRole: string;
    assistantCompany: string;
    assistantHighlights: string[];
  };
  gallery: {
    badge: string;
    title: string;
    subtitle: string;
    filters: {
      all: string;
      tower: string;
      splicing: string;
      aerial: string;
      exchange: string;
    };
    viewNode: string;
    modalLocation: string;
    close: string;
  };
  expertise: {
    badge: string;
    title: string;
    subtitle: string;
    categories: {
      opticalTitle: string;
      opticalSubtitle: string;
      hardwareTitle: string;
      hardwareSubtitle: string;
      fieldTitle: string;
      fieldSubtitle: string;
    };
    proficiencyLabel: string;
  };
  fiberSpotlight: {
    badge: string;
    title: string;
    description: string;
    metric1Label: string;
    metric1Val: string;
    metric2Label: string;
    metric2Val: string;
    metric3Label: string;
    metric3Val: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    profileName: string;
    profileCompany: string;
    profileRole: string;
    officialEmail: string;
    personalPortal: string;
    directContactNumber: string;
    locationLabel: string;
    locationValue: string;
    formTitle: string;
    formSubtitle: string;
    inputName: string;
    inputEmail: string;
    inputSubject: string;
    inputMessage: string;
    submitButton: string;
    submitting: string;
    successMessage: string;
  };
  footer: {
    description: string;
    telemetryTitle: string;
    nodeActive: string;
    madeWith: string;
    allRightsReserved: string;
  };
  resumeModal: {
    title: string;
    subtitle: string;
    downloadPdf: string;
    print: string;
    close: string;
    executiveSummary: string;
    professionalExperience: string;
    opticalCompetencies: string;
    certifications: string;
    certifiedBy: string;
  };
}

export const TRANSLATIONS: Record<'en' | 'ne', Translations> = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      gallery: 'Gallery',
      expertise: 'Expertise',
      contact: 'Contact',
      languageToggle: 'नेपाली',
      languageLabel: 'Switch to Nepali',
    },
    hero: {
      statusBadge: 'CARRIER NODE ACTIVE',
      name: 'Paban Nepali',
      role: 'Professional Telecommunications Technician',
      summary:
        "I'm a technology and telecom enthusiast passionate about connecting people, communities, and ideas through technology—contributing to Nepal's digital growth while creating meaningful connections with the world. I specialize in architecting and deploying robust fiber-optic transport networks, high-reliability copper infrastructure, and carrier-grade BTS/OLT transmission systems across Nepal Telecom's core urban zones and challenging mountainous terrains. My work sits at the intersection of resilient network engineering, connectivity, and innovation, with a focus on building reliable telecommunications infrastructure that enables communities, businesses, and the nation to stay connected.",
      ctaContact: 'Direct Dispatch Contact',
      ctaResume: 'View Field Dossier',
      stats: {
        experienceTitle: 'Years Field Experience',
        experienceSub: 'Telecom & Fiber Optics',
        uptimeTitle: 'SLA Availability',
        uptimeSub: 'Zero Fault Tolerant Lines',
        opticalTitle: 'Optical Lines Serviced',
        opticalSub: 'FTTH / GPON / ODP Splices',
        stationTitle: 'BTS & OLT Sites Maintained',
        stationSub: 'Macro Towers & Central Nodes',
      },
    },
    experience: {
      badge: 'MISSION LOG & DEPLOYMENT',
      title: 'Career Experience & Deployment Milestones',
      subtitle: 'Proven track record across national telecommunications carriers, broadband infrastructure, and optical transport grids.',
      present: 'PRESENT',
      fullTimeRole: 'FULL TIME CARRIER ROLE',
      broadbandRole: 'BROADBAND / ISP OPERATIONS',
      fieldOpsRole: 'FIELD OPERATIONS',
      ntcRole: 'Professional Telecom Technician',
      ntcCompany: 'Nepal Telecom (National State Telecommunications Provider)',
      ntcSummary: 'Charged with carrier-grade transport integrity across complex mountainous and urban regions:',
      ntcHighlights: [
        'Supervised critical Optical Line Terminals (OLT) and Base Transceiver Stations (BTS) across active sectors.',
        'Maintained multi-strand fiber-optic backbones and legacy copper trunk routing networks.',
        'Deployed optical splitters, high-speed fiber modems, enterprise CPE equipment, and VoIP telephony units.',
        'Conducted emergency OTDR testing, optical fusion splicing, and resolved Tier-3 escalated subscriber faults.',
        'Supervised regional revenue collection center operations, administrative billing workflows, and guaranteed uninterrupted connectivity SLA standards.',
      ],
      classicRole: 'Senior Sales & Service Associate',
      classicCompany: 'Classic Tech Pvt. Ltd.',
      classicHighlights: [
        'Directed high-density GPON fiber line installation and residential distribution hub routing.',
        'Engineered IPTV broadcast network configurations and multicast signal synchronization.',
        'Fine-tuned dual-band mesh Wi-Fi extensions and residential router diagnostics for enterprise clients.',
        'Delivered high-tier customer issue escalations with standard MTTR under 4 hours.',
      ],
      assistantRole: 'Technical Assistant',
      assistantCompany: 'Nepal Telecom (Naxal Exchange)',
      assistantHighlights: [
        'Maintained and repaired primary fiber optic trunks and copper loop lines across central Kathmandu.',
        'Installed terminal subscriber modem equipment, landline phones, and optical transceivers.',
        'Executed on-ground diagnostic sweeps to locate physical breaks, damp lines, and signal degradation.',
        'Interfaced directly with corporate and residential subscribers for end-to-end service verification.',
      ],
    },
    gallery: {
      badge: 'FIELD EVIDENCE & SITES',
      title: 'Field & Professional Photo Gallery',
      subtitle: 'Photographic documentation of telecommunication tower deployments, optical splicing labs, mountain BTS sites, and core exchange operations across Nepal.',
      filters: {
        all: 'All Operations',
        tower: 'Tower & BTS',
        splicing: 'Optical Splicing',
        aerial: 'Aerial & Mountain',
        exchange: 'Exchange & OLT',
      },
      viewNode: 'Inspect Field Photo',
      modalLocation: 'Operational Sector',
      close: 'Close Preview',
    },
    expertise: {
      badge: 'TECHNICAL MATRIX',
      title: 'Technical Skills & Core Competencies',
      subtitle: 'Rigorous engineering standards across photonic transport, subscriber loops, precision diagnostics, and mountain field logistics.',
      categories: {
        opticalTitle: 'Optical & Network Transport',
        opticalSubtitle: 'Layer 1 & Layer 2 Architecture',
        hardwareTitle: 'Hardware & Diagnostic Tools',
        hardwareSubtitle: 'Photonic Metering & Calibration',
        fieldTitle: 'Field Operations & Discipline',
        fieldSubtitle: 'Site Execution & Rapid Response',
      },
      proficiencyLabel: 'Proficiency Level',
    },
    fiberSpotlight: {
      badge: 'CARRIER OPTICAL TRANSPORT',
      title: 'Dense Wavelength & Fiber Infrastructure',
      description: 'Engineering resilient, ultra-low attenuation fiber backbones capable of sustaining national telecommunications throughput across rugged topography and high-density urban clusters.',
      metric1Label: 'Core Optical Precision',
      metric1Val: '< 0.02 dB',
      metric2Label: 'DWDM Spectral Bands',
      metric2Val: 'C & L Band',
      metric3Label: 'Optical Availability',
      metric3Val: '99.99%',
    },
    contact: {
      badge: 'DISPATCH CONSOLE',
      title: 'Mission-Critical Telecom Console',
      subtitle: 'Establish direct communication for technical field consults, optical transport deployments, or carrier network escalations.',
      profileName: 'Paban Nepali',
      profileCompany: 'Nepal Telecom',
      profileRole: 'Telecom Technician',
      officialEmail: 'Official Email',
      personalPortal: 'Personal Portal',
      directContactNumber: 'Direct Contact Number',
      locationLabel: 'Base Stations & Locations',
      locationValue: 'Home: Gorkha, Nepal | Work: Palpa, Nepal',
      formTitle: 'Direct Dispatch Transmission',
      formSubtitle: 'Send encrypted operational message directly to technician console.',
      inputName: 'Full Name / Agency',
      inputEmail: 'Return Email Address',
      inputSubject: 'Inquiry / Operational Dispatch Subject',
      inputMessage: 'Operational Brief or Technical Message',
      submitButton: 'Transmit Message to Dispatch',
      submitting: 'Transmitting Signal...',
      successMessage: 'Transmission successfully delivered to Paban Nepali. We will respond promptly.',
    },
    footer: {
      description: 'Professional Telecommunications Technician specializing in resilient optical fiber transport, carrier-grade OLT/BTS systems, and enterprise connectivity across Nepal.',
      telemetryTitle: 'Telemetry & Specs',
      nodeActive: 'CARRIER NODE ACTIVE',
      madeWith: 'Made with 🩵 By Paban Nepali',
      allRightsReserved: '© 2026 Paban Nepali. All rights reserved.',
    },
    resumeModal: {
      title: 'OPERATIONAL FIELD DOSSIER',
      subtitle: 'VERIFIED CARRIER CREDENTIAL RECORD',
      downloadPdf: 'Download PDF',
      print: 'Print Dossier',
      close: 'Close',
      executiveSummary: 'Executive Profile & Mission',
      professionalExperience: 'Professional Experience',
      opticalCompetencies: 'Optical & Hardware Tool Competencies',
      certifications: 'Official Certifications & Training',
      certifiedBy: 'CERTIFIED BY NEPAL TELECOM TRAINING CENTER',
    },
  },
  ne: {
    nav: {
      about: 'परिचय',
      experience: 'कार्य अनुभव',
      gallery: 'फोटो ग्यालरी',
      expertise: 'प्राविधिक दक्षता',
      contact: 'सम्पर्क',
      languageToggle: 'English',
      languageLabel: 'Switch to English',
    },
    hero: {
      statusBadge: 'क्यारियर नोड सक्रिय',
      name: 'पवन नेपाली',
      role: 'व्यावसायिक दूरसञ्चार प्राविधिक',
      summary:
        'म प्रविधि र दूरसञ्चार क्षेत्रप्रति समर्पित एक उत्साही प्राविधिक हुँ, जसले प्रविधिको माध्यमबाट मानिसहरू, समुदायहरू र विचारहरूलाई जोड्ने कार्यमा विश्वास राख्छु — नेपालको डिजिटल विकासमा योगदान पुर्‍याउँदै विश्वसँग अर्थपूर्ण सम्बन्ध निर्माण गर्न म प्रतिबद्ध छु। मेरो विशेषज्ञता भरपर्दो फाइबर-अप्टिक ट्रान्सपोर्ट नेटवर्क, उच्च-विश्वसनीयता कपर पूर्वाधार, र नेपाल टेलिकमका सहरी केन्द्रहरू तथा दुर्गम पहाडी भेगहरूमा क्यारियर-ग्रेड BTS/OLT प्रसारण प्रणालीहरू विस्तार एवं मर्मत सम्भार गर्नुमा रहेको छ। मेरो कार्य भरपर्दो नेटवर्क इन्जिनियरिङ, कनेक्टिभिटी र नवप्रवर्तनको केन्द्रमा आधारित छ, जसले समुदाय, व्यवसाय र सिङ्गो राष्ट्रलाई निरन्तर जोडी राख्न मद्दत गर्दछ।',
      ctaContact: 'प्रत्यक्ष सम्पर्क गर्नुहोस्',
      ctaResume: 'कार्य विवरण / बायोडाटा',
      stats: {
        experienceTitle: 'वर्ष फिल्ड अनुभव',
        experienceSub: 'दूरसञ्चार तथा फाइबर अप्टिक्स',
        uptimeTitle: 'SLA अपटाइम उपलब्धता',
        uptimeSub: 'शून्य त्रुटि सहनशील लाइनहरू',
        opticalTitle: 'अप्टिकल लाइन सेवा',
        opticalSub: 'FTTH / GPON / ODP स्प्लिसिङ',
        stationTitle: 'BTS र OLT साइट मर्मत',
        stationSub: 'म्याक्रो टावर तथा केन्द्रीय नोडहरू',
      },
    },
    experience: {
      badge: 'कार्य विवरण तथा फिल्ड परिचालन',
      title: 'कार्य अनुभव तथा फिल्ड परिचालन कोशेढुङ्गाहरू',
      subtitle: 'राष्ट्रिय दूरसञ्चार सेवा प्रदायक, ब्रोडब्यान्ड पूर्वाधार र अप्टिकल ट्रान्सपोर्ट ग्रिडहरूमा प्रमाणित कार्य अनुभव।',
      present: 'हाल कार्यरत',
      fullTimeRole: 'पूर्णकालीन क्यारियर सेवा',
      broadbandRole: 'ब्रोडब्यान्ड / आईएसपी सञ्चालन',
      fieldOpsRole: 'फिल्ड सञ्चालन तथा मर्मत',
      ntcRole: 'व्यावसायिक दूरसञ्चार प्राविधिक',
      ntcCompany: 'नेपाल टेलिकम (राष्ट्रिय दूरसञ्चार सेवा प्रदायक)',
      ntcSummary: 'दुर्गम पहाडी तथा प्रमुख सहरी क्षेत्रहरूमा क्यारियर-ग्रेड ट्रान्सपोर्ट प्रणालीको विश्वसनीयता सुनिश्चितता:',
      ntcHighlights: [
        'सक्रिय क्षेत्रहरूमा संवेदनशील अप्टिकल लाइन टर्मिनल (OLT) र बेस ट्रान्सिभर स्टेसन (BTS) को प्रत्यक्ष निगरानी र मर्मत सम्भार।',
        'मल्टी-स्ट्रान्ड फाइबर-अप्टिक ब्याकबोन तथा कपर ट्रंक वितरण नेटवर्कहरूको सञ्चालन र सुरक्षा।',
        'अप्टिकल स्प्लिटर, उच्च गतिको फाइबर मोडेम, इन्टरप्राइज CPE उपकरण र VoIP टेलिफोनी प्रणाली जडान।',
        'आपतकालीन OTDR परीक्षण, कोर-अलाइनमेन्ट अप्टिकल फ्युजन स्प्लिसिङ, र टियर-३ ग्राहक गुनासो समाधान।',
        'क्षेत्रीय राजस्व सङ्कलन काउन्टर सञ्चालन, प्रशासनिक बिलिङ कार्यप्रवाह, र निर्वाध इन्टरनेट सेवाको SLA मापदण्ड प्रत्याभूति।',
      ],
      classicRole: 'सिनियर सेल्स एण्ड सर्भिस एसोसिएट',
      classicCompany: 'क्लासिक टेक प्रा. लि.',
      classicHighlights: [
        'उच्च घनत्व GPON फाइबर लाइन जडान तथा आवासीय वितरण हब व्यवस्थापन।',
        'IPTV प्रसारण नेटवर्क कन्फिगरेसन र मल्टिकास्ट सिग्नल सिङ्क्रोनाइजेसन।',
        'कर्पोरेट तथा आवासीय ग्राहकका लागि ड्युअल-ब्यान्ड मेश वाइफाइ र राउटर डायग्नोस्टिक्स।',
        '४ घण्टाभित्र उच्च स्तरका प्राविधिक समस्याहरूको द्रुत समाधान।',
      ],
      assistantRole: 'प्राविधिक सहायक',
      assistantCompany: 'नेपाल टेलिकम (नक्साल एक्सचेन्ज)',
      assistantHighlights: [
        'काठमाडौँ उपत्यकाको मुख्य फाइबर अप्टिक ट्रंक र कपर लुप लाइनहरूको मर्मत सम्भार।',
        'ग्राहक टर्मिनल मोडेम उपकरण, ल्यान्डलाइन फोन र अप्टिकल ट्रान्सिभर जडान।',
        'फाइबर टुटफुट, सिग्नल ह्रास र भौतिक समस्या पत्ता लगाउन स्थलगत डायग्नोस्टिक परीक्षण।',
        'कर्पोरेट तथा व्यक्तिगत ग्राहकहरूसँग प्रत्यक्ष समन्वय गरी सेवा सुचारु प्रमाणीकरण।',
      ],
    },
    gallery: {
      badge: 'फिल्ड कार्य तथा प्राविधिक प्रमाण',
      title: 'फिल्ड कार्य तथा प्राविधिक फोटो ग्यालरी',
      subtitle: 'नेपालभरका दूरसञ्चार टावर विस्तार, अप्टिकल स्प्लिसिङ प्रयोगशाला, पहाडी BTS साइटहरू र मुख्य एक्सचेन्ज सञ्चालनको प्रत्यक्ष तस्बिरहरू।',
      filters: {
        all: 'सबै कार्यहरू',
        tower: 'टावर तथा बीटीएस',
        splicing: 'फाइबर स्प्लिसिङ',
        aerial: 'एरियल तथा पहाडी',
        exchange: 'एक्सचेन्ज तथा OLT',
      },
      viewNode: 'फोटो विस्तृत हेर्नुहोस्',
      modalLocation: 'सञ्चालन क्षेत्र / स्थान',
      close: 'बन्द गर्नुहोस्',
    },
    expertise: {
      badge: 'प्राविधिक दक्षता सूचकाङ्क',
      title: 'प्राविधिक दक्षता तथा मुख्य सीपहरू',
      subtitle: 'फोटोनिक ट्रान्सपोर्ट, ग्राहक लुप, शुद्ध डायग्नोस्टिक्स र दुर्गम फिल्ड लजिस्टिकमा उच्च इन्जिनियरिङ मापदण्ड।',
      categories: {
        opticalTitle: 'अप्टिकल तथा नेटवर्क ट्रान्सपोर्ट',
        opticalSubtitle: 'तह १ र तह २ संरचना',
        hardwareTitle: 'हार्डवेयर तथा डायग्नोस्टिक उपकरण',
        hardwareSubtitle: 'फोटोनिक मिटरिङ र क्यालिब्रेसन',
        fieldTitle: 'फिल्ड सञ्चालन तथा कार्यकुशलता',
        fieldSubtitle: 'साइट व्यवस्थापन र द्रुत प्रतिक्रिया',
      },
      proficiencyLabel: 'दक्षता स्तर',
    },
    fiberSpotlight: {
      badge: 'क्यारियर अप्टिकल ट्रान्सपोर्ट पूर्वाधार',
      title: 'सघन तरङ्ग लम्बाइ (DWDM) र फाइबर पूर्वाधार',
      description: 'नेपालको चुनौतीपूर्ण भौगोलिक बनावट र बाक्लो सहरी क्षेत्रमा उच्च गतिको राष्ट्रिय दूरसञ्चार सेवा धान्न सक्ने भरपर्दो, न्यूनतम ह्रास भएको अप्टिकल ब्याकबोन इन्जिनियरिङ।',
      metric1Label: 'कोर अप्टिकल शुद्धता',
      metric1Val: '< ०.०२ dB',
      metric2Label: 'DWDM स्पेक्ट्रल ब्यान्ड',
      metric2Val: 'C र L ब्यान्ड',
      metric3Label: 'अप्टिकल उपलब्धता',
      metric3Val: '९९.९९%',
    },
    contact: {
      badge: 'प्रत्यक्ष सञ्चार कन्सोल',
      title: 'प्रत्यक्ष सञ्चार तथा सम्पर्क कन्सोल',
      subtitle: 'प्राविधिक फिल्ड परामर्श, अप्टिकल ट्रान्सपोर्ट विस्तार वा क्यारियर नेटवर्क समन्वयका लागि सम्पर्क गर्नुहोस्।',
      profileName: 'पवन नेपाली',
      profileCompany: 'नेपाल टेलिकम',
      profileRole: 'दूरसञ्चार प्राविधिक',
      officialEmail: 'आधिकारिक इमेल',
      personalPortal: 'व्यक्तिगत पोर्टल',
      directContactNumber: 'प्रत्यक्ष सम्पर्क नम्बर',
      locationLabel: 'आधार स्टेसन तथा स्थान',
      locationValue: 'घर: गोरखा, नेपाल | कार्यक्षेत्र: पाल्पा, नेपाल',
      formTitle: 'प्रत्यक्ष सन्देश पठाउनुहोस्',
      formSubtitle: 'प्राविधिक कन्सोलमा सिधै सुरक्षित सन्देश सम्प्रेषण गर्नुहोस्।',
      inputName: 'पूरा नाम / संस्था',
      inputEmail: 'इमेल ठेगाना',
      inputSubject: 'विषय / सोधपुछ',
      inputMessage: 'प्राविधिक विवरण वा सन्देश',
      submitButton: 'सन्देश सम्प्रेषण गर्नुहोस्',
      submitting: 'सन्देश पठाउँदै...',
      successMessage: 'तपाईँको सन्देश पवन नेपालीलाई सफलतापूर्वक प्राप्त भयो। छिट्टै प्रतिक्रिया दिइनेछ।',
    },
    footer: {
      description: 'भरपर्दो अप्टिकल फाइबर ट्रान्सपोर्ट, क्यारियर-ग्रेड OLT/BTS प्रणाली र इन्टरप्राइज कनेक्टिभिटीमा समर्पित व्यावसायिक दूरसञ्चार प्राविधिक।',
      telemetryTitle: 'टेलिमेट्री तथा प्राविधिक विवरण',
      nodeActive: 'क्यारियर नोड सक्रिय',
      madeWith: 'Made with 🩵 By Paban Nepali',
      allRightsReserved: '© २०२६ पवन नेपाली। सर्वाधिकार सुरक्षित।',
    },
    resumeModal: {
      title: 'कार्यगत फिल्ड विवरण (बायोडाटा)',
      subtitle: 'प्रमाणीकृत क्यारियर योग्यता अभिलेख',
      downloadPdf: 'PDF डाउनलोड',
      print: 'प्रिन्ट गर्नुहोस्',
      close: 'बन्द गर्नुहोस्',
      executiveSummary: 'कार्यकारी विवरण तथा उद्देश्य',
      professionalExperience: 'व्यावसायिक कार्य अनुभव',
      opticalCompetencies: 'अप्टिकल तथा हार्डवेयर उपकरण दक्षता',
      certifications: 'आधिकारिक प्रमाणीकरण तथा तालिम',
      certifiedBy: 'नेपाल टेलिकम तालिम केन्द्रद्वारा प्रमाणीकृत',
    },
  },
};
