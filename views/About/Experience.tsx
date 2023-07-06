import React from "react";
import cls from "./styles.module.scss";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: () => (
        <>
          Frontend Engineer, <span>Udevs</span>
        </>
      ),
      period: "Sept 2021 - Present (1 year, 10 months)",
      tasks: [
        "Assisted in building dynamic object builder website which is being used by 10+ projects so far to build their websites quickly with no coding skills",
        "Taught 30 students in JavaScript at Bootcamp, as a result 6 of them were hired rightaway",
        "Added metrics to delivery website to track 1000+ user actions daily",
        "Constantly made code reviews and mentored less qualified frontend developers",
        "Worked in an agile environment with daily standups and strictly followed the sprint plan",
      ],
    },
    {
      id: 2,
      title: () => (
        <>
          Frontend Engineer, <span>Abak</span>
        </>
      ),
      period: "Sept 2020 - Jun 2021 (7 months)",
      tasks: [
        "Built and maintained reusable and strong-typed components using React and TypeScript",
        "Wrote various features using JavaScript to increase the usability of the site",
        "Used Linters to discover the problems and improve the readability of the code by other developers",
        "Collaborated with backend engineers to develop REST API contracts",
      ],
    },
  ];

  return (
    <section className={cls.experience}>
      <h2>Experience</h2>
      {experiences.map((e) => (
        <div key={e.id} className={cls.experience}>
          <p className={cls.title}>{e.title()}</p>
          <p className={cls.period}>{e.period}</p>
          <ul>
            {e.tasks.map((task) => (
              <li key={task}>– {task}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
