import { MilestoneExperience, SkillCategory, GalleryItem } from '../types';

export const TELECOM_IMAGES = {
  headerAvatar: 'https://lh3.googleusercontent.com/aida/AEtjO1X_SxuY5wdEyHytWP1EQ4L1usMVNmQq2fy-MpnN4Gh3AoTipjAsSv4vSOlnqrmsuUISbdzneDZBDqgmgxFq9lxyqwjvLl9s-o13RH9B6FYGm53lDPG9hZ5y_wXiGKFwezkyit904jCsNb76HfyVELPa4I7al6fV0Gh9OX4dfNpKG4jJH7CzedaVVzzmsmscaMrZiffT3Aeve8lBulI84pyX6vWZNgOLzg4PRrOOpxne05Q8RElzUTv3WbB8_N8zufaLPqd6Saqm7OA',
  heroSpotlight: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJ7k7stVG-CqY1aAjw1Fggo20PgpyNl-tXYLwErSP-lAkfPxP0j7ePSSpgCZnf-48rjyuKow2gZdFQsvAaPdA8whm4tCqrtZombEgoHN9JXSlzt-62zTxHgY3GVmUP2vGLWdVpCX4870elZXzGhJEqPEP-2myC5ZAr2Iicvt0l99438MXRGBh57Ov42nXOtqpHcfRZaPumMLpVgtMkDVjaGUesOh2mvqntxAiQEsT0BSwlfdpPpQy0-2LCC9Zqpv0lJhs',
  panoramicBanner: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArQvsW1voJxxh4k3653N-VZCIOw2vnzgS-MTdauKcsiXATdSkL0bbVYjwu1nY7zNhc5P2zcXOtUnDnsYXJ9FOwr746-Dzk2bCy7dN1gN0oRO5CpDzetU_iSwRNhXVSB6j97HTi0kMCefFmx3ZxXosE70LbdHjv3NNLUOY2LafTIoMYja5qQhgJgP5GFG3mEsHnQVpXhKsvWh05KoGgv_saKrKCJCVhUcM_T_5zT0a9nCMJU9wWS3BTKeov2kbjeB8r2gk',
  contactAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMgcGNoXAw8I9fBhztHtQ3QmijUmGG7bNkkNdqXp_TPk-Gu_zHtapAJeE_h7OJ5npOTx6r_f1Iii7l7EESUvWkch2M9379_h1fDws82pNtSzIe60qlGK_-n0_3GHm7xBzMiml6Teu1_HMN3J9sm-qULEUccJSGMqy-76cKipuQgN9gyx60clCHIlB02rwQ752-eRC8v1dlFLxC01uGDFKSBYFf7S3L-vc6CiYu_0bIXxNaJ7PMroBmH1ayr9-j4KqMcZM',
  gallery: [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAXFSTOliZD5MEGPb-NGKsaRmTT6HILl7bq1kAU4xv1sqn88MNdLiYr-D70EckInE_iX2iWD_M2qAWNZ2-m4KdqTAHn4aH1mSraEgryBdEfECuPge7wTYSws8NkNpKl0GBVOlH3PAQra2_YrLNRvhBZdLKuPFoFTsa3XmUv4q8dd6wgFtlykB6UBw558IUdUGaLhk1FYtIiRVjKZCKM7jaDh98lSyvac92G0AZwXMbEHzbgY7fkLN0w3bjfYrZEOcYEg2M',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDoea_XZdy4b59G4JYm7Cz6p9QLrnehzyqn6brqF69pn8cZ4C7tjikBYE59Usr4kWJtqSuHApKZq1kL1PogcT4AFbMAD2napJX0kC8EOqOPB87Ek3Ocwl-2mvokBuVql8bagmrg2GQL8-QyfgyCL6UKQlz3FWNWW5Gv0TOhPBL2ufkKpj2yzMUzaqXgaoDgdpYJUwubLMNPvNhFwsxoUs6aKSIxEWRU7JRP1Z3hF_JBk7tKugKIb1u9YYu1wh9j9-4c-r0',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBMM3nU3OF6IjTSXk5P0ykH8CC3e0KPIwJH_WOQLt1c8bMNbqGOB3oM_Rkh65dgKyIj2_RXfD8sZHNIbt8-F2kz00jmtOMfOuQQKcxjNBX1NEeU9A-Rpq5fDiK-sXO8NvSJqFljaVU8jbPA2LlMJHbYS0soZB_tqf7jZ9W-dOQTj_sUKvLJvr2-APUXTN2FaQqBVvzAcTIEKf96b0wmAF9tYRkJ7R8WhF6O-1ASWhENWrwUT4kZdwMfHVthdq8Ct0cTTGM',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB4U87xTPOyfF8hFnOo02_CaqCHZlXqaSEldax4OcSLjkz0Kbz2-0N1DjO-qBZYk5CRKMihEHpKSymxxhtRPUdHtfUwUFVSx0Lm2K-rYnRAY6CMOqqezrTFmB76IwvS0CcwSgL6w5hbsPqjIAr0CEdaVYQPcxtwCtHuszNqvIWCTF5WnRamkQ0gTe0NCswRKqzeouBFIOqL2bbxLijUw0tjKZKd0PjAgHFjGT2J96sl8fWy1pE4trV36s5JGp7UweUCtfY',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuClBkM-vDPYf-xLoyF0BDQAVdj5W9EBQ5m48ntdxTfSgMxUCkLKwb-vSgZwJyuYh0coPjmk37F4Kuse8p8JgLv9ScJdbhjbwJXOnh22xySAhV79SryhGtvxA_nzEt0_Qe0Hjr_hXrWTZvney5pY8LMe8fzJ5EsHMSh-bzu8odScEE1-_R0qtPldBMUQCxBSHvIRa80ixbiCSrUR-6Q-VdO2wzjzwPaJ-mDuyXhHuLAyumqTt5ISk_ifCwuCYWsuW99wDWw',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB4QpAueRQQjKTN46bsYc0JfP-sxuYngbH4ZTIxPVMjp4w1SQu3vI65M1LFwglELtsk3ZMHVwa7gw5VD2ud9bYw33KSaOv0JUlIeq8V6YtcL85UYn0Wyv3wOlIUfuHjZ1oisOq9v8unKBSyvIKtAXgqkXIk6KzxOjRnbAVdzvKaxxjgRBxhrYgEa6qVe6Z27HoI54CHa88cEVxeDuj2zd2WcbEGyQNK5xNkwppKtHqc4AGriDa5MeAVWdXnXrMelwxqQhY',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBoGhqPiuCe6ByrHtfWEYVaxfYFu-A5PuqPj82eZWApDyICW_43XlL-x-XjRfIKpo7wrHz9h-xltkinMA-ANhOA9YTHZuVkon-ai_zkC07g_GTgKfg6xIRSnQO3d_Jm3J1rTeIL8RLknOhMGpTC6F80oHvOO_bvymlQdUrrfW48w0LQ1bMNaDu0EKv7q1JwZW0Omscn6YHu1JfGxfvUVLVRkCEmazlRgSswxE79UUiczfvqPVBGIb1fRGI8hpBbe6j7kEo',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCElUo_a-Iaakd3c-DSiR09yKrLuIGY18YtHFbQ3QM_B_5lHDBbjliZMHoGqfPR0Qv4UPvsJDmFLblj5CIk7QkUnTWeKLAkMLZxeb7QzjIay3a2zlcqTlOmW5I-jRQp-5HxFp65gUa4m-ht6VlTn6bwJBm_PLuuZF5U6nJ9-69WkypqWVNed768V_vO7g-LYkRPuM-RBOIFFuMevieqjTTc1X62UT6hSWnKfNpYbefVPzCcscyWBYF4fCBNn88BpTWodPM',
  ]
};

