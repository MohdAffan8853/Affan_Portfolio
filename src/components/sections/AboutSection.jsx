import { useMemo, useState } from "react";
import {
  FiBriefcase,
  FiMail,
  FiMapPin,
  FiUser,
} from "react-icons/fi";
import { aboutProfileCard, aboutTabs } from "../../data/siteData";

const aboutCardIcons = {
  Name: FiUser,
  Email: FiMail,
  Location: FiMapPin,
  Experience: FiBriefcase,
};

function AboutSection() {
  const [activeAboutTab, setActiveAboutTab] = useState("skills");
  const aboutContent = useMemo(() => aboutTabs[activeAboutTab], [activeAboutTab]);
  const isSkillsTab = activeAboutTab === "skills";
  const isEducationTab = activeAboutTab === "education";

  return (
    <section id="aboutme" className="section-shell">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-violet-400/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(244,231,216,0.92))] p-6 text-[var(--text)] shadow-[0_24px_80px_rgba(23,32,51,0.12)] sm:p-7 dark:bg-[linear-gradient(180deg,rgba(9,17,31,0.96),rgba(9,17,31,0.9))] dark:text-slate-100 dark:shadow-[0_24px_80px_rgba(9,17,31,0.45)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.14),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.3),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.18),transparent_34%),linear-gradient(180deg,rgba(15,23,42,0.2),rgba(15,23,42,0.68))]" />
          <div className="relative">
            <div className="flex items-center gap-3 text-violet-500 dark:text-violet-400">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10">
                <FiUser className="text-xl" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-violet-500/80 dark:text-violet-300/80">
                  Profile
                </p>
                <h3 className="text-2xl font-semibold text-[var(--text)] dark:text-white">
                  {aboutProfileCard.title}
                </h3>
              </div>
            </div>

            <p className="mt-6 text-sm leading-7 text-[var(--muted)] dark:text-slate-300 sm:text-base">
              {aboutProfileCard.description}
            </p>

            <div className="mt-7 space-y-4">
              {aboutProfileCard.details.map((item) => {
                const Icon = aboutCardIcons[item.label] ?? FiUser;

                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-white/70 px-4 py-3 dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:bg-violet-500/15 dark:text-violet-300">
                      <Icon />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--text)] dark:text-white">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm text-[var(--muted)] dark:text-slate-300">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div
          className={`glass-panel rounded-[2rem] shadow-card ${
            isEducationTab ? "p-5 sm:p-6 lg:p-7" : "p-6 sm:p-8 lg:p-10"
          }`}
        >
          <div className="flex flex-wrap gap-3">
            {Object.entries(aboutTabs).map(([key, tab]) => {
              const Icon = tab.icon;
              const isActive = key === activeAboutTab;

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveAboutTab(key)}
                  className={`pill-button gap-2 ${
                    isActive
                      ? "bg-[var(--solid-button-bg)] text-[var(--solid-button-text)]"
                      : "bg-transparent text-[var(--muted)] hover:text-[var(--text)]"
                  }`}
                >
                  <Icon />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div
            className={`rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-muted)] ${
              isEducationTab ? "mt-5 p-4 sm:p-5" : "mt-8 p-5 sm:p-6"
            }`}
          >
            {isSkillsTab ? (
              <div className="grid gap-5 lg:grid-cols-2">
                {aboutContent.items.map((item) => {
                  const SkillIcon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface-strong)] p-4"
                    >
                      <div className="mb-4 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <span
                            className={`text-2xl ${
                              item.iconClassName ?? "text-[var(--primary)]"
                            }`}
                          >
                            <SkillIcon />
                          </span>
                          <span className="text-sm font-semibold">{item.label}</span>
                        </div>
                        <span className="text-sm font-semibold text-[var(--muted)]">
                          {item.value}%
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-200/70 dark:bg-slate-800/80">
                        <div
                          className="h-2 rounded-full bg-violet-500"
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className={isEducationTab ? "space-y-4" : "space-y-5"}>
                {aboutContent.items.map((item) => (
                  <div
                    key={item.title}
                    className={`rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface-strong)] ${
                      isEducationTab ? "p-4 sm:p-5" : "p-5"
                    }`}
                  >
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-[var(--primary)]">
                      {item.meta}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
