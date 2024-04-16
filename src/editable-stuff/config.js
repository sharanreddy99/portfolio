// Navigation Bar SECTION
const navBar = {
  show: true,
};

const backendBaseURL = "https://deployer.sharankonda.com";
const hostedURL = "http://project.sharankonda.com";

// Main Body SECTION
const mainBody = {
  gradientColors: "#000000, #00000f, #000000, #000000, #000000, #000000",
  firstName: "Sharan",
  middleName: "Sai Reddy",
  lastName: "Konda",
  message: " Passionate about changing the world with technology.",
  icons: [
    {
      image: "fab fa-github",
      url: "https://github.com/sharanreddy99",
    },
    {
      image: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/sharan-konda-90b3a6193",
    },
    {
      image: "fab fa-instagram",
      url: "https://www.instagram.com/sharan_konda/",
    },
    {
      image: "fas fa-code",
      url: "https://www.leetcode.com/sharanreddy/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/profile.jpg"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profile.jpg"),
  imageSize: () => {
    if (window.innerWidth < 576) {
      return 250;
    } else if (window.innerWidth < 768) {
      return 280;
    } else if (window.innerWidth < 992) {
      return 320;
    } else {
      return 375;
    }
  },
  message:
    "I'm Sharan, and I'd describe myself as someone who enjoys tinkering with scripts. I'm a self-motivated individual who takes the 'Don't Repeat Yourself' (DRY) principle to heart. I have a penchant for automating even the most minor tasks to minimize manual effort.I come with a wealth of experience as a software developer, specializing in building and maintaining web applications. My foundation in computer science is robust, and I'm proficient in various programming languages and frameworks, including Golang, Python, Java, ReactJS, and Angular. I'm well-versed in containerizing applications and managing distributed version control systems. I also have a solid grasp of design patterns, adhere to SOLID principles, and am adept at utilizing AWS services. I'm passionate about keeping abreast of the latest developments in technology and best practices in the field. I'm actively seeking new opportunities to apply my skills and continue my journey of learning and growth as a developer.",
  resume: "https://www.sharankonda.com/SharanSaiReddy_Konda.pdf",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  repoURL: `${backendBaseURL}/v1/github/getReposList/`,
  langugagesURL: `${backendBaseURL}/v1/github/getLanguagesList/`,
  deployURL: `${backendBaseURL}/v1/aws/publishSNS`,
  hostedURL: hostedURL,
  heading: "Projects",
  gitHubUsername: "sharanreddy99",
  reposLength: 10,
  specificRepos: [],
};

const projectCredentials = {
  ceta: `<div class="mb-3">
    Faculty Email: <b>prasad@gmail.com</b><br/>
    Faculty Password: <b>Prasad@99</b><br/>
    <hr/>
    Student Roll Number: <b>17881A05G6</b></br>
    Student Password: <b>Sharan@123</b></br>
  </div>`,
  housemate: `<div class="mb-3">
    Email: <b>sharan.personal.projects@gmail.com</b><br/>
    Faculty Password: <b>Sharan@99</b><br/>
    <hr/>
  </div>`,
  securechat:
    "<b> Please sign in using your gmail account inorder to access the application.</b>",
  elevator_multithreading:
    "<b> No credentials are required for this application. </b>",
  image_slideshow: "<b> No credentials are required for this application. </b>",
  polls_viewer: "<b> No credentials are required for this application. </b>",
  walmart_order_parser:
    "<b> No credentials are required for this application. </b>",
  dbms_algos: "<b> Password: sharanreddy </b>",
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Certifications",
  messageArr: [
    {
      label: "AWS Certified Solutions Architect - Associate",
      data: `
          <ul>
            <li className="lead">Highly skilled in various AWS Services, including but not limited to services offered in the areas of compute, storage, database, networking and content delivery, security and identity management.</li>
            <li className="lead">Ability to design robust and scalable architectures that meet the specific needs of a given application while adopting the best practices.</li>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.credly.com/badges/6bfbeb13-dace-4d93-b14a-287b56fe53aa/linked_in_profile"
                className="btn btn-outline-secondary mx-2"
              >
              Credentials:
              </a>
            </ul>`,
      credentials:
        "https://www.credly.com/badges/6bfbeb13-dace-4d93-b14a-287b56fe53aa/linked_in_profile",
    },
    {
      label: "Microsoft Certified: Azure Data Engineer Associate",
      data: `
          <ul>
            <li className="lead">deep expertise in a range of Azure data services, including Azure Data Factory, Synapse Analytics, Data Lake Storage Gen2, Databricks.</li>
            <li className="lead">Proficient in designing and implementing robust, scalable data solutions that ensure efficient data management, processing, and security.</li>
            <li className="lead">Demonstrates a strong ability to leverage Azure's comprehensive suite of data services to build resilient architectures that cater to complex data workflows, optimize performance, and adhere to best practices in data governance and compliance.</li>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://learn.microsoft.com/api/credentials/share/en-us/SharanSaiKonda-2095/F240BC29AFD71C97?sharingId=C707F11359781231"
                className="btn btn-outline-secondary mx-2"
              >
              Credentials:
              </a>
            </ul>`,
      credentials:
        "https://learn.microsoft.com/api/credentials/share/en-us/SharanSaiKonda-2095/F240BC29AFD71C97?sharingId=C707F11359781231",
    },
    {
      label: "Docker and Kubernetes - Complete Guide",
      data: `<ul>
            <li className="lead">Highly skilled in containerizing projects built using various technologies and stacks and can seamlessly containerize applications into production ready services while ensuring efficiency and speed.</li>
            <li className="lead">Ability to orchestrate multi-container applications and manage their dependencies using docker compose.</li>
            <li className="lead">Proficient in building applications using microservice architecture and containerizing them to seamlessly deploy them. Access  
            <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/sharanreddy99"
                className="btn btn-outline-secondary mx-2"
              >
                <i className="fab fa-github" /> Github
              </a> to check out various containerized applications
            </li>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.udemy.com/certificate/UC-9a3e79df-5410-4b31-b365-3206f01be277/"
                className="btn btn-outline-secondary mx-2"
              >
              Credentials:
              </a>
          </ul>`,
      credentials:
        "https://www.udemy.com/certificate/UC-9a3e79df-5410-4b31-b365-3206f01be277/",
    },
  ],
  images: [
    {
      img: require("../editable-stuff/aws_saa3.png"),
      label: "",
      paragraph: "",
    },
    {
      img: require("../editable-stuff/azure_de.png"),
      label: "",
      paragraph: "",
    },
    {
      img: require("../editable-stuff/docker_kubernetes.png"),
      label: "",
      paragraph: "",
    },
  ],
  imageSize: {
    width: () => {
      if (window.innerWidth < 768) {
        return 400;
      } else {
        return 615;
      }
    },
    height: () => {
      if (window.innerWidth < 768) {
        return 350;
      } else {
        return 450;
      }
    },
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  defaultKey: "programming-languages",
  skills: [
    {
      eventKey: "programming-languages",
      title: "Programming Languages",
      data: [
        { name: "Python", value: 100 },
        { name: "Golang", value: 85 },
        { name: "JavaScript", value: 95 },
        { name: "Java", value: 90 },
        { name: "C/C++", value: 60 },
        { name: "TypeScript", value: 80 },
        { name: "PHP", value: 90 },
      ],
    },
    {
      eventKey: "tech-frameworks",
      title: "Technologies and Frameworks",
      data: [
        { name: "HTML5", value: 95 },
        { name: "CSS3", value: 95 },
        { name: "NodeJS", value: 100 },
        { name: "SQL", value: 95 },
        { name: "NOSQL", value: 75 },
        { name: "React", value: 100 },
        { name: "Angular", value: 70 },
        { name: "Flask", value: 90 },
      ],
    },
    {
      eventKey: "industry-knowledge",
      title: "Industry Knowledge",
      data: [
        { name: "AWS", value: 95 },
        { name: "Azure", value: 90 },
        { name: "Data Structures and Algorithms", value: 80 },
        { name: "Operating Systems", value: 90 },
        { name: "Computer Networks", value: 80 },
        { name: "Design Patterns", value: 90 },
        { name: "Docker", value: 90 },
        { name: "Kubernetes", value: 70 },
        { name: "Databricks", value: 90 },
        { name: "Git", value: 90 },
      ],
    },
    {
      eventKey: "soft-skills",
      title: "Soft skills",
      data: [
        { name: "Communication Skills", value: 85 },
        { name: "Goal-Oriented", value: 90 },
        { name: "Collaboration", value: 100 },
        { name: "Positivity", value: 95 },
        { name: "Adaptability", value: 95 },
        { name: "Problem Solving", value: 100 },
        { name: "Organization", value: 90 },
        { name: "Creativity", value: 90 },
      ],
    },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I have a strong enthusiasm for creating scalable and easily maintainable applications using the latest technologies. Currently, I am actively seeking opportunities in the fields of Software Development and DevOps. If you are aware of any open positions, have inquiries, or simply want to connect and say hello, please don't hesitate to get in touch with me!",

  contact: {
    icons: [
      {
        image: "fa fa-phone fa-2x socialicons",
        href: "tel:+1-3523289198",
        label: "+1 (352) 328-9198",
        isBreak: false,
      },
      {
        image: "fa fa-envelope fa-2x socialicons",
        href: "mailto:sharansaikonda99@gmail.com",
        label: "sharansaikonda99@gmail.com",
        isBreak: false,
      },
      {
        image: "fab fa-linkedin fa-2x socialicons",
        href: "https://www.linkedin.com/in/sharan-konda-90b3a6193/",
        label: "sharan-konda",
        isBreak: false,
      },
      {
        image: "fab fa-instagram fa-2x socialicons",
        href: "https://www.instagram.com/sharan_konda/",
        label: "sharan_konda",
        isBreak: false,
      },
      {
        image: "fas fa-code fa-2x socialicons",
        href: "https://leetcode.com/sharanreddy/",
        label: "sharanreddy",
        isBreak: false,
      },
    ],
  },
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "Software Engineer - II", // Here Add Company Name
      companylogo:
        "https://www.finsmes.com/wp-content/uploads/2021/09/sureify.jpg",
      date: "April 2022 – December 2022",
      description: `
      <ul className="list-group">
      <li className="list-group-item">Engineered and deployed a Python script to facilitate seamless data transfer and environment synchronization across multiple stages, enhancing operational efficiency and data integrity of a system supporting 300k active users.</li>
      <li className="list-group-item">Architected and developed a sophisticated application to augment the user interface of an API wrapper micro-service, achieving a 90% reduction in configuration creation and management overhead.</li>
      <li className="list-group-item">Enhanced Docker scripts to integrate an automated documentation micro-service, enabling real-time retrieval and serving of the latest documentation generated by backend services, thereby improving content accessibility and system responsiveness.</li>
      </ul>
      `,
    },
    {
      role: "Software Engineer - I",
      companylogo:
        "https://www.finsmes.com/wp-content/uploads/2021/09/sureify.jpg",
      date: "December 2020 – March 2022",
      description: `
      <ul className="list-group">
      <li className="list-group-item">Optimized SQL database queries for high-volume email transaction system, reducing cron job processing times by 40% and enhancing reliability for 150k  scheduled emails daily. </li>
      <li className="list-group-item">Improved session validation procedures, cutting down response times by 45% without impacting backward compatibility for 100k users.</li>
      <li className="list-group-item">Revamped the entire API Wrapper Microservice, transitioning from synchronous to asynchronous API calls to mitigate high latency issues, achieving a 70% reduction in response times for processing over 850K API requests daily.</li>
      <li className="list-group-item">Refined data mappings and API integration for a dynamic, database-driven UI, ensuring efficient and accurate data utilization for customer interfaces.</li>
      <li className="list-group-item">Configured debugging tools for Dockerized micro-services, reducing diagnostic time by 75% and increasing development efficiency.</li>`,
    },
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
  projectCredentials,
};
