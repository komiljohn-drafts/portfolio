import React from "react";
import cls from "./styles.module.scss";
import { Inter } from "next/font/google";
import Image from "next/image";
import OshImage from "@/public/caption.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Works() {
  const projects = [
    {
      id: 1,
      title: "01 / PROJECT NAME",
      description:
        "Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.",
      tools: "Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.",
    },
    {
      id: 1,
      title: "02 / PROJECT NAME",
      description:
        "Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.",
      tools: "Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.",
    },
    {
      id: 1,
      title: "03 / PROJECT NAME",
      description:
        "Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.",
      tools: "Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.",
    },
  ];

  return (
    <section className={`${inter.className} ${cls.works}`}>
      {projects.map((project) => (
        <div className={cls.work} key={project.id}>
          <div className={cls.info}>
            <div>
              <p className={cls.title}>01 / PROJECT NAME</p>
              <p className={cls.description}>
                Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.
              </p>
              <p className={cls.tools}>
                Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.
              </p>
            </div>
            <p className={cls.more}>More shots from this project ↗</p>
          </div>
          <Image width={640} height={365} src={OshImage} alt="project" />
        </div>
      ))}
    </section>
  );
}
