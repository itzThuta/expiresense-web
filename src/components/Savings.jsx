import { useMemo, useState } from "react";
import { FaCalculator, FaPiggyBank } from "react-icons/fa";

const BASE_WASTE = 0.2; // 20% of grocery spend wasted
const MAX_REDUCTION = 0.55; // up to 55% cut with full adoption

export default function Savings() {
  const [members, setMembers] = useState(2);
  const [users, setUsers] = useState(2);
  const [budget, setBudget] = useState(300);

  const safeUsers = Math.min(users || 0, members || 0);

  const { monthly, yearly, cutPct } = useMemo(() => {
    const adoption = Math.min(1, members ? safeUsers / members : 0);
    const wasted = (budget || 0) * BASE_WASTE;
    const saved = wasted * (MAX_REDUCTION * adoption);
    return {
      monthly: saved,
      yearly: saved * 12,
      cutPct: MAX_REDUCTION * adoption * 100,
    };
  }, [members, safeUsers, budget]);

  const fmt = (n) =>
    new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(n || 0);

  return (
    <section
      id="savings"
      className="relative z-[1] isolate py-6 sm:py-8 lg:py-12"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Compact card */}
          <div className="card w-full max-w-xs sm:max-w-sm md:max-w-none mx-auto p-3 sm:p-4">
            <div className="flex items-center gap-2">
              <span
                className="grid h-8 w-8 place-items-center rounded-lg"
                style={{
                  backgroundColor: "var(--brand-100)",
                  color: "var(--brand-700)",
                }}
              >
                <FaCalculator className="text-sm" />
              </span>
              <h3
                className="text-base sm:text-sm font-semibold"
                style={{ color: "var(--brand-900)" }}
              >
                Substantial Savings Calculator
              </h3>
            </div>

            {/* Mobile 1-col → sm: 2-col → md: 3-col */}
            <form className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
              <div>
                <label className="block text-[11px] font-medium text-slate-600">
                  Household Members*
                </label>
                <input
                  type="number"
                  min={1}
                  value={members}
                  onChange={(e) =>
                    setMembers(Math.max(1, Number(e.target.value || 0)))
                  }
                  className="input mt-1 py-1.5 text-sm"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-600">
                  Expiresense Users*
                </label>
                <input
                  type="number"
                  min={1}
                  value={users}
                  onChange={(e) =>
                    setUsers(Math.max(1, Number(e.target.value || 0)))
                  }
                  className="input mt-1 py-1.5 text-sm"
                />
              </div>

              <div className="sm:col-span-2 md:col-span-1">
                <label className="block text-[11px] font-medium text-slate-600">
                  Monthly Grocery Budget*
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                    $
                  </span>
                  <input
                    type="number"
                    min={0}
                    step={10}
                    value={budget}
                    onChange={(e) =>
                      setBudget(Math.max(0, Number(e.target.value || 0)))
                    }
                    className="input mt-1 pl-7 py-1.5 text-sm"
                  />
                </div>
              </div>

              {/* KPIs (tiny cards) */}
              <div className="sm:col-span-2 md:col-span-3 grid grid-cols-2 gap-2">
                <div className="rounded-xl border border-slate-200 bg-white p-2">
                  <div className="text-[10px] uppercase tracking-wide text-slate-500">
                    Yearly Save
                  </div>
                  <div
                    className="mt-0.5 text-lg sm:text-xl font-extrabold"
                    style={{ color: "var(--brand-900)" }}
                  >
                    {fmt(yearly)}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    ≈ {fmt(monthly)}/mo
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-2 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-wide text-slate-500">
                      Waste Cut
                    </div>
                    <div
                      className="mt-0.5 text-lg sm:text-xl font-extrabold"
                      style={{ color: "var(--brand-900)" }}
                    >
                      {Math.round(cutPct)}%
                    </div>
                  </div>
                  <span
                    className="grid h-8 w-8 place-items-center rounded-full"
                    style={{
                      backgroundColor: "var(--brand-50)",
                      color: "var(--brand-700)",
                    }}
                  >
                    <FaPiggyBank className="text-sm" />
                  </span>
                </div>
              </div>

              {/* CTA centered on mobile */}
              <div className="sm:col-span-2 md:col-span-3 flex justify-center md:justify-end">
                <a href="#contact" className="btn-brand px-2 py-2 text-sm">
                  Talk to us
                </a>
              </div>
            </form>

            {/* Tiny note */}
            <p
              className="mt-2 text-[11px] text-slate-500 text-center md:text-right"
              aria-live="polite"
            >
              Uses {Math.round(BASE_WASTE * 100)}% typical waste and up to{" "}
              {Math.round(MAX_REDUCTION * 100)}% reduction.
            </p>
          </div>

          {/* Right copy is hidden on mobile to save space */}
          <div className="hidden md:block md:pl-2">
            <h2
              className="text-2xl sm:text-3xl font-extrabold"
              style={{ color: "var(--brand-900)" }}
            >
              Substantial Savings
            </h2>
            <p className="mt-2 text-slate-700 text-sm leading-relaxed">
              Estimate how much ExpireSense can save by cutting avoidable food
              waste.
            </p>
            <ul className="mt-3 space-y-1.5 text-slate-700 text-sm">
              <li>• Lists linked to inventory to avoid duplicates.</li>
              <li>• Alerts before items expire.</li>
              <li>• Smarter planning and spending.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
