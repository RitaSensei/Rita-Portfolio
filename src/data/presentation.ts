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
    profile: "/profile_image.jpg",
    description:
      "**IT** System Technician actively transitioning towards a more **coding**-focused career. I am dedicated to honing my expertise in **B**ackend using **Python** and expanding my capabilities in **F**rontend with **NextJS** and **Astro**. Fascinated by **AI** and its potential, exploring **Machine Learning** and **LLM**'s.",
  
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