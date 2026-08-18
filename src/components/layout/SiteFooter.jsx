function SiteFooter() {
  return (
    <footer className="mt-16 bg-[color:rgba(15,23,42,0.96)] text-white">
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-sm text-slate-400 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Affan. Built with React and Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
