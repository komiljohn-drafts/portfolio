import React from "react";
import Link from "next/link";

import cls from "./styles.module.scss";

export default function Footer() {
  return (
    <nav className={cls.footer}>
      <p className={cls.privacy}>Komiljon Yormurodov ⏤ 2023</p>
      <ul>
        <li>
          <Link href="/">LinkedIn</Link>
        </li>
        <li>
          <Link href="/work">Twitter</Link>
        </li>
      </ul>
    </nav>
  );
}