export const METRIC_STATS = [
  {
    label: 'OPERATIONAL TRACK RECORD',
    value: '5+',
    title: 'Years Field Experience',
    sub: 'Telecom & Fiber Optics',
    color: 'primary',
  },
  {
    label: 'MISSION-CRITICAL UPTIME',
    value: '99.9%',
    title: 'SLA Availability',
    sub: 'Zero Fault Tolerant Lines',
    color: 'secondary',
  },
  {
    label: 'FIBER TRANSPORT FLEET',
    value: '10K+',
    title: 'Optical Lines Serviced',
    sub: 'FTTH / GPON / ODP Splices',
    color: 'primary',
  },
  {
    label: 'STATION SUPERVISIONS',
    value: '100+',
    title: 'BTS & OLT Sites Maintained',
    sub: 'Macro Towers & Central Nodes',
    color: 'secondary',
  },
];

export const CAREER_EXPERIENCES: MilestoneExperience[] = [
  {
    id: 'ntc-technician',
    period: '2024 – PRESENT',
    roleType: 'FULL TIME CARRIER ROLE',
    role: 'Professional Telecom Technician',
    company: 'Nepal Telecom (National State Telecommunications Provider)',
    companyUrl: 'https://www.ntc.net.np',
    location: 'Kathmandu & Gorkha, Nepal',
    summary: 'Charged with carrier-grade transport integrity across complex mountainous and urban regions:',
    highlights: [
      'Supervised critical Optical Line Terminals (OLT) and Base Transceiver Stations (BTS) across active sectors.',
      'Maintained multi-strand fiber-optic backbones and legacy copper trunk routing networks.',
      'Deployed optical splitters, high-speed fiber modems, enterprise CPE equipment, and VoIP telephony units.',
      'Conducted emergency OTDR testing, optical fusion splicing, and resolved Tier-3 escalated subscriber faults.',
      'Supervised regional revenue collection center operations, administrative billing workflows, and guaranteed uninterrupted connectivity SLA standards.',
    ],
  },
  {
    id: 'classic-tech',
    period: '2023 – 2024',
    roleType: 'BROADBAND / ISP OPERATIONS',
    role: 'Senior Sales & Service Associate',
    company: 'Classic Tech Pvt. Ltd.',
    location: 'Kathmandu, Nepal',
    highlights: [
      'Directed high-density GPON fiber line installation and residential distribution hub routing.',
      'Engineered IPTV broadcast network configurations and multicast signal synchronization.',
      'Fine-tuned dual-band mesh Wi-Fi extensions and residential router diagnostics for enterprise clients.',
      'Delivered high-tier customer issue escalations with standard MTTR under 4 hours.',
    ],
  },
  {
    id: 'ntc-assistant',
    period: '2020 – 2023',
    roleType: 'FIELD OPERATIONS',
    role: 'Technical Assistant',
    company: 'Nepal Telecom (Naxal Exchange)',
    location: 'Kathmandu, Nepal',
    highlights: [
      'Maintained and repaired primary fiber optic trunks and copper loop lines across central Kathmandu.',
      'Installed terminal subscriber modem equipment, landline phones, and optical transceivers.',
      'Executed on-ground diagnostic sweeps to locate physical breaks, damp lines, and signal degradation.',
      'Interfaced directly with corporate and residential subscribers for end-to-end service verification.',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'optical-network',
    title: 'Optical & Network Transport',
    subtitle: 'Layer 1 & Layer 2 Architecture',
    icon: 'settings_ethernet',
    accentColor: 'secondary',
    skills: [
      { name: 'Fiber Splicing & Fusion Core', percentage: 98, detail: '<0.01 dB average loss' },
      { name: 'ODP / FDB Box Management', percentage: 95, detail: 'High-density fiber trays' },
      { name: 'OLT & BTS Site Maintenance', percentage: 92, detail: 'Carrier-grade uptime' },
      { name: 'Copper Trunk Cabling & MDF', percentage: 90, detail: 'Legacy & hybrid loops' },
      { name: 'IPTV Routing & Multicast', percentage: 88, detail: 'IGMP snooping & QoS' },
    ],
    tags: ['FTTH', 'GPON', 'DWDM', 'RF Spectrum'],
  },
  {
    id: 'hardware-diagnostics',
    title: 'Hardware & Diagnostic Tools',
    subtitle: 'Photonic Metering & Calibration',
    icon: 'precision_manufacturing',
    accentColor: 'primary',
    skills: [
      { name: 'OTDR Trace Analysis', percentage: 96, detail: '1310/1550nm wavelength' },
      { name: 'Optical Power Meters (OPM / VFL)', percentage: 97, detail: 'Precision photonic calibration' },
      { name: 'Core-Alignment Fusion Splicers', percentage: 98, detail: 'Sumitomo & Fujikura systems' },
      { name: 'Router / ONT / CPE Provisioning', percentage: 94, detail: 'VLAN, PPPoE & static config' },
      { name: 'DC Telecom Power / Backup Systems', percentage: 89, detail: '-48V rectifier banks' },
    ],
    tags: ['dBm Loss Calc', 'VFL Visual Tracer', 'Optical Fiber Cleaver'],
  },
  {
    id: 'field-discipline',
    title: 'Field Operations & Discipline',
    subtitle: 'Site Execution & Rapid Response',
    icon: 'verified_user',
    accentColor: 'secondary',
    skills: [
      { name: 'Emergency Fault Resolution', percentage: 99, detail: 'Critical line restoration' },
      { name: 'High-Altitude Mountain Deployment', percentage: 95, detail: 'Himalayan terrain resilience' },
      { name: 'Field Team Coordination', percentage: 91, detail: 'Crew dispatch & safety lead' },
      { name: 'Client Communications & SLA Adherence', percentage: 96, detail: 'Tier-1 enterprise relations' },
      { name: 'Workplace Safety & Tower Rigging', percentage: 93, detail: 'Fall arrest & high voltage safety' },
    ],
    tags: ['24/7 On-Call', 'Rugged Terrain', 'Zero-Failure Ethic'],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = TELECOM_IMAGES.gallery.map((url, idx) => ({
  id: idx + 1,
  url,
  alt: `Field & Professional Telecommunications Node ${idx + 1}`,
  title: `Node ${idx + 1} - Field Operations`,
  location: idx % 2 === 0 ? 'Kathmandu Metropolitan Exchange' : 'Gorkha Mountain Link Corridor',
}));
