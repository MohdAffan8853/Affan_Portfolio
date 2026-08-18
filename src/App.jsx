import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import AuthModal from "./components/layout/AuthModal";
import SiteFooter from "./components/layout/SiteFooter";
import SiteHeader from "./components/layout/SiteHeader";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import HeroSection from "./components/sections/HeroSection";
import ServicesSection from "./components/sections/ServicesSection";
import WorkSection from "./components/sections/WorkSection";

function App() {
  const [isDark, setIsDark] = useState(true);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      setIsDark(true);
      return;
    }

    if (storedTheme === "light") {
      setIsDark(false);
      return;
    }

    if (
      !storedTheme &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className="relative isolate min-h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 h-full w-full object-cover opacity-30"
      >
        <source
          src="https://moewalls.com/wp-content/uploads/preview/2024/abstract-neon-rays-preview.webm"
          type="video/webm"
        />
      </video>
      <button
        type="button"
        onClick={() => setIsDark((current) => !current)}
        className="pulse-ring fixed right-4 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] text-lg text-[var(--text)] shadow-card transition hover:-translate-y-[52%]"
        aria-label="Toggle theme"
      >
        {isDark ? <FiSun /> : <FiMoon />}
      </button>

      <SiteHeader isDark={isDark} onOpenAuthModal={() => setIsAuthOpen(true)} />

      <main className="overflow-hidden">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WorkSection />
        <ContactSection />
      </main>

      <SiteFooter />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </div>
  );
}

export default App;
