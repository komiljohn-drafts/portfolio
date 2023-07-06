"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

import { MoonSvg, SunSvg } from "@/public/icons";
import cls from "./styles.module.scss";

export default function Navigation() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    localStorage.setItem("theme", localStorage.getItem("theme") === "dark" ? "light" : "dark");
    setIsDark(!isDark);
    document.documentElement.setAttribute("data-theme", isDark ? "" : "dark");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDark(localStorage.getItem("theme") === "dark");
      document.documentElement.setAttribute("data-theme", localStorage.getItem("theme") === "dark" ? "dark" : "");
    }
  }, []);

  return (
    <nav className={cls.navigation}>
      <Link className={cls.logo} href="/">
        ky.
      </Link>
      <ul>
        <li>
          <Link href="/work">Work</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li className={cls.theme}>
          <div className={`${cls.toggler} ${isDark ? cls.isDark : ""}`} onClick={toggleTheme}>
            {isDark ? <SunSvg fill={"#f3f3f3"} /> : <MoonSvg fill={"#181717"} />}
          </div>
        </li>
      </ul>
    </nav>
  );
}
