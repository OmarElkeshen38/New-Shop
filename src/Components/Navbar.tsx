"use client";

import Link from "next/link";
import { FC, useEffect, useState } from "react";

const Navbar: FC = () => {
  return (
    <header className="bg-slate-300">
      <div className="navbar bg-slate-300 text-slate-700 container py-4">
        <div className="flex-1 text-cyan-950">
          <Link href="/" className="btn btn-ghost text-xl">
            New Shop
          </Link>
        </div>
        <div className="flex-none gap-2 text-cyan-950">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  3
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body text-slate-300 rounded-md">
                <span className="font-bold text-lg text-cyan-950">
                  3 items
                </span>
                <span className="text-cyan-950">Subtotal: $1808.99</span>
                <div className="card-actions">
                  <Link
                    href="/cart"
                    className="btn btn-block bg-slate-600 text-cyan-200 hover:bg-cyan-200 hover:text-cyan-900"
                  >
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
