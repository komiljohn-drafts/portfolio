import React from "react";

import Navigation from "./Navigation";
import cls from "./styles.module.scss";
import Hero from "./Hero";
import Works from "./Works";
import Footer from "./Footer";

export default function MainPage() {
  return (
    <main className={cls.wrapper}>
      <Navigation />
      <Hero />
      <Works />
      <Footer />
    </main>
  );
}
