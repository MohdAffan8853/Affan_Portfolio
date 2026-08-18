import { useState } from "react";
import { FiSend } from "react-icons/fi";
import shapeOne from "../../../layout/images/testi/shape.png";
import shapeTwo from "../../../layout/images/testi/shape-2.png";
import shapeThree from "../../../layout/images/testi/shape-3.png";
import { contactDetails, contactFormConfig } from "../../data/siteData";
import { createInitialContactForm, validateContactForm } from "../../utils/formHelpers";
import ContactInfo from "../ui/ContactInfo";
import FormField from "../ui/FormField";

function ContactSection() {
  const [contactForm, setContactForm] = useState(createInitialContactForm);
  const [contactErrors, setContactErrors] = useState({});
  const [contactMessage, setContactMessage] = useState("");
  const [contactMessageTone, setContactMessageTone] = useState("success");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getActivationMessage = () =>
    `Form activation is still pending. Open ${contactFormConfig.recipientEmail}, check Inbox or Spam, and click the "Activate Form" link from FormSubmit.`;

  const handleContactChange = (event) => {
    const { name, value } = event.target;
    setContactForm((current) => ({ ...current, [name]: value }));
    setContactErrors((current) => ({ ...current, [name]: "" }));
    setContactMessage("");
    setContactMessageTone("success");
  };

  const handleContactSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validateContactForm(contactForm);
    setContactErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setContactMessage("");
      return;
    }

    setIsSubmitting(true);
    setContactMessage("");
    setContactMessageTone("success");

    try {
      const response = await fetch(contactFormConfig.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: contactForm.name.trim(),
          email: contactForm.email.trim(),
          subject: contactForm.subject.trim(),
          message: contactForm.comments.trim(),
          _replyto: contactForm.email.trim(),
          _subject: `Portfolio enquiry: ${contactForm.subject.trim()}`,
          _template: "table",
        }),
      });

      const result = await response.json();

      if (
        typeof result.message === "string" &&
        result.message.toLowerCase().includes("needs activation")
      ) {
        setContactMessage(getActivationMessage());
        setContactMessageTone("error");
        return;
      }

      if (!response.ok || result.success === "false" || result.success === false) {
        throw new Error(result.message || "Unable to send your message right now.");
      }

      setContactMessage(
        `Thanks! Your message has been sent to ${contactFormConfig.recipientEmail}.`
      );
      setContactMessageTone("success");
      setContactForm(createInitialContactForm());
      setContactErrors({});
    } catch (error) {
      setContactMessage(
        error.message ||
          "Something went wrong while sending your message. Please try again."
      );
      setContactMessageTone("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-shell overflow-hidden pb-0">
      <img
        src={shapeOne}
        alt=""
        className="pointer-events-none absolute left-4 top-10 hidden w-28 opacity-70 lg:block"
      />
      <img
        src={shapeTwo}
        alt=""
        className="pointer-events-none absolute bottom-12 left-20 hidden w-24 opacity-70 lg:block"
      />
      <img
        src={shapeThree}
        alt=""
        className="pointer-events-none absolute bottom-10 right-10 hidden w-28 opacity-70 lg:block"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="glass-panel rounded-[2rem] p-6 shadow-card sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
              Let&apos;s Connect
            </p>
            <h2 className="mt-4 font-display text-4xl">Let&apos;s Connect</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              I&apos;m always excited to connect with like-minded individuals, whether you have a question, want to start a project together, or just want to say hi. Feel free to reach out through any of the contact details below or send me a message using the form. Let&apos;s create something amazing together!
            </p>

            <div className="mt-8 space-y-6 border-t border-[var(--border)] pt-8">
              {contactDetails.map((detail) => (
                <ContactInfo
                  key={detail.label}
                  icon={detail.icon}
                  label={detail.label}
                  lines={detail.lines}
                />
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-[2rem] p-6 shadow-card sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
              Let&apos;s Talk
            </p>
            <h2 className="mt-4 font-display text-4xl">Contact Me</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              Whether you have a question, want to start a project together, or just want to connect, feel free to drop a message. I&apos;m always open to discussing new opportunities, creative ideas, or collaborations.
            </p>

            {contactMessage && (
              <div
                className={`mt-6 rounded-2xl px-4 py-3 text-sm ${
                  contactMessageTone === "success"
                    ? "border border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                    : "border border-rose-500/20 bg-rose-500/10 text-rose-700 dark:text-rose-300"
                }`}
              >
                {contactMessage}
              </div>
            )}

            <form action="https://formsubmit.co/affankhan885313@gmail.com" method="POST" className="mt-8 space-y-5" onSubmit={handleContactSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  label="Your name"
                  name="name"
                  type="text"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  error={contactErrors.name}
                />
                <FormField
                  label="Your email"
                  name="email"
                  type="email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  error={contactErrors.email}
                />
              </div>

              <FormField
                label="Your subject"
                name="subject"
                type="text"
                value={contactForm.subject}
                onChange={handleContactChange}
                error={contactErrors.subject}
              />

              <FormField
                label="Your message"
                name="comments"
                type="textarea"
                value={contactForm.comments}
                onChange={handleContactChange}
                error={contactErrors.comments}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-5 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <FiSend />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
