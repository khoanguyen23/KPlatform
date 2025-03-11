"use client";
import React from "react";
import styles from "./home.module.scss";
import Image from "next/image";
import Container from "@/components/cards/Container";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const getTrips = () => {
    router.push("/my-destination");
  };

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
          Graduated.
        </div>
        <div className="relative w-full h-1">
          <div className="avatar w-28 h-28  rounded-md object-cover overflow-hidden absolute right-0">
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
          {/* <div className={styles.occupation}>Front-end Developer</div> */}
          <div className="text-5xl mt-2 bg-gradient-to-br from-orange-300  via-red-500 to-rose-300 bg-clip-text text-transparent">
            Front-end Developer
          </div>
        </div>

        <div className={styles.contacts}>
          <a
            href="https://drive.google.com/file/d/1p26SrbXyR9OsII6JRjNjMPyP__DDTnbh/view"
            target="_blank"
            className={styles["resume-button"]}
          >
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
            <b className="!text-pink-400">A little about me</b>: Life steered me into IT, though honestly,
            I&apos;ve always been more drawn to business than coding.
          </p>
          <br />
          <p>
            That said, I&apos;ve come to find coding pretty fascinating. I love
            keeping up with and exploring <b className="!text-blue-500">new technologies</b> every day.
          </p>

          <br />
          {/* <p>
            <b>📌 The more knowledge you have, the more confident you become</b>
          </p>
          <br /> */}
          <p>
            Currently, I&apos;m working as <b className="!text-green-400">Software Engineer</b> at MISUMI
            Group Inc.
          </p>
          <br />

          <p>
            Besides that, I love traveling and photography. I could spend an
            entire day capturing amazing shots.
          </p>
          <div className="mt-4">
            <Button
            variant="outline"
            // variant="ghost"
              onClick={getTrips}
              className="font-bold hover:bg-red-400 hover:text-white"
            >
              See the photos I have taken 👉
            </Button>
          </div>
          {/* <br /> */}
          {/* <div className="relative inline-flex group">
            <div className="absolute transitiona-all duration-1000 opacity-0 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-60 group-hover:-inset-1 group-hover:duration-600 animate-tilt"></div>
            <a
              href="#"
              title="Get quote now"
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              See the photos I have taken 👉
            </a>
          </div> */}
          {/* <br /> */}
          <p className="mt-4">
            To improve myself, I participated in extracurricular activities. I
            won the Ideathon <b className="!text-orange-500">Sun* Be The Change 2022</b>. Through the
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
