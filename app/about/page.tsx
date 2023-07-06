import Navigation from "@/views/MainPage/Navigation";
import Footer from "@/views/MainPage/Footer";
import Hero from "@/views/About/Hero";
import Skills from "@/views/About/Skills";
import Experience from "@/views/About/Experience";

import cls from "./styles.module.scss";

export default function About() {
  return (
    <main className={cls.wrapper}>
      <Navigation />
      <Hero />
      <Skills />
      <Experience />
      <Footer />
    </main>
  );
}
