function FormField({ label, name, type, value, onChange, error }) {
  const commonClasses =
    "mt-2 w-full rounded-[1.25rem] border bg-[var(--surface-strong)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--muted)] focus:border-[var(--primary)] focus:outline-none";
  const fieldId = `field-${name}`;
  const errorId = `${fieldId}-error`;

  return (
    <label htmlFor={fieldId} className="block text-sm font-semibold text-[var(--text)]">
      {label}
      {type === "textarea" ? (
        <textarea
          id={fieldId}
          name={name}
          value={value}
          onChange={onChange}
          rows={5}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={`${commonClasses} resize-none ${error ? "border-rose-400" : "border-[var(--border)]"}`}
        />
      ) : (
        <input
          id={fieldId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={`${commonClasses} ${error ? "border-rose-400" : "border-[var(--border)]"}`}
        />
      )}
      {error && (
        <span id={errorId} className="mt-2 block text-xs font-medium text-rose-500">
          {error}
        </span>
      )}
    </label>
  );
}

export default FormField;
