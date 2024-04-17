import React, { useRef } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import Subheading from "../common/subheading";

const Whystudy = (props: any) => {
  const arrayofobject = [
    {
      text: "World-Class Teachers",
      para: "Our instructors are industry veterans who bring practical insights into theoretical learning.",
      image: "/assets/teacher.png",
    },

    {
      text: "Flexible Timings",
      para: "Access our courses 24/7—learn when you want, where you want.",
      image: "/assets/timing.png",
    },
    {
      text: "Top-Notch Courses",
      para: "We offer a curriculum developed by experts, designed to empower you in your career.",
      image: "/assets/course.png",
    },
  ];
  return (
    <section id="study" className={styles.whystudy}>
      <div className="container_1470">
        <Subheading
          title="Why Study With Us?"
          paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <div className={`row ${styles.studyRow}`}>
          {arrayofobject.map((items, i) => {
            return (
              <div
                className={`col-lg-4 col-md-6 col-sm-6 ${styles.studyCol}`}
                key={i}
              >
                <div className={styles.cardShadow}>
                  <div className={styles.cardBox}>
                    <Image
                      src={items.image}
                      height={100}
                      width={100}
                      alt="icon"
                    />
                    <h3 className={styles.boxText}>{items.text}</h3>
                    <p className={styles.boxPara}>{items.para}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Whystudy;
