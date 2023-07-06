import React from "react";

import cls from "./styles.module.scss";

export default function Hero() {
  return (
    <section className={cls.hero}>
      <div className={cls.intro}>
        <h1 className={cls.text}>
          I'm Komiljon Yormurodov, <span>Frontend Engineer ⚡ and Freelancer 👨‍💻</span>
        </h1>
        <h2 className={cls.description}>4 years of experience working with HTML, CSS, JavaScript and TypeScript.</h2>
        <h2 className={cls.description}>
          Highly adept at both independant and collaborative projects, with an emphasis on landing pages and admin
          panels.
        </h2>
      </div>
    </section>
  );
}
