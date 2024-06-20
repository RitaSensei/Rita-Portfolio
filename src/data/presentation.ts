type Social = {
    label: string;
    link: string;
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
      },
      {
        label: "LinkedIn",
        link: "https://www.linkedin.com/in/ghita-loukili-46405924a/",
      },
      {
        label: "X",
        link: "https://x.com/GhitaSensei",
      },
    ],
  };
  
  export default presentation;