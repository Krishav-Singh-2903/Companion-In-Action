type SocialIconName = "instagram" | "facebook" | "linkedin" | "youtube";

type SocialIconProps = {
  name: SocialIconName;
  className?: string;
};

export function SocialIcon({ name, className = "size-4" }: SocialIconProps) {
  const commonProps = {
    className,
    "aria-hidden": true,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  };

  if (name === "instagram") {
    return (
      <svg {...commonProps}>
        <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.76 3.76 0 0 0 4 7.75v8.5A3.76 3.76 0 0 0 7.75 20h8.5A3.76 3.76 0 0 0 20 16.25v-8.5A3.76 3.76 0 0 0 16.25 4h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-2.35a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z" />
      </svg>
    );
  }

  if (name === "facebook") {
    return (
      <svg {...commonProps}>
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.24 10.44 22v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.5-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.47H15.2c-1.24 0-1.63.78-1.63 1.57v1.88h2.77l-.44 2.91h-2.33V22C18.34 21.24 22 17.08 22 12.06Z" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg {...commonProps}>
        <path d="M4.98 3.5a2.48 2.48 0 1 1 0 4.96 2.48 2.48 0 0 1 0-4.96ZM3 9.35h3.96V21H3V9.35Zm6.24 0h3.8v1.6h.05c.53-1 1.82-2.06 3.75-2.06 4.01 0 4.76 2.64 4.76 6.08V21h-3.96v-5.35c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.05 1.39-2.05 2.83V21H9.24V9.35Z" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.54 3.58 12 3.58 12 3.58s-7.54 0-9.4.5A3 3 0 0 0 .5 6.2 31.35 31.35 0 0 0 0 12a31.35 31.35 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.86.5 9.4.5 9.4.5s7.54 0 9.4-.5a3 3 0 0 0 2.1-2.12A31.35 31.35 0 0 0 24 12a31.35 31.35 0 0 0-.5-5.8ZM9.6 15.55v-7.1L15.84 12 9.6 15.55Z" />
    </svg>
  );
}
