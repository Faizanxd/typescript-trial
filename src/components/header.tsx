import React from "react";
import { Link, NavLink } from "react-router-dom";
import weatherLogo from "../assets/logo.png";

export default function Header() {
  function isActiveLink({ isActive }: { isActive: boolean }) {
    return isActive ? "font-semibold text-white" : undefined;
  }

  return (
    <header className="border-b-2 border-b-gray-700 py-2">
      <nav className="grid grid-cols-[100px_auto_200px] items-center gap-4">
        <section className="h-12">
          <Link to="/main">
            <img
              className="h-full w-[50%] object-contain"
              src={weatherLogo}
              alt="weather logo"
            />
          </Link>
        </section>
        <section className="text-sm text-gray-300">
          <ul className="flex gap-4">
            <li>
              <NavLink className={isActiveLink} to="/main">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={isActiveLink} to="/hourly">
                Hourly
              </NavLink>
            </li>
            <li>
              <NavLink className={isActiveLink} to="/daily">
                Daily
              </NavLink>
            </li>
            <li>
              <NavLink className={isActiveLink} to="/monthly">
                Monthly
              </NavLink>
            </li>
          </ul>
        </section>
        <section>secondary</section>
      </nav>
    </header>
  );
}
