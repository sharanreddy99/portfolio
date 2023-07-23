import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
// const gitHubQuery = "/repos?sort=updated&direction=desc";
// const specficQuerry = "https://api.github.com/repos/hashirshoaeb/";

const Project = ({
  heading,
  username,
  length,
  specfic,
  repoURL,
  deployURL,
  hostedURL,
  languagesURL,
}) => {
  const dummyProjectsArr = new Array(length + specfic.length).fill(
    dummyProject
  );

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    let langList = [];
    try {
      // getting all repos
      const response1 = await axios.get(repoURL);
      const response2 = await axios.get(languagesURL);
      // slicing to the length
      repoList = [...response1.data.slice(0, length)];
      langList = [...response2.data.slice(0, length)];
      for (let i = 0; i < repoList.length; i++) {
        for (let j = 0; j < langList.length; j++) {
          if (repoList[i]["name"] === langList[j]["name"]) {
            repoList[i]["languages"] = langList[j]["data"];
          }
        }
      }
      setProjectsArray(repoList);
    } catch (error) {
      console.error(error.message);
    }
  }, [repoURL, length]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {projectsArray.length
            ? projectsArray.map((project, index) => (
                <ProjectCard
                  key={`project-card-${index}`}
                  id={`project-card-${index}`}
                  value={project}
                  deployURL={deployURL}
                  hostedURL={hostedURL}
                />
              ))
            : dummyProjectsArr.map((project, index) => (
                <ProjectCard
                  key={`dummy-${index}`}
                  id={`dummy-${index}`}
                  value={project}
                />
              ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
