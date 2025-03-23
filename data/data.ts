export const data = {
    home: {
      title: "Welcome to My Portfolio",
      description: "I am a creative art director with a passion for design and storytelling.",
      image: "/images/home.jpg", // Place an image in the `public/images` folder
      cta: {
        text: "View My Work",
        link: "/portfolio",
      },
    },
    about: {
      title: "About Me",
    bio: "I am a creative art director with over 5 years of experience in designing impactful visual stories. My expertise includes branding, digital design, and motion graphics.",
    skills: ["Branding", "Digital Design", "Motion Graphics", "UI/UX Design"],
    image: "/images/about.jpg", // Place an image in the `public/images` folder
    
    },
    portfolio: {
      title: "My Work",
      projects: [
        {
          id: 1,
          name: "Project 1",
          description: "A stunning branding project for a tech startup.",
          image: "/images/project1.jpg", // Place an image in the `public/images` folder
          link: "#",
        },
        {
          id: 2,
          name: "Project 2",
          description: "A modern website redesign for a fashion brand.",
          image: "/images/project2.jpg",
          link: "#",
        },
        {
          id: 3,
          name: "Project 3",
          description: "A motion graphics campaign for a food delivery app.",
          image: "/images/project3.jpg",
          link: "#",
        },
      ],
    },
    contact: {
      title: "Get in Touch",
      description: "Have a project in mind or just want to say hello? Feel free to reach out!",
      email: "example@example.com",
      phone: "+123 456 7890",
    },
  };