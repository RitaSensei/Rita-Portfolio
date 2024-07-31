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
  role: "*S*oftware *E*ngineering *S*tudent",
  profile: "/profile.png",
  description:
    "***❝*** Improving daily work is even more important than doing daily work. ***❞***",
  about: [
    "I am a **SWE Student** passionate about a lot of thing in IT, mainly interested in **backend** and **mobile development**. I am dedicated to mastering backend development with **Java** and **Spring Boot**, while also expanding my expertise in mobile development with **React Native**. I am also discovering more about **DevOps** and **Cloud Computing** and am eager to explore their potential.",
    "I am currently honing my skills in web and mobile development, while learning about software testing during my summer internship",
    "When I am not coding, I enjoy reading books, crocheting and embroidery. These activities provide a calming break from coding.",
    "While I am still figuring out my career path, I am committed to exploring various avenues to build my career.",
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
