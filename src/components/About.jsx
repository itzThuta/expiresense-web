import Logo from "../assets/logo.png";

function LetterAvatar({ name }) {
  const initial = name?.charAt(0)?.toUpperCase() ?? "?";
  return (
    <span
      className="inline-grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full text-sm sm:text-base font-bold mr-2 sm:mr-3"
      style={{ backgroundColor: "var(--brand-100)", color: "var(--brand-700)" }}
      title={name}
    >
      {initial}
    </span>
  );
}

function IconCircle({ children }) {
  return (
    <span className="inline-grid h-10 w-10 place-items-center rounded-xl ring-1"
          style={{ backgroundColor: "var(--brand-50)", color: "var(--brand-700)", borderColor: "var(--brand-100)" }}>
      {children}
    </span>
  );
}

const LeafIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
       strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" {...props}>
    <path d="M2 12c6-10 14-9 20-8-1 6-2 14-12 18C5 20 3 16 2 12Z" />
    <path d="M9 13c2-1 5-4 7-8" />
  </svg>
);

const ClockIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
       strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" {...props}>
    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
  </svg>
);

const SparkIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
       strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" {...props}>
    <path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M19 5l-4 4M9 15l-4 4" />
  </svg>
);

export default function About() {
  const teamNames = ["Kai", "Juji", "Ryuu", "James"];

  const values = [
    {
      icon: <LeafIcon />,
      title: "Sustainable by design",
      desc: "We help households cut food waste with gentle nudges and better visibility.",
    },
    {
      icon: <ClockIcon />,
      title: "Respect your time",
      desc: "Fast capture, clear reminders—no complex setup required.",
    },
    {
      icon: <SparkIcon />,
      title: "Delightfully simple",
      desc: "A calm interface that feels friendly on both mobile and desktop.",
    },
  ];

  return (
    <section id="about" className="py-14 sm:py-16 lg:py-20 hero-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: "var(--brand-900)" }}>
              About Us
            </h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              ExpireSense began as a small idea to stop throwing good food away. Today our team
              builds a simple, helpful tracker that makes it effortless to log items, get timely
              reminders, and use food creatively—so less ends up in the bin.
            </p>

            <div className="mt-6">
              <div className="flex flex-wrap items-center justify-center lg:justify-start">
                {teamNames.map((n) => <LetterAvatar key={n} name={n} />)}
              </div>
              <p className="mt-3 text-sm text-slate-600">
                Built and found by <strong>{teamNames.slice(0, -1).join(", ")} and {teamNames.slice(-1)}.</strong> 
              </p>
            </div>
          </div>

          {/* Logo / visual */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-6 blur-2xl rounded-full opacity-60"
                   style={{ backgroundColor: "var(--brand-200)" }} />
              <img
                src={Logo}
                alt="ExpireSense logo"
                className="relative w-44 h-44 sm:w-56 sm:h-56 object-contain select-none"
                draggable="false"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.title}
                 className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200
                            shadow-[0_4px_20px_rgba(2,6,23,0.06)]">
              <IconCircle>{v.icon}</IconCircle>
              <div>
                <div className="font-semibold text-slate-900">{v.title}</div>
                <p className="mt-1 text-slate-600 text-sm">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
