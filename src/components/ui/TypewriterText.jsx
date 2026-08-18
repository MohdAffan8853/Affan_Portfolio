import { useEffect, useState } from "react";

function TypewriterText({ values }) {
  const [valueIndex, setValueIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentValue = values[valueIndex];
    const typingDelay = 125;
    const deletingDelay = 60;
    const pauseDelay = 1400;

    const timeoutId = window.setTimeout(
      () => {
        if (!isDeleting) {
          const nextText = currentValue.slice(0, displayText.length + 1);
          setDisplayText(nextText);

          if (nextText === currentValue) {
            setIsDeleting(true);
          }
        } else {
          const nextText = currentValue.slice(0, displayText.length - 1);
          setDisplayText(nextText);

          if (!nextText) {
            setIsDeleting(false);
            setValueIndex((current) => (current + 1) % values.length);
          }
        }
      },
      isDeleting ? deletingDelay : displayText === currentValue ? pauseDelay : typingDelay,
    );

    return () => window.clearTimeout(timeoutId);
  }, [displayText, isDeleting, valueIndex, values]);

  return (
    <span className="inline-flex min-h-[1.25em] items-center">
      {displayText}
      <span className="ml-1 inline-block h-[0.95em] w-[2px] bg-[var(--text)]" />
    </span>
  );
}

export default TypewriterText;
