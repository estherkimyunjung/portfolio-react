/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Esther Kim",
  title: "Hi, I'm Esther ",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of designing and building Web and Mobile applications with JavaScript / React.js / Node.js and some other cool libraries and frameworks."
  ),
  resumeLink: require("./assets/EstherKim_Resume.pdf"),
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/estherkimyunjung",
  linkedin: "https://www.linkedin.com/in/estherkim-yunjung/",
  gmail: "estherkimyunjung@gmail.com",
  medium: "https://estherkimyunjung.medium.com/",
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "Ruby on Rails",
      fontAwesomeClassname: "fas fa-gem",
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Flatiron School",
      logo: require("./assets/images/flatironLogo.png"),
      subHeader: "Full-Stack Software Engineering Certificate",
      duration: "2020 - 2020",
      desc:
        "Immersive software engineering program with Ruby/Rails backend and JS frontend with React & Redux.",
      descBullets: [
        "Tech scholarship award, Acknowledge by Medium & Analytics Vidhya Editor",
      ],
    },
    {
      schoolName: "En·Core Co.",
      logo: require("./assets/images/encoreLogo.png"),
      subHeader: "Front-end Web Development Certificate",
      duration: "2019 - 2019",
      desc:
        "Programming course in HTML, CSS, JS, and jQuery, Training on Agile/SCRUM Workflow",
    },
    {
      schoolName: "Konyang University",
      logo: require("./assets/images/konyangLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "1997 - 2000",
      desc:
        "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Department valedictorian award, Dean's award"],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Soft Skill (collaborate and teamwork)",
      progressPercentage: "90%",
    },
  ],
  displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineering",
      company: "Flatiron School",
      companylogo: require("./assets/images/flatiron-school.gif"),
      date: "April 2020 – Present",
      desc:
        "As a recent Flatiron School graduate, I refined my previous computer science skills from the university by attending the immersive program on building and deploying projects with Ruby on Rails, ES6 Javascript, and React-Redux. I had the chance to build out and apply data structure libraries and algorithms to improve on previous projects and received comprehensive training in real-world full-stack software engineering with an emphasis on.",
      descBullets: [
        "state-of-the-art design patterns for responsive UX/UI",
        "designing RESTful APIs for headless web services",
        "engineering complex database schemas in SQLite and PostgreSQL",
        "implementing authorization functionality with JWT and Bcrypt",
        "styling with LESS, SASS and CSS frameworks like Semantic, Bulma and Bootstrap",
        "cloud-based service deployment using PaaS providers like Heroku or Firebase",
        "version control with Git CLI and Github",
      ],
    },
    {
      role: "Mortgage Loan Processor",
      company: "Genesis Home Loan",
      companylogo: require("./assets/images/genesisLogo.png"),
      date: "November 2015 – September 2017",
      descBullets: [
        "Prepared documents for underwriting by verifying client income, credit reports, and other information",
        "Set up and completed loan submission packages and meeting strict deadlines 100% of the time",
        "Worked personally with customers in a fast-paced environment. Prompt responses and resolutions to issues, and closeout 100% of loans",
      ],
    },
    {
      role: "Franchisee",
      company: "Quiznos",
      companylogo: require("./assets/images/quiznosLogo.png"),
      date: "April 2006 – July 2015",
      descBullets: [
        "Increased business with improved marketing, excellent customer service strategies, and maintaining top food quality resulting in a 25% increase in sales revenue. Recruited and developed successful operations staff to handle day-to-day business operations",
        "Maintained​ Top 5 in regional store sales throughout store operation",
        "Handled team, customer, and operations issues with professional strategies to meet business goals",
      ],
    },
    {
      role: "CPA Associate",
      company: "Dong K. Kim CPA",
      companylogo: require("./assets/images/accountingImage.jpg"),
      date: "January 2003 – April 2006",
      descBullets: [
        "Supported Certified Public Accountant with tax returns and financial statements for individuals, partnerships, and corporations.",
        "Prepared W-2 forms, quarterly payroll, and sales tax returns.",
        "Documented monthly sales reports, and consolidated monthly balance sheets, maintained and organized detailed bookkeeping of accounting records, and built friendly client relationships.",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "estherkimyunjung", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Key Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/Home1800.png"),
      projectName: "Home1800",
      projectDesc:
        "An application that allows clients to search for and review property listings and make appointments with a real estate agent after creating their user profiles. The client can also send emails with attachments and chat with an agent in real-time",
      footerLink: [
        {
          name: "Demo",
          url: "https://youtu.be/_1OqUS8ip-c",
        },
        {
          name: "Github",
          url: "https://github.com/estherkimyunjung/Home1800",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/Amazon-Clone-HomePage.png"),
      projectName: "Amazon-clone",
      projectDesc:
        "E-Commerce app (Node.js API Backend with express server framework and Axios (send asynchronous HTTP requests to REST endpoints and perform CRUD operations.), React.js(Redux, Hooks, React-router) for the Frontend, Also using HTML, CSS styled with vanilla CSS, Authentication, Database, function, and Hosting with Firebase, Payment processing with Stripe API)",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ecommerce-app-e9e30.web.app/",
        },
        {
          name: "Github",
          url: "https://github.com/estherkimyunjung/Amazon-clone",
        },
      ],
    },
    {
      image: require("./assets/images/Covid-19-Tracker-Home.png"),
      projectName: "Covid-19 TRACKER",
      projectDesc:
        "The App created Node.js backend, React JS frontend with using Open Disease Data API, CSS styled by Material UI, and Hosting by firebase.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://covid-19-tracker-by-esther.web.app",
        },
        {
          name: "Github",
          url: "https://github.com/estherkimyunjung/Covid-19_Tracker",
        },
      ],
    },
    {
      image: require("./assets/images/Estflex-HomePage.png"),
      projectName: "ESFLEX (Netflix-clone)",
      projectDesc:
        "Movie-Trailer build by React app (React, Hooks) Movie data by TMDB API, Movie Trailer by movie-trailer and react-youtube, deploy by firebase.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://esflex-clone.web.app/",
        },
        {
          name: "Github",
          url: "https://github.com/estherkimyunjung/Estflix",
        },
      ],
    },
    {
      image: require("./assets/images/Facebook-Clone-HomePage.jpg"),
      projectName: "Facebook-clone",
      projectDesc:
        "Posting images and comments on SNS (Facebook-clone app) build by Google authentication, React context API (REDUX pattern), realtime database, embed facebook feed, and deploy with firebase.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://facebookbyesther.web.app/",
        },
        {
          name: "Github",
          url: "https://github.com/estherkimyunjung/Facebook-Esther",
        },
      ],
    },
    {
      image: require("./assets/images/Airbnb-HomePage.png"),
      projectName: "Airbnb-clone",
      projectDesc:
        "Responsive booking app build by React (React Router, Hooks), Date picker, CSS styled by Material UI and add grow/shrink Animation, Hosting by firebase.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://airbnb-esther.web.app/",
        },
        {
          name: "Github",
          url: "https://github.com/estherkimyunjung/Airbnb-Esther",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "",
        },
        {
          name: "Award Letter",
          url: "",
        },
        {
          name: "Google Code-in Blog",
          url: "",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://estherkimyunjung.medium.com/powerful-regular-expression-2c7a11592b40?sk=5cf2c108ed408b3936ff08d6662fd778",
      title: "Powerful Regular Expression",
      description:
        "Regular expressions are extremely useful and work with many programming languages. This blog will help you to understand the Regex rule.",
    },
    {
      url:
        "https://estherkimyunjung.medium.com/world-belongs-to-me-through-software-engineering-a58de134967?sk=430052bed992caeeea92fb8fba16bc6c",
      title: "World Belongs to Me Through Software Engineering",
      description:
        "How a Middle-age Foreign Female is Developing Herself into a Software Engineer.",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(832) 682 5811",
  email_address: "estherkimyunjung@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "username_", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
