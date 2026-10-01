export default function SectionHeading({
  eyebrow,
  title,
  description,
  inverse = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  inverse?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className={inverse ? "eyebrow text-blue-300" : "eyebrow"}>{eyebrow}</p> : null}
      <h2
        className={`mt-3 text-3xl font-semibold tracking-tight sm:text-4xl ${
          inverse ? "text-white" : "text-slate-950 dark:text-white"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-7 sm:text-lg ${
            inverse ? "text-slate-300" : "text-slate-600 dark:text-slate-300"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
