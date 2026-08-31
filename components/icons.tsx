import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = (props: P) => ({
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const IconPhone = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 5c0 8.8 6.2 15 15 15a2 2 0 0 0 2-2v-2.3a1 1 0 0 0-.8-1l-3.6-.7a1 1 0 0 0-1 .3l-1 1.2a12 12 0 0 1-5-5l1.2-1a1 1 0 0 0 .3-1l-.7-3.6a1 1 0 0 0-1-.8H6a2 2 0 0 0-2 2Z" />
  </svg>
);

export const IconWhatsapp = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 21a9 9 0 1 0-8-4.9L3 21l4.9-1A9 9 0 0 0 12 21Z" />
    <path d="M8.5 9.5c0 4 3 6.5 6.5 6.5.7 0 1.2-.6 1.2-1.2v-.6a.8.8 0 0 0-.5-.8l-1.5-.6a.8.8 0 0 0-.9.2l-.4.5c-1.3-.5-2.3-1.5-2.8-2.8l.5-.4a.8.8 0 0 0 .2-.9L10 7.8a.8.8 0 0 0-.8-.5h-.6c-.6 0-1.2.5-1.2 1.2Z" />
  </svg>
);

export const IconPin = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const IconArrow = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconArrowUp = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </svg>
);

export const IconClose = (p: P) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const IconMenu = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const IconCheck = (p: P) => (
  <svg {...base(p)}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const IconChevron = (p: P) => (
  <svg {...base(p)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const IconBed = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 7v11M3 12h18v6M21 18v-4a3 3 0 0 0-3-3H3M7 9h4" />
  </svg>
);

export const IconRuler = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 15 15 3l6 6L9 21Z" />
    <path d="M7.5 10.5 9 12M10.5 7.5 12 9M13.5 4.5 15 6" />
  </svg>
);

export const IconCompass = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15 9-2 5-4 1 2-5Z" />
  </svg>
);

export const IconSparkle = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
  </svg>
);

export const IconShield = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const IconLeaf = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 19C5 10 12 5 20 5c0 9-6 14-15 14Z" />
    <path d="M5 19c3-6 7-9 12-11" />
  </svg>
);

export const IconBuilding = (p: P) => (
  <svg {...base(p)}>
    <path d="M6 21V5l7-2v18M13 21V9l5 2v10M3 21h18M9 8h.01M9 12h.01M9 16h.01" />
  </svg>
);

export const groupIcons = {
  "Clubhouse & wellness": IconSparkle,
  "Outdoor & family": IconLeaf,
  "Safety & services": IconShield,
} as const;
