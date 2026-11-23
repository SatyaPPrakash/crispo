type ChipBagProps = {
  name: string;
  accent: string;
  accentDeep: string;
  chip: string;
  className?: string;
};

export function ChipBag({
  name,
  accent,
  accentDeep,
  chip,
  className = "",
}: ChipBagProps) {
  return (
    <svg
      viewBox="0 0 180 240"
      className={`drop-shadow-[0_18px_28px_rgba(140,28,51,0.18)] ${className}`}
      aria-hidden
    >
      <defs>
        <linearGradient id={`bag-${name}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={accent} />
          <stop offset="100%" stopColor={accentDeep} />
        </linearGradient>
        <linearGradient id={`shine-${name}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.35" />
          <stop offset="45%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M28 28c0-8 8-14 18-14h88c10 0 18 6 18 14v176c0 14-12 24-26 24H54c-14 0-26-10-26-24V28z"
        fill={`url(#bag-${name})`}
      />
      <path
        d="M34 34h112v24H34z"
        fill="#fff"
        opacity="0.92"
      />
      <text
        x="90"
        y="51"
        textAnchor="middle"
        fill="#8c1c33"
        fontSize="14"
        fontWeight="700"
        fontFamily="Fredoka, sans-serif"
      >
        CRISPO
      </text>
      <ellipse cx="90" cy="120" rx="42" ry="36" fill={chip} opacity="0.95" />
      <ellipse cx="78" cy="112" rx="10" ry="7" fill="#fff" opacity="0.25" />
      <ellipse cx="104" cy="128" rx="8" ry="5" fill="#000" opacity="0.12" />
      <rect x="48" y="168" width="84" height="22" rx="11" fill="#fff" opacity="0.9" />
      <text
        x="90"
        y="183"
        textAnchor="middle"
        fill="#1c1214"
        fontSize="10"
        fontWeight="700"
        fontFamily="Plus Jakarta Sans, sans-serif"
      >
        {name}
      </text>
      <path
        d="M28 28c0-8 8-14 18-14h88c10 0 18 6 18 14v176c0 14-12 24-26 24H54c-14 0-26-10-26-24V28z"
        fill={`url(#shine-${name})`}
      />
      <path
        d="M40 20h100c4 0 6 3 4 6l-4 8H40l-4-8c-2-3 0-6 4-6z"
        fill="#fff"
        opacity="0.55"
      />
    </svg>
  );
}
