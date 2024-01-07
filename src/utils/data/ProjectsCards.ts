export const myProjectsCards: IProject[] = [
  {
    name: "Campus Guide",
    roles: ["Ui design", "Full stack"],
    image: "/guiadocampus.png",
    description: [
      "At the college where I study, internal communication faced challenges. Therefore, I developed a project using technology to enhance access to information about rooms and departments. The goal was to make communication more efficient and accessible, especially for students.",
      "I chose to focus on mobile design and minimalism for this project for several reasons. I recognized that the majority of students primarily use smartphones to access information. By centering the design around mobile devices, I aimed to ensure accessibility and convenience for students.",
    ],
    techs: ["next", "node", "nest", "postgres", "typescript"],
    liveLink: "#",
    githubLink: "#",
    color: "#3F91F0",
  },
  {
    name: "Restaurant Manager",
    roles: ["Ui design", "Full stack"],
    image: "/quiosque.png",
    description: [
      "I developed a management system for a local restaurant, aiming to enhance its expense control and efficient management of tables and orders. The backend was built using Node.js with TypeScript and express, ensuring a solid and scalable foundation. For the user interface, I employed React, also utilizing TypeScript and styled components.",
      "The system allows for simplified management of tables and orders, addressing recurring issues faced by the restaurant. Consequently, the restaurant now has an effective tool that not only optimizes day-to-day operations but also provides valuable insights for more efficient and informed financial administration.",
    ],
    techs: [
      "react",
      "node",
      "express",
      "mysql",
      "typescript",
      "styled-components",
    ],
    color: "#1AFF5A",
    backward: true,
    reason: "private system",
  },
  {
    name: "My portfolio",
    roles: ["Ui design", "Front End"],
    image: "/portfolio.png",
    description: [
      "Designed for a straightforward and impactful experience, I chose yellow as the accent color to evoke energy and creativity. The neutral palette complements, creating a simpler and cleaner design. Built with Next.js, Tailwind CSS, and Framer Motion, my intention was to provide a visually appealing and seamless journey through my projects in a space that prioritizes simplicity, aesthetics, and a user-friendly experience.",
    ],
    githubLink: "#",
    techs: ["next", "react", "typescript", "tailwind"],
    color: "#FACC15",
  },
];
