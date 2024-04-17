"use client";
import Banner from "@/components/banner";
import Heading from "@/components/common/heading";
import Subheading from "@/components/common/subheading";
import Header from "@/components/header";
import Resources from "@/components/resources-insights";
import StrategicAffilation from "@/components/strategic-affilation";
import Training from "@/components/training-platform";
import VideoComponent from "@/components/videocomponent";
import Whystudy from "@/components/why-study";
import React, { useRef } from "react";

export default function Home() {
  const sectionRefs = {
    about: useRef(null),
    whyStudy: useRef(null),
    company: useRef(null),
    courses: useRef(null),
    resources: useRef(null),
    // Add more refs for other sections as needed
  };

  const scrollToSection = (ref: any) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  // const Study = useRef(null);

  // const SingleRowNavigate = () => {
  //   if (Study.current) {
  //     window.scrollTo({
  //       // @ts-ignore
  //       top: Study.current.offsetTop,
  //       behavior: "smooth",
  //     });
  //   }
  // };
  return (
    <main>
      <Header scrollToSection={scrollToSection} sectionRefs={sectionRefs} />
      <Banner />
      <div ref={sectionRefs.about}>
        <VideoComponent
          source={"/assets/samrt-video.mp4"}
          poster="/assets/video-poster.png"
          para="Explore your purpose"
        />
      </div>
      {/* <Heading title="Crypto Learning Academy" titleSpan=""/>   */}

      <div ref={sectionRefs?.courses}>
        <Training subtitle="Increase your network and enable a top opportunities" />
      </div>
      <div ref={sectionRefs.whyStudy}>
        <Whystudy />
      </div>
      <div ref={sectionRefs.company}>
        <StrategicAffilation />
      </div>
      <div ref={sectionRefs?.resources}>
        <Resources />
      </div>
    </main>
  );
}
