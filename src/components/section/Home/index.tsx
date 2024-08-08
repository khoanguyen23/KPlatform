import React from "react";
import styles from "./home.module.scss";
import Image from "next/image";
import Container from "@/components/cards/Container";

const Home = () => {
  const images = [
    "/image/sun1.jpg",
    "/image/sun2.jpg",
    "/image/sun3.jpg",
    "/image/sun4.jpg",
    "/image/sun5.jpg",
    "/image/sun6.JPG",
    "/image/sun7.JPG",
    "/image/sun1.jpg",
    "/image/sun2.jpg",
    "/image/sun3.jpg",
    "/image/sun4.jpg",
    "/image/sun5.jpg",
    "/image/sun6.JPG",
    "/image/sun7.JPG",
  ];

  return (
    <Container id={"home"} className={"home"}>
      <div className={styles["home-container"]}>
        <div className={styles.status}>
          <div className={styles["status-circle"]}></div>
          Online.
        </div>
        <div className="relative w-full h-1">
          <div className="avatar w-28 h-28  rounded-full object-cover overflow-hidden absolute right-0">
            <Image
              src={"/image/avt-1.jpg"}
              alt={""}
              width={0}
              height={0}
              className="w-full h-full object-cover object-left-top"
              sizes="20vw"
            />
          </div>
        </div>
        <div className={styles.introduction}>
          Hey, I&apos;m Khoa
          <div className={styles.occupation}>Front-end Developer</div>
        </div>

        <div className={styles.contacts}>
          <a href="" target="_blank" className={styles["resume-button"]}>
            {/* <Image src={Resume} alt={'GitHub'} className={styles.icon} width={20} height={20}/> */}
            <div className={styles.label}>Resume</div>
          </a>
          <a
            href="https://github.com/khoanguyen23"
            target="_blank"
            className={styles.links}
          >
            {/* <Image src={GitHub} alt={'GitHub'} className={styles.icon} width={20} height={20}/> */}
            <div className={styles.label}>GitHub</div>
          </a>
          <a href="" target="_blank" className={styles.links}>
            {/* <Image src={LinkedIn} alt={'LinkedIn'} className={styles.icon} width={18} height={18}/> */}
            <div className={styles.label}>LinkedIn</div>
          </a>
          <a href="mailto: khoahoang151@gmail.com" className={styles.links}>
            {/* <Image src={Mail} alt={'Mail'} className={styles.icon} width={22} height={22}/> */}
            <div className={styles.label}>Mail</div>
          </a>
        </div>
        <hr className={styles.divider} />
        <div className={styles.summery}>
          <p>
            My name is Nguyen Hoang Khoa. ​ I am a four-year student at Ho Chi
            Minh City University of Information and Communications. ​ I
            specialize in <b>Web Developement</b> and am good at{" "}
            <b>Front-end</b>. I always want to learn more about new technologies
            that are updated every day.
          </p>
          <br />
          <p>
            <b>📌 The more knowledge you have, the more confident you become</b>
          </p>
          {/* <br /> */}
          {/* <p>
            Currently, I&apos;m working as <b>Software Engineer</b> at MISUMI
            Group Inc.
          </p> */}
          <br />
          <p>
            When I&apos;m not coding, I usually play sports with friends and go
            somewhere in the city to relax my mind.
          </p>
          <br />
          <p>
            To improve myself, I participated in extracurricular activities. I
            won the Ideathon <b>Sun* Be The Change 2022</b>. Through the
            competition, I learned that it is very important not only to learn
            IT, but also to have the ability to find and solve problems.
          </p>
          <br />
          {/* <div className="w-full space-y-2">
            <Image
              src="/image/sun1.jpg"
              alt=""
              width={0}
              height={0}
              className="w-full h-full object-cover rounded-md"
              sizes="100vw"
            />
          </div> */}
          <div className="flex overflow-hidden">
            <div className="relative img-animate">
              {images.map((src, index) => (
                <div key={index} className="w-[440px] px-[10px]">
                  <Image
                    src={src}
                    alt={`image-${index}`}
                    width={0}
                    height={0}
                    className="w-full h-[400px] object-cover rounded-md"
                    sizes="100vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
