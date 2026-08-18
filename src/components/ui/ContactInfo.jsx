function ContactInfo({ icon: Icon, label, lines }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
        {label}
      </p>
      <div className="mt-3 flex gap-4">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary)]/15 text-lg text-[var(--primary)]">
          <Icon />
        </span>
        <div className="space-y-1 text-sm leading-7 text-[var(--text)]">
          {lines.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
