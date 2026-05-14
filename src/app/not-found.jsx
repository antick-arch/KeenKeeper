"use client";

import Link from "next/link";
import { FaHome, FaArrowLeft } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B1120] flex items-center justify-center px-6 overflow-hidden relative">

      {/* Glow Effects */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-emerald-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-green-400/20 blur-3xl rounded-full"></div>

      {/* Card */}
      <div className="relative z-10 max-w-2xl w-full">

        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 md:p-14 shadow-2xl">

          {/* Icon */}
          <div className="w-20 h-20 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-8">

            <FiSearch className="text-green-400 text-4xl" />

          </div>

          {/* 404 */}
          <h1 className="text-7xl md:text-8xl font-black text-white tracking-tight">
            404
          </h1>

          {/* Title */}
          <h2 className="text-3xl font-bold text-white mt-4">
            Oops! Page not found
          </h2>

          {/* Description */}
          <p className="text-gray-400 mt-5 leading-relaxed max-w-lg">
            The page you are looking for might have been removed,
            renamed, or temporarily unavailable.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">

            {/* Home */}
            <Link
              href="/"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300"
            >
              <FaHome />
              Back Home
            </Link>

            {/* Go Back */}
            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-2 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white px-6 py-3 rounded-xl transition-all duration-300"
            >
              <FaArrowLeft />
              Go Back
            </button>

          </div>

          {/* Footer */}
          <div className="border-t border-white/10 mt-12 pt-6 text-sm text-gray-500">
            KeenKeeper © 2026 — All rights reserved.
          </div>

        </div>

      </div>

    </div>
  );
}