import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState(null); 
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setResult("");
    setStatus(null);

    const formData = new FormData(e.target);
    formData.append("access_key", "0a1ca24c-38f3-4525-b391-252642d10a2e");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setResult("Message sent successfully.");
        e.target.reset();
      } else {
        setStatus("error");
        setResult(data.message || "Something went wrong.");
      }
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setStatus("error");
      setResult("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-16 px-4 bg-white">
      <div className="mx-auto max-w-2xl">
        <h4
          className="text-center text-sm tracking-wide text-slate-600"
          style={{ color: "var(--brand-900)" }}
        >
          Partnerships & Press
        </h4>
        <h2
          className="mt-1 text-center text-3xl sm:text-4xl font-extrabold text-slate-900"
          style={{ color: "var(--brand-900)" }}
        >
          Contact ExpireSense
        </h2>
        <p
          className="mt-3 text-center text-slate-600"
          style={{ color: "var(--brand-900)" }}
        >
          Message us—we’ll reply soon.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900
                         placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-70 focus:border-emerald-40"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900
                         placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-70 focus:border-emerald-40"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your message"
            required
            rows="6"
            className="mt-4 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900
                       placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-70 focus:border-emerald-40 resize-y"
          />

          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center rounded-full bg-teal-600 px-6 py-3
                         font-semibold text-white hover:bg-teal-700 disabled:opacity-60"
            >
              {loading ? "Sending…" : "Submit Now"}
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </button>
          </div>

          {result && (
            <p
              className={`mt-4 text-center text-sm ${
                status === "success" ? "text-green-700" : "text-red-600"
              }`}
            >
              {result}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
