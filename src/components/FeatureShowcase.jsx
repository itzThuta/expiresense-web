import { useState } from "react";
import {
  FaHome,
  FaShoppingCart,
  FaUtensils,
  FaCalendarAlt,
  FaBarcode,
  FaClock,
} from "react-icons/fa";
import shoppingImg from "../assets/1.png";
import inventoryImg from "../assets/2.png";

export default function FeatureShowcase() {
  const [active, setActive] = useState("shopping");

  const screens = {
    inventory: inventoryImg,
    shopping: shoppingImg,
    recipes: "/screens/recipes.png",
    planner: "/screens/planner.png",
    barcode: "/screens/barcode.png",
    expiry: "/screens/expiry.png",
  };

  const features = [
    { key: "inventory", title: "Food Inventory",  desc: "Fridge, Freezer, Pantry.", icon: FaHome },
    { key: "shopping",  title: "Shopping Lists",  desc: "Plan & move to stock.",    icon: FaShoppingCart },
    { key: "recipes",   title: "Smart Recipes",   desc: "Use what you have.",       icon: FaUtensils },
    { key: "planner",   title: "Meal Planner",    desc: "Sketch your week.",        icon: FaCalendarAlt },
    { key: "barcode",   title: "Receipt/Barcode", desc: "Scan & add fast.",         icon: FaBarcode },
    { key: "expiry",    title: "Expiry Tracking", desc: "Alerts before spoilage.",  icon: FaClock },
  ];

  const current = features.find((f) => f.key === active);
  const currentSrc = screens[active] || inventoryImg;

  return (
    <section id="features" className="py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-5xl lg:max-w-6xl px-4 sm:px-6 lg:px-8">
      
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-8 lg:gap-8">
         
          <div className="order-1 flex justify-center lg:col-span-5">
            <PhoneFrame
              src={currentSrc}
              alt={`${current?.title || "Feature"} screenshot`}
            />
          </div>

    
          <div className="order-2 lg:col-span-7">
            <h2
              className="text-3xl sm:text-4xl font-extrabold leading-tight"
              style={{ color: "var(--brand-900)" }}
            >
              Explore Features
            </h2>
            <p className="mt-2 text-slate-600">Tap a feature to preview.</p>

           
            <div className="mt-4 grid grid-cols-3 gap-2 sm:hidden">
              {features.map((f) => {
                const IconEl = f.icon;
                const isActive = f.key === active;
                return (
                  <button
                    key={f.key}
                    onClick={() => setActive(f.key)}
                    className={`flex flex-col items-center justify-center rounded-xl border p-3 text-xs transition
                      ${isActive ? "border-brand-600 bg-brand-50 text-brand-700" : "border-slate-200 bg-white hover:bg-slate-50"}`}
                    aria-pressed={isActive}
                    aria-label={f.title}
                  >
                    <IconEl className="text-base mb-1" />
                    <span className="leading-tight text-center">{f.title}</span>
                  </button>
                );
              })}
            </div>

          
            <ul className="mt-5 hidden sm:grid sm:grid-cols-2 gap-3">
              {features.map((f) => {
                const IconEl = f.icon;
                const isActive = f.key === active;
                return (
                  <li key={f.key}>
                    <button
                      onClick={() => setActive(f.key)} 
                      className={`w-full text-left rounded-xl border transition flex items-center gap-3 p-3
                        ${isActive ? "border-brand-600 bg-brand-50" : "border-slate-200 bg-white hover:bg-slate-50"}`}
                      aria-pressed={isActive}
                    >
                      <span
                        className="grid h-9 w-9 place-items-center rounded-lg"
                        style={{
                          backgroundColor: isActive ? "var(--brand-100)" : "var(--brand-50)",
                          color: "var(--brand-700)",
                        }}
                      >
                        <IconEl className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 leading-tight">
                        <div className="font-semibold text-slate-900">{f.title}</div>
                        <div className="text-xs text-slate-600 hidden xl:block">{f.desc}</div>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-3 sm:mt-4 lg:mt-6" />
      </div>
    </section>
  );
}

function PhoneFrame({ src, alt }) {
  return (
    <div className="relative">
      <div
        className="
          w-[170px] h-[340px]
          sm:w-[210px] sm:h-[420px]
          lg:w-[230px] lg:h-[460px]
          xl:w-[270px] xl:h-[520px]
          rounded-[24px] sm:rounded-[28px]
          bg-white border border-slate-200 shadow-[0_16px_40px_rgba(2,6,23,0.15)]
          overflow-hidden
        "
      >
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 mt-1 h-4 w-20 sm:h-5 sm:w-24 rounded-b-2xl bg-black/80"
        />
        <div className="relative h-full w-full pt-4 sm:pt-5 px-2 pb-2 bg-[linear-gradient(180deg,#f6fffb,white)]">
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover md:object-contain select-none"
            draggable="false"
          />
          <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 h-1.5 w-16 rounded-full bg-black/10" />
        </div>
      </div>
      <div className="mx-auto mt-3 h-2 w-20 rounded-full bg-black/10 blur-md" />
    </div>
  );
}
