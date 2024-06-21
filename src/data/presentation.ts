type Social = {
    label: string;
    link: string;
    icon : string;
  };
  
  type Presentation = {
    mail: string;
    title: string;
    description: string;
    socials: Social[];
    profile?: string;
  };
  
  const presentation: Presentation = {
    mail: "ghita28loukili@gmail.com",
    title: "*Hi*, I’m Ghita ",
    profile: "/profile.png",
    description: 
      "**Software Engineering** student and passionate IT enthusiast. I am dedicated to mastering **Backend** using **Java** and **Spring Boot**, while also expanding my expertise in **Mobile Development** with **React Native**. With a keen interest in **DevOps** and **Cloud Computing**, I am eager to delve deeper into these fields and explore their potential.",
    socials: [
      {
        label: "Github",
        link: "https://github.com/GhitaLoukili",
        icon : "iconoir:github",
      },
      {
        label: "LinkedIn",
        link: "https://www.linkedin.com/in/ghita-loukili-46405924a/",
        icon : "akar-icons:linkedin-v1-fill",
      },
      {
        label: "X",
        link: "https://x.com/GhitaSensei",
        icon : "pajamas:twitter",
      },
      {
        label: "Email",
        link: "mailto:ghita28loukili@gmail.com",
        icon : "mdi:email-outline",
      }
    ],
  };
  
  export default presentation;