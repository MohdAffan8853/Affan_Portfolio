import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "../../data/siteData";

function SiteHeader({ isDark, onOpenAuthModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(navLinks[0].id);
  const [isScrolled, setIsScrolled] = useState(false);

  const getDesktopNavItemClass = (isActive) =>
    `rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
      isActive
        ? "border-[var(--primary)] bg-[var(--primary)] text-white shadow-md hover:-translate-y-0.5 hover:shadow-lg"
        : "border-transparent text-[var(--muted)] hover:-translate-y-0.5 hover:border-[var(--border)] hover:bg-[var(--surface-strong)] hover:text-[var(--text)] hover:shadow-sm"
    }`;

  const getMobileNavItemClass = (isActive) =>
    `rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition-all duration-300 ${
      isActive
        ? "border-[var(--primary)] bg-[var(--primary)] text-white shadow-sm"
        : "border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--primary)]/25 hover:bg-[var(--surface-strong)] hover:text-[var(--primary)]"
    }`;

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.id);
    const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    const updateActiveSection = () => {
      const anchorPoint = window.scrollY + 140;
      const currentSection =
        [...elements].reverse().find((element) => anchorPoint >= element.offsetTop)?.id ??
        sectionIds[0];

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const handleNavClick = (id) => {
    const targetSection = document.getElementById(id);

    if (!targetSection) {
      return;
    }

    setActiveSection(id);
    window.scrollTo({
      top: targetSection.offsetTop - 96,
      behavior: "smooth",
    });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[color:rgba(247,239,228,0.82)] shadow-card backdrop-blur-xl dark:bg-[color:rgba(9,17,31,0.84)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNavClick(link.id)}
              className={getDesktopNavItemClass(activeSection === link.id)}
              aria-current={activeSection === link.id ? "page" : undefined}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button
            type="button"
            onClick={onOpenAuthModal}
            className="rounded-full bg-[var(--solid-button-bg)] px-5 py-3 text-sm font-semibold text-[var(--solid-button-text)] transition hover:translate-y-[-1px] hover:opacity-90"
          >
            Login
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] text-xl text-[var(--text)] lg:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--surface-strong)] px-4 py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className={getMobileNavItemClass(activeSection === link.id)}
                aria-current={activeSection === link.id ? "page" : undefined}
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                onOpenAuthModal();
                setIsMenuOpen(false);
              }}
              className="mt-2 rounded-2xl bg-[var(--solid-button-bg)] px-4 py-3 text-sm font-semibold text-[var(--solid-button-text)]"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default SiteHeader;
