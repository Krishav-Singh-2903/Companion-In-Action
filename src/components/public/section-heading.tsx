type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  inverted?: boolean;
  titleSize?: "default" | "slightly-larger" | "supporting";
  titleWeight?: "semibold" | "slightly-bolder";
  bodySize?: "base" | "small";
  eyebrowProminent?: boolean;
  eyebrowSmaller?: boolean;
  eyebrowNoWrapOnDesktop?: boolean;
  eyebrowColor?: "default" | "primary";
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  inverted = false,
  titleSize = "default",
  titleWeight = "semibold",
  bodySize = "base",
  eyebrowProminent = false,
  eyebrowSmaller = false,
  eyebrowNoWrapOnDesktop = false,
  eyebrowColor = "default"
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  const titleClass = inverted ? "text-white" : "text-stone-950";
  const bodyClass = inverted ? "text-emerald-50/80" : "text-stone-700";
  const sizeClass =
    titleSize === "slightly-larger"
      ? "text-[2.375rem] sm:text-[2.75rem]"
      : titleSize === "supporting"
        ? "text-xl sm:text-2xl"
      : "text-3xl sm:text-4xl";
  const weightClass = titleWeight === "slightly-bolder" ? "font-bold" : "font-semibold";
  const bodySizeClass = bodySize === "small" ? "text-[0.8125rem]" : "text-base";
  const eyebrowClass = eyebrowProminent
    ? eyebrowSmaller
      ? "text-xl font-bold sm:text-2xl"
      : "text-2xl font-bold sm:text-3xl"
    : "text-sm font-semibold";
  const eyebrowColorClass =
    eyebrowColor === "primary" ? "text-[#806400]" : "text-amber-700";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className={`${eyebrowClass} uppercase tracking-[0.18em] ${eyebrowColorClass} ${eyebrowNoWrapOnDesktop ? "xl:whitespace-nowrap" : ""}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`mt-3 ${sizeClass} ${weightClass} leading-tight ${titleClass}`}>
        {title}
      </h2>
      {body ? <p className={`mt-4 ${bodySizeClass} leading-8 ${bodyClass}`}>{body}</p> : null}
    </div>
  );
}
