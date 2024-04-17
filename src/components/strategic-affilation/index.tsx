import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import Heading from "../common/heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const StrategicAffilation = () => {
  return (
    <section className={styles.affilation}>
      <div className="container_1470">
        <Heading
          className="text-center"
          title="Strategic Affiliation"
          gradienttext="Crypto Learning Academy"
        />
        <div className={styles.flex_images}>
          <Swiper
            spaceBetween={5}
            slidesPerView={3}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            modules={[Pagination]}
            className="strategicAffiliation"
          >
            <SwiperSlide>
              <Image
                src="/assets/sponsors-a.png"
                height={73}
                width={270}
                alt="icon"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/sponsors-b1.png"
                height={73}
                width={446}
                alt="icon"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/sponsors-c1.png"
                height={73}
                width={215}
                alt="icon"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/sponsors-a.png"
                height={73}
                width={270}
                alt="icon"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/sponsors-b1.png"
                height={73}
                width={446}
                alt="icon"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/sponsors-c1.png"
                height={73}
                width={215}
                alt="icon"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default StrategicAffilation;
