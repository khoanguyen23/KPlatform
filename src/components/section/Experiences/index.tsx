import Container from "@/components/cards/Container";
import React from "react";
import ContainerStyles from "../../../components/cards/Container/container.module.scss";
import styles from "./experiences.module.scss";
import Experience from "@/components/cards/Experience";
import getAllExperiences from "@/lib/experience";

const Experiences = () => {
  const experiences = getAllExperiences();
  return (
    <Container id={"experiences"} className={"experiences"}>
      <div className={ContainerStyles.title}>
        <h2>{"<Experiences/>"}</h2>
        <hr />
      </div>
      <div className={styles["experiences-list"]}>
        {experiences.map((experience, index) => (
          <Experience key={index} experience={experience} />
        ))}
      </div>
    </Container>
  );
};

export default Experiences;
