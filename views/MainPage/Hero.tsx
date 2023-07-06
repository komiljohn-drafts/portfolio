import React from "react";

import { GoBottomSvg } from "@/public/icons";
import cls from "./styles.module.scss";

export default function Hero() {
  return (
    <section className={cls.hero}>
      <div className={cls.intro}>
        <h1 className={cls.text}>Hello 👋, I'm Komiljon Yormurodov</h1>
        <GoBottomSvg />
      </div>
      <h2 className={cls.description}>
        A senior-year design student who trying to specialize in 3D modeling & texturing.
      </h2>
    </section>
  );
}
