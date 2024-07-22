type Social = {
  label: string;
  link: string;
  icon: string;
};

type Presentation = {
  mail: string;
  title: string;
  role: string;
  description: string;
  about: string[];
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "ghita28loukili@gmail.com",
  title: "*Hi*, I’m Ghita Loukili ",
  role: "*S*oftware *E*ngineering Student",
  profile: "/profile.png",
  description:
    "Improving daily work is even more important than doing daily work.",
  about: [
    "**Software Engineering** student and passionate IT enthusiast. I am dedicated to mastering **Backend** using **Java** and **Spring Boot**, while also expanding my expertise in **Mobile Development** with **React Native**. With a keen interest in **DevOps** and **Cloud Computing**, I am eager to delve deeper into these fields and explore their potential.",
    " These days I am working on honing my skills in web development while also delving into the world of mobile development. I am always looking for new challenges and opportunities to learn and grow.",
    "When I am not coding, I enjoy reading books, crocheting and doing embroidery. I also love reading mangas and watching anime.",
  ],
  socials: [
    {
      label: "Github",
      link: "https://github.com/RitaSensei",
      icon: "iconoir:github",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/ghita-loukili-46405924a/",
      icon: "akar-icons:linkedin-v1-fill",
    },
    {
      label: "X",
      link: "https://x.com/GhitaSensei",
      icon: "pajamas:twitter",
    },
    {
      label: "Email",
      link: "mailto:ghita28loukili@gmail.com",
      icon: "mdi:email-outline",
    },
  ],
};

export default presentation;
