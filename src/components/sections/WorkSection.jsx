import { useRef } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { workItems } from "../../data/siteData";

function WorkSection() {
  const workScrollerRef = useRef(null);

  const scrollCarousel = (direction) => {
    const node = workScrollerRef.current;
    if (!node) {
      return;
    }

    node.scrollBy({
      left: direction * node.clientWidth * 0.78,
      behavior: "smooth",
    });
  };

  return (
    <section id="work" className="section-shell">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl">My Latest Work</h2>
            <p className="mt-3 text-base text-[var(--muted)]">
              Perfect solution for digital experience
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollCarousel(-1)}
              className="glass-panel inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--text)]"
              aria-label="Scroll work left"
            >
              <FiArrowLeft />
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel(1)}
              className="glass-panel inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--text)]"
              aria-label="Scroll work right"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>

        <div
          ref={workScrollerRef}
          className="no-scrollbar mt-10 grid auto-cols-[85%] grid-flow-col gap-6 overflow-x-auto pb-2 sm:auto-cols-[58%] lg:auto-cols-[34%] xl:auto-cols-[30%]"
        >
          {workItems.map((item) => (
            <article
              key={`${item.title}-${item.category}`}
              className="group relative overflow-hidden rounded-[2rem] shadow-soft"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.28em] text-white/70">
                  {item.category}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
