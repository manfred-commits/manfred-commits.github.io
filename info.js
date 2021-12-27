let info = {
  name: "Manfredi Piraino",
  logo_name: "Manfredi Piraino",
  flat_picture: require("./src/assets/portrait.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "Hi, I'm Manfredi Piraino, a junior Full Stack webdeveloper passionate for everything that is programming. ",
  links: {
    linkedin: "https://www.linkedin.com/in/manfredi-piraino/",
    github: "https://github.com/manfred-commits",
    // behance: "",
    resume:
      "https://drive.google.com/file/d/1q-S54PTtyk1OJ0H8524OE1WNpad2Zf8U/view?usp=sharing"
  },
  education: [
    {
      name: "Boolean Careers",
      place: "Milan",
      date: "June, 2021 - December 2021",
      degree: "An intensive course to become a Full Stack Web Developer covering HTML, CSS, Javascript, Vue.js, PHP, Laravel, and MySQL",
      // gpa: "",
      // description:
      //   "",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "MySQL",
        "Vue.js",
        "Laravel",
      ]
    },
    {
      name: "Università Telematica Pegaso",
      place: "Palermo",
      date: "Dec, 2019 - June 2021 ",
      degree: "Master's degree in Security Enginnering",
      gpa: "First class honours",
      description:
        "",
      skills: [
        "fundamentals of cyber security",
        "security on the workplace",
        "basis in Workplace Management Systems",
      ]
    },
    {
      name: "Università Pegaso",
      place: "Palermo",
      date: "Sept, 2016 - Dec 2019 ",
      degree: "Bachelor's degree in Civil Engineering",
      gpa: "100/110",
      description:
        "",
      skills: [
        "",
      ]
    },
  ],
  experience: [
    {
      name: "Boolean Careers",
      place: "Milan, Italy",
      date: "June, 2021 - December 2021",
      position: "Jr Full Stack Web Developer Trainee",
      description:
        "700 hours web development course divided into daily practice and theory lessons, in which, starting from basic knowledge of programming logic, I had the opportunity to learn and apply basic web development concepts, both on the frontend side and backend side. The course finished with a team project where, through precise coordination and division of tasks, we were able to realize a food delivery website complete in all its parts and functionalities.",
      // skills: ["HTML5", "CSS3", "Bootstrap", "JQuery", "Json", "JavaSript", "TypeSript", "es6", "VueJS"]
    },
    {
      name: "Greiner Bio-One GmbH",
      place: "Palermo, Sicily, Italy",
      date: "Set 2020 - Nov 2020",
      position: "Assistant System Analyst",
      description:
        "Assisted in program/software support, software modifications, and systems analysis and design.",
      // skills: [""]
    },    
  ],
  skills: [
    {
      title: "Languages",
      info: [
        "Javascript","Php","CSS3","HTML5"],
      icon: "fa fa-code"
    },
    // {
    //   title: "data-frameworks",
    //   info: [
    //     "HTML5","CSS3","Bootstrap","Vue.js","json"],
    //   icon: "fa fa-cubes"
    // },
    {
      title: "Web Technologies",
      info: ["Vue.js", "Npm", "Node","Laravel"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "Databases",
      info: [ "MySQL"],
      icon: "fa fa-database"
    },
    // {
    //   title: "Operating systems & tools",
    //   info: [ "Windows", "Agile", "Scrum", "JIRA","Firebase"],
    //   icon: "fas fa-tools"
    // },
    // {
    //   title: "Design",
    //   info: ["Illustrator", "XD", "Photoshop", "Gimp"],
    //   icon: "fa fa-pencil-square-o"
    // }
  ],
  portfolio: [    
    {
      name: "Deliveboo",
      pictures: [
        {
          img: require("./src/assets/portfolio/deliveboo/deliveboo-1.jpg")
        },
        {
          img: require("./src/assets/portfolio/deliveboo/deliveboo-2.png")
        },
      ],
      technologies: ["Laravel","Php","Vue.js","JavaScript","HTML","CSS"],
      category: "Web App",
      date: "December, 21",
      github:
        "https://github.com/manfred-commits/team-7-deliveboo",
      visit: "https://deliveboo.herokuapp.com/",
      description:
        " Fully functioning food delivery web app, inspired by 'Deliveroo'. "
    },
    {
      name: "Spotify web",
      pictures: [
        {
          img: require("./src/assets/portfolio/spotify/spotify-web.png")
        },
        {
          img: require("./src/assets/portfolio/spotify/spotify-web2.png")
        },
      ],
      technologies: ["HTML","CSS"],
      category: "Web App",
      date: "Jul, 20",
      github:
        "https://github.com/manfred-commits/html-css-spotifyweb",
      visit: "https://manfred-commits.github.io/html-css-spotifyweb/",
      description:
        " Spotify web page replica, fully responsive. "
    },
    {
      name: "Boolflix",
      pictures: [
        {
          img: require("./src/assets/portfolio/Boolflix/boolflix-3.png")
        },
      ],
      technologies: ["HTML","CSS","Javascript","Vue.CLI"],
      category: "Web App",
      date: "Oct, 8",
      github:
        "https://github.com/manfred-commits/vue-boolflix",
      visit: "https://manfred-commits.github.io/vue-boolflix/",
      description:
        " Boolflix web page replica. "
    },
    {
      name: "Avana Fitness",
      pictures: [
        {
          img: require("./src/assets/portfolio/avada-fitness/avada-fitnes-1.jpg")
        },
      ],
      technologies: ["HTML","CSS","Javascript","Vue.CLI"],
      category: "Web page",
      date: "Oct, 15",
      github:
        "https://github.com/manfred-commits/proj-html-vuejs",
      visit: "https://manfred-commits.github.io/proj-html-vuejs/",
      description:
        " Avada Fitness wordpress website replica. "
    },
    {
      name: "Boolzap",
      pictures: [
        {
          img: require("./src/assets/portfolio/boolzap/boolzap-1.png")
        },
      ],
      technologies: ["HTML","CSS", "Javascript"],
      category: "Web App",
      date: "September, 21",
      github:
        "https://github.com/manfred-commits/vue-boolzapp",
      visit: "https://manfred-commits.github.io/vue-boolzapp/",
      description:
        " Whatsapp web replica realized with Front-End technologies. "
    },
  ],
  // portfolio_design: [
  //   {
  //     name: "Examia",
  //     title: "Online Examination - UI Design",
  //     pictures: [
  //       {
  //         img: require("./src/assets/designs/online examination/exam (2).png"),
  //         title: "MoodBoard"
  //       },
  //       {
  //         img: require("./src/assets/designs/online examination/exam (1).png"),
  //         title: "Mockups 1"
  //       },
  //       {
  //         img: require("./src/assets/designs/online examination/exam (3).png"),
  //         title: "Mockups 2"
  //       },
  //       {
  //         img: require("./src/assets/designs/online examination/exam (4).png"),
  //         title: "App Elements"
  //       },
  //       {
  //         img: require("./src/assets/designs/online examination/exam (5).png"),
  //         title: "App Elements"
  //       },
  //       {
  //         img: require("./src/assets/designs/online examination/exam (6).png"),
  //         title: "App Elements"
  //       }
  //     ],
  //     technologies: ["XD", "Photoshop"],
  //     category: "Visual Design",
  //     github: "",
  //     date: "Jan, 2021 - Feb, 2021",
  //     visit: "",
  //     description:
  //       " Examia is a open source project , <br> <br> with Ui/UX design and full stack developing(HTML/CSS/JQuery/PHP)."
  //   },
  //   {
  //     name: "Pill Reminder",
  //     title: "Pill Reminder - Mockup Design",
  //     pictures: [
  //       {
  //         img: require("./src/assets/designs/pill reminder/Web 1.png"),
  //         title: "Moodboard"
  //       },
  //       {
  //         img: require("./src/assets/designs/pill reminder/1.png"),
  //         title: "Mockups 1"
  //       },
  //       {
  //         img: require("./src/assets/designs/pill reminder/2.png"),
  //         title: "Mockups 2"
  //       }
  //     ],
  //     technologies: ["XD", "Illustrator"],
  //     category: "Visual Design",
  //     github: "",
  //     date: "Apr, 2021 - Apr, 2021",
  //     visit: "",
  //     description:
  //       "pill reminder app for nessecary drugs for the day."
  //   },
  //   {
  //     name: "Taxes Burger",
  //     title: "Taxes Burger - UI design",
  //     pictures: [
  //       {
  //         img: require("./src/assets/designs/burger/Web 1 (1).jpg"),
  //         title: "Moodboard"
  //       },
  //       {
  //         img: require("./src/assets/designs/burger/Web 1 (1).png"),
  //         title: "Mockup 1"
  //       },
  //       {
  //         img: require("./src/assets/designs/burger/Web 1 (2).png"),
  //         title: "Mockup 2"
  //       },
  //       {
  //         img: require("./src/assets/designs/burger/Web 1 (3).png"),
  //         title: "Mockup 3"
  //       },
  //     ],
  //     technologies: ["XD", "Illustrator"],
  //     category: "Visual Design",
  //     github: "",
  //     date: "May, 2021 - May, 2021",
  //     visit: "",
  //     description:
  //       " Burger restuarant UI design"
  //   }
  // ],
};

export default info;
