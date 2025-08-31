export default function HowItWorks() {
    const features = [
      { title: "Scan Receipts",    desc: "Snap your grocery receipt to start a list instantly.",           Icon: ReceiptIcon },
      { title: "OCR Detection",    desc: "We detect food items and skip non-food automatically.",          Icon: DocSearchIcon },
      { title: "Auto-Save Expiry", desc: "Items are saved with smart, suggested expiry dates.",            Icon: CalendarCheckIcon },
      { title: "Notifications",    desc: "Get alerts 5 and 2 days before items expire.",                  Icon: BellIcon },
      { title: "Recipe Ideas",     desc: "Creative suggestions to use items before spoilage.",             Icon: BulbIcon },
      { title: "Manual Add/Edit",  desc: "Add, edit, or remove items anytime.",                            Icon: PencilIcon },
    ];
  
    return (
      <section id="how-it-works" className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center" style={{ color: "var(--brand-900)" }}>
            How It Works
          </h2>
  
          {/* Always 3 columns */}
          <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {features.map((item) => {
              const IconEl = item.Icon;
              return (
                <div
                  key={item.title}
                  className="
                    relative flex flex-col items-center justify-center text-center
                    rounded-[20px] bg-white border border-slate-200
                    shadow-[0_4px_20px_rgba(2,6,23,0.06)]
                    hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(2,6,23,0.08)]
                    transition
                    p-3 sm:p-5 lg:p-6
                    min-h-[160px] sm:min-h-[200px] lg:min-h-[220px]
                  "
                >
                  <div className="mb-3 sm:mb-4 h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-brand-50 ring-1 ring-brand-100 grid place-items-center">
                    <IconEl className="h-6 w-6 sm:h-7 sm:w-7 text-brand-700" />
                  </div>
  
                  <h3 className="text-[13px] sm:text-base lg:text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[11px] sm:text-sm text-slate-600 max-w-[22ch] sm:max-w-[28ch]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
  
  /* ---------- Inline SVG icons ---------- */
  function SvgBase({ className, children }) {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {children}
      </svg>
    );
  }
  function ReceiptIcon(props) {
    return (
      <SvgBase {...props}>
        <path d="M6 3h9a2 2 0 0 1 2 2v14l-2-1-2 1-2-1-2 1-2-1-1 1V5a2 2 0 0 1 2-2Z" />
        <path d="M8.5 8h7M8.5 12h7M8.5 16h4" />
      </SvgBase>
    );
  }
  function DocSearchIcon(props) {
    return (
      <SvgBase {...props}>
        <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z" />
        <path d="M14 2v5h5" />
        <circle cx="11" cy="12" r="3.2" />
        <path d="m13.4 14.6 2.1 2.1" />
      </SvgBase>
    );
  }
  function CalendarCheckIcon(props) {
    return (
      <SvgBase {...props}>
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M8 2v4M16 2v4M3 9h18" />
        <path d="m9 14 2 2 4-4" />
      </SvgBase>
    );
  }
  function BellIcon(props) {
    return (
      <SvgBase {...props}>
        <path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 7h18s-3 0-3-7" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </SvgBase>
    );
  }
  function BulbIcon(props) {
    return (
      <SvgBase {...props}>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M6 10a6 6 0 1 1 12 0c0 2.2-1.1 3.5-2.1 4.4-.7.6-1.2 1.4-1.2 2.3H9.3c0-.9-.5-1.7-1.2-2.3C7.1 13.5 6 12.2 6 10Z" />
      </SvgBase>
    );
  }
  function PencilIcon(props) {
    return (
      <SvgBase {...props}>
        <path d="M12 20h9" />
        <path d="M16.5 3.5 20.5 7.5 8 20H4v-4z" />
      </SvgBase>
    );
  }
  