"use client";
import Container from "@/components/cards/Container";
import React from "react";
import styles from "./contacts.module.scss";
import Lottie from "lottie-react";
import Cocktail from "@/resources/animations/cocktail-drink.json";
import CalSection from "@/components/common/CalSection";

const Contact = () => {
  return (
    <>
      <Container id={"contact"} className={"contacts"}>
        <div className={styles["title"]}>
          <h3>Interested in collaborating with me?</h3>
          <p>
            I&apos;m always open to discussing product design work or
            partnership opportunities.
          </p>
        </div>
        <div className={styles["action"]}>
          <a href="mailto: khoahoang151@gmail.com">
            <button>
              <div className={styles["animation"]}>
                <Lottie animationData={Cocktail} loop={true} />
              </div>
              <p>Start a conversation</p>
            </button>
          </a>
        </div>
      </Container>
      <CalSection />
    </>
  );
};

export default Contact;


