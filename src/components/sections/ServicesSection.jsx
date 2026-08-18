import { projects } from "../../data/siteData";
import { getLinkProps } from "../../utils/linkHelpers";

function ServicesSection() {
  return (
    <section id="projects" className="section-shell">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-5xl font-extrabold tracking-tight text-[var(--text)] sm:text-6xl">
          Projects
        </h2>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => {
            return (
              <article
                key={project.title}
                className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface-strong)] p-6 shadow-[0_22px_50px_rgba(23,32,51,0.08)] transition duration-300 hover:-translate-y-2 dark:shadow-[0_18px_42px_rgba(0,0,0,0.3)]"
              >
                <div className="overflow-hidden rounded-[1.75rem]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[280px] w-full object-cover object-center sm:h-[320px]"
                  />
                </div>
                <h3 className="mt-6 text-center text-2xl font-bold text-[var(--text)]">
                  {project.title}
                </h3>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <a
                    {...getLinkProps(project.githubUrl)}
                    className="inline-flex min-w-[144px] items-center justify-center rounded-full border border-[var(--text)] px-6 py-3 text-base font-semibold text-[var(--text)] transition hover:-translate-y-1 hover:bg-[var(--text)] hover:text-[var(--bg)]"
                  >
                    GitHub
                  </a>
                  <a
                    {...getLinkProps(project.liveUrl)}
                    className="inline-flex min-w-[144px] items-center justify-center rounded-full border border-[var(--text)] px-6 py-3 text-base font-semibold text-[var(--text)] transition hover:-translate-y-1 hover:bg-[var(--text)] hover:text-[var(--bg)]"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
