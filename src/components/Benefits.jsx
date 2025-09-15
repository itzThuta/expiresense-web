// src/components/Benefits.jsx
import {
    FaLeaf,
    FaMoneyBillWave,
    FaBell,
    FaBarcode,
    FaUsers,
    FaUtensils,
  } from "react-icons/fa";
  
  const points = [
    { icon: FaLeaf,          title: "Cut food waste",      body: "Stay ahead of expiry dates so you use more of what you buy and throw away less." },
    { icon: FaMoneyBillWave, title: "Spend smarter",       body: "Fewer duplicate purchases and fewer spoiled items means real savings each month." },
    { icon: FaBell,          title: "Right-time reminders",body: "Notifications before items spoil help you plan meals or freeze things in time." },
    { icon: FaBarcode,       title: "Add in seconds",      body: "Scan receipts or barcodes to populate items fast — no tedious typing." },
    { icon: FaUsers,         title: "Shared lists",        body: "Keep the whole household in sync on what to buy (and what not to)." },
    { icon: FaUtensils,      title: "Use-up ideas",        body: "Recipe suggestions tailored to what’s close to expiring in your kitchen." },
  ];
  
  export default function Benefits({ id = "benefits", className = "" }) {
    return (
      <section id={id} className={`py-6 sm:py-10 lg:py-12 ${className}`}>
        <div className="mx-auto max-w-5xl lg:max-w-6xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto">
            <h2
              className="text-2xl sm:text-3xl font-extrabold leading-tight"
              style={{ color: "var(--brand-900)" }}
            >
              Why ExpireSense?
            </h2>
            <p className="mt-2 text-slate-700 text-sm sm:text-base leading-snug sm:leading-relaxed">
              See what you have, what’s expiring, and what to do next. Plan smarter
              shops, prevent waste, and turn near-expiry items into meals with less effort.
            </p>
          </div>
  
          
          <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {points.map((p) => {
              const IconEl = p.icon;
              return (
                <li key={p.title} className="group">
                  <div
                    className="flex items-start gap-2.5 sm:gap-3 pl-3 md:pl-5 border-l-2 md:border-l-4"
                    style={{ borderColor: "var(--brand-300)" }}
                  >
                  
                    <span
                      className="grid h-8 w-8 md:h-9 md:w-9 place-items-center rounded-lg shrink-0 transition md:group-hover:scale-105"
                      style={{ backgroundColor: "var(--brand-50)", color: "var(--brand-700)" }}
                      aria-hidden
                    >
                      <IconEl className="h-4 w-4" />
                    </span>
  
                  
                    <div className="min-w-0">
                      <h3 className="text-[15px] sm:text-base font-semibold text-slate-900">
                        {p.title}
                      </h3>
                      <p className="mt-0.5 text-xs sm:text-sm text-slate-600">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
  
        
          <div className="mt-6 flex justify-center">
            <a href="#how-it-works" className="btn-brand px-4 py-2 text-sm sm:px-5 sm:py-2.5">
              See how it works
            </a>
          </div>
        </div>
      </section>
    );
  }
  