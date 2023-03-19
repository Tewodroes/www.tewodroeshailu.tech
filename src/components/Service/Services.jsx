import React from "react";
import { FaJava } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">skills</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={FaJava}
            title={"Java Developer"}
            disc={`As a Full Stack Java Developer at MINAB IT SOLUTIONS, 
            I developed and deployed enterprise applications using 
            Java, AWS, Microservices, and other technologies while working 
            collaboratively with clients and colleagues.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FaJava}
            title={"Java Backend Developer"}
            disc={`At Supernova Technologies, 
            I led a team of 5 developers to deliver a project on time and 
            within budget. I mentored junior developers to increase their 
            productivity and code quality and managed agile workflow. `}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"Software Engineer"}
            disc={`At Securicom Advanced Technologies. I Contributed to full-stack 
            projects, designed interactive websites, provided ongoing support, 
            and used Java, JavaScript, Spring Boot, React, Hibernate, MongoDB, 
            Maven, etc..`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
