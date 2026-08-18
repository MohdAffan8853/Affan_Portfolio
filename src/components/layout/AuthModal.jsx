import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import FormField from "../ui/FormField";
import { createInitialAuthForm, validateAuthForm } from "../../utils/formHelpers";

function AuthModal({ isOpen, onClose }) {
  const [authForm, setAuthForm] = useState(createInitialAuthForm);
  const [authErrors, setAuthErrors] = useState({});
  const [authMessage, setAuthMessage] = useState("");

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return undefined;
    }

    setAuthForm(createInitialAuthForm());
    setAuthErrors({});
    setAuthMessage("");
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleAuthChange = (event) => {
    const { name, value } = event.target;
    setAuthForm((current) => ({ ...current, [name]: value }));
    setAuthErrors((current) => ({ ...current, [name]: "" }));
    setAuthMessage("");
  };

  const handleAuthSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validateAuthForm(authForm);
    setAuthErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setAuthMessage("");
      return;
    }

    setAuthMessage("Demo form captured. Connect your preferred auth flow or backend next.");
    setAuthForm(createInitialAuthForm());
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4 py-8">
      <div className="glass-panel relative w-full max-w-2xl rounded-[2rem] p-6 shadow-soft sm:p-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text)]"
          aria-label="Close modal"
        >
          <FiX />
        </button>

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
          Sign up
        </p>
        <h2 className="mt-4 font-display text-4xl">Create your account</h2>

        {authMessage && (
          <div className="mt-6 rounded-2xl border border-[var(--secondary)]/20 bg-[var(--secondary)]/10 px-4 py-3 text-sm text-[var(--secondary)]">
            {authMessage}
          </div>
        )}

        <form className="mt-8 space-y-5" onSubmit={handleAuthSubmit} noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField
              label="First name"
              name="firstName"
              type="text"
              value={authForm.firstName}
              onChange={handleAuthChange}
              error={authErrors.firstName}
            />
            <FormField
              label="Email"
              name="email"
              type="email"
              value={authForm.email}
              onChange={handleAuthChange}
              error={authErrors.email}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <FormField
              label="Subject"
              name="subject"
              type="text"
              value={authForm.subject}
              onChange={handleAuthChange}
              error={authErrors.subject}
            />
            <FormField
              label="Password"
              name="password"
              type="password"
              value={authForm.password}
              onChange={handleAuthChange}
              error={authErrors.password}
            />
          </div>

          <FormField
            label="Textarea"
            name="notes"
            type="textarea"
            value={authForm.notes}
            onChange={handleAuthChange}
            error={authErrors.notes}
          />

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1"
          >
            Submit form
          </button>
        </form>
      </div>
    </div>
  );
}

export default AuthModal;
