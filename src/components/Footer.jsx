import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8">
      {/* subtle gradient divider */}
      <div className="mx-[10%]">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      </div>

      {/* content row */}
      <div className="mx-[10%] py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 text-center sm:text-left">
          © {year} <span className="font-semibold text-slate-800">ExpireSense</span>
          <span className="hidden sm:inline"> — </span>
          <span className="block sm:inline">Smart • Simple • Sustainable</span>
        </p>

        <ul className="flex items-center justify-center gap-6 sm:gap-8 text-slate-700">
          <li>
            <a
              href="#"
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2 hover:text-slate-900"
              aria-label="Facebook"
              title="Facebook"
            >
              <FaFacebook className="h-5 w-5 opacity-70 group-hover:opacity-100" />
              <span className="text-sm">Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2 hover:text-slate-900"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5 opacity-70 group-hover:opacity-100" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2 hover:text-slate-900"
              aria-label="Instagram"
              title="Instagram"
            >
              <FaInstagram className="h-5 w-5 opacity-70 group-hover:opacity-100" />
              <span className="text-sm">Instagram</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
