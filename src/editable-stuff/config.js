// Navigation Bar SECTION
const navBar = {
  show: true,
};

const backendBaseURL = "http://project.sharankonda.com:8080";
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
  imageSize: 375,
  message:
    "My name is Sharan. I would like to describe myself as someone who likes to play around with scripts. Self-motivated individual who takes the DRY principle seriously. Likes to automate even the smallest jobs and minimize the manual effort applied.I am an experienced software developer with a strong background in building and maintaining web applications, well versed in the computer science fundamentals and skilled in a variety of programming languages and frameworks, including Golang, Python, Java, ReactJS, Angular. Strong knowledge in containerizing applications and distributed version control along with good understanding of the Design patterns, SOLID principles and services offered by AWS. Passionate about staying up-to-date with the latest development technologies and practices. Seeking new opportunities to apply my skills and continue learning and growing as a developer.",
  resume:
    "https://docs.google.com/document/d/1HnA4fEmG8ALQyRdLEmtG9HzyRpkXxn-A/edit?usp=sharing&ouid=110707707509522259480&rtpof=true&sd=true",
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

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Certifications",
  messageArr: [
    {
      label: "AWS Certified Solitions Architect - Associate",
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
      img: require("../editable-stuff/docker_kubernetes.png"),
      label: "",
      paragraph: "",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
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
        { name: "Django", value: 70 },
      ],
    },
    {
      eventKey: "industry-knowledge",
      title: "Industry Knowledge",
      data: [
        { name: "AWS", value: 95 },
        { name: "Data Structures and Algorithms", value: 80 },
        { name: "Operating Systems", value: 90 },
        { name: "Computer Networks", value: 80 },
        { name: "Design Patterns", value: 90 },
        { name: "Docker", value: 90 },
        { name: "Kubernetes", value: 70 },
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
    "With the passion for building scalable and maintainable applications using cutting edge technologies, I'm currently looking for opportunites in the areas of Software Development and Devops! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to reach out to me!",

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
        isBreak: true,
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
      role: "Software Engineer", // Here Add Company Name
      companylogo:
        "https://www.finsmes.com/wp-content/uploads/2021/09/sureify.jpg",
      date: "June 2021 – December 2022",
      description: `
      <ul className="list-group">
      <li className="list-group-item">Developed a Python script which helps in moving the data mappings among different environments seamlessly.</li>
      <li className="list-group-item">Built a full fledged react web application which provides a much better user interface for the API wrapper microservice.</li>
      <li className="list-group-item">Updated the docker script to allow the documentation microservice to automatically fetch the latest docs generated by other backend services and serve those files. </li>
      <li className="list-group-item">Delivered Lifetime Service and Lifetime Engage products to one of the major US based insurance carrier.</li>
      <li className="list-group-item">Significantly reduce the time taken by a cron service which processes the transactional mails and cancels the scheduled mails. </l1>
      <li className="list-group-item">Reduce the session validation time significantly by adopting a different validation approach without any backward compatibility issues in the product.</li>
      <li className="list-group-item">Carefully analyze and prepare data mappings to format the external API responses effectively to support database driven user interface.</li>
      </ul>
      `,
    },
    {
      role: "Software Engineer Intern",
      companylogo:
        "https://www.finsmes.com/wp-content/uploads/2021/09/sureify.jpg",
      date: "December 2020 – May 2021",
      description: `
      <ul className="list-group">
      <li className="list-group-item"> Developed an image viewer application with added support for exception handling, logging HTTP requests and authorization using JWT tokens. </li>
      <li className="list-group-item">Written unit tests for a project involving microservices with an extensive coverage of 98%.</li>
      <li className="list-group-item">Researched about setting up debuggers for containerized applications and set it up for a few microservices.</li>`,
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
};
