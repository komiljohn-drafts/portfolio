import React from "react";
import cls from "./styles.module.scss";

export default function Skills() {
  const skills = [
    {
      id: 1,
      title: "Languages",
      technologies: "JavaScript, TypeScript, GraphQL",
    },
    {
      id: 2,
      title: "Technologies",
      technologies: "React.js, Next.js, Vue.js, Redux, VueX, MobX, Material UI, Ant Design, Chakra UI",
    },
  ];
  return (
    <section className={cls.skills}>
      <h2>Skills</h2>
      {skills.map((skill) => (
        <div key={skill.id}>
          <p className={cls.title}>{skill.title}:</p>
          <p className={cls.technologies}>{skill.technologies}</p>
        </div>
      ))}
    </section>
  );
}
