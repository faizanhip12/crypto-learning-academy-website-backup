"use client";
import React, { useRef, useState } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import Mainbutton from "../common/button";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// import '';

const Banner = () => {
  return (
    <section className={styles.banner_section}>
      <div className={`container_1500`}>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className={styles.banner_content}>
              <h1>
                Join Crypto Learning Academy to enable your institution to unlock
                new revenue streams through crypto education.
              </h1>
              <div className={styles.banner_btn}>
                <Mainbutton
                  text="Sign up"
                  icon={FaArrowRight}
                  variant="brown"
                  url="https://cryptolearningacademy.com/signup/"
                />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.banner_content}>
              <h1>
                Join Crypto Learning Academy to enable your institution to unlock
                new revenue streams through crypto education.
              </h1>
              <div className={styles.banner_btn}>
                <Mainbutton
                  text="Sign up"
                  icon={FaArrowRight}
                  variant="brown"
                  url="https://cryptolearningacademy.com/signup/"
                />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.banner_content}>
              <h1>
                Join Crypto Learning Academy to enable your institution to unlock
                new revenue streams through crypto education.
              </h1>
              <div className={styles.banner_btn}>
                <Mainbutton
                  text="Sign up"
                  icon={FaArrowRight}
                  variant="brown"
                  url="https://cryptolearningacademy.com/signup/"
                />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.banner_content}>
              <h1>
                Join Crypto Learning Academy to enable your institution to unlock
                new revenue streams through crypto education.
              </h1>
              <div className={styles.banner_btn}>
                <Mainbutton
                  text="Sign up"
                  icon={FaArrowRight}
                  variant="brown"
                  url="https://cryptolearningacademy.com/signup/"
                />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.banner_content}>
              <h1>
                Join Crypto Learning Academy to enable your institution to unlock
                new revenue streams through crypto education.
              </h1>
              <div className={styles.banner_btn}>
                <Mainbutton
                  text="Sign up"
                  icon={FaArrowRight}
                  variant="brown"
                  url="https://cryptolearningacademy.com/signup/"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;
