type FormFieldPreviewProps = {
  id: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  helpText?: string;
  options?: readonly string[];
};

export function FormFieldPreview({
  id,
  label,
  type = "text",
  helpText,
  options = []
}: FormFieldPreviewProps) {
  const describedBy = helpText ? `${id}-help` : undefined;
  const baseClassName =
    "mt-2 w-full rounded-md border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 shadow-sm focus:border-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-800/20";

  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-stone-900">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={id}
          rows={5}
          aria-describedby={describedBy}
          className={baseClassName}
        />
      ) : type === "select" ? (
        <select
          id={id}
          name={id}
          aria-describedby={describedBy}
          className={baseClassName}
          defaultValue=""
        >
          <option value="" disabled>
            Select an option
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          aria-describedby={describedBy}
          className={baseClassName}
        />
      )}
      {helpText ? (
        <p id={describedBy} className="mt-2 text-xs leading-5 text-stone-500">
          {helpText}
        </p>
      ) : null}
    </div>
  );
}
