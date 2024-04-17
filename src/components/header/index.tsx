"use client";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import Navbar from "../Navbar";
import Image from "next/image";
// import logo from "../images/Logo.png";
import Link from "next/link";
import Mainbutton from "../common/button";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Header = ({ scrollToSection, sectionRefs }: any) => {
  const [isToggled, setToggled] = useState(false);
  const [isDivVisible, setDivVisible] = useState(false);

  // useEffect(() => {
  //   if (isDivVisible) {
  //     document.body.classList.add("overflow-hidden");
  //   } else {
  //     document.body.classList.remove("overflow-hidden");
  //   }
  // }, [isDivVisible]);
  // add class on body when toggle
  useEffect(() => {
    if (isDivVisible) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isDivVisible]);

  const toggleDivVisibility = () => {
    console.log(window.innerWidth);
    if (window.innerWidth <= 991) {
      setDivVisible(!isDivVisible);
    }
  };

  const router = useRouter();
  // const [isDivVisible, setDivVisible] = useState(false);

  // const toggleDivVisibility = () => {
  //   setDivVisible(!isDivVisible);
  // };
  return (
    <header className={styles.header}>
      <div className={`container_1500 ${styles.bottomline}`}>
        <div className={`row ${styles.myRow}`}>
          <div
            onClick={toggleDivVisibility}
            className={`${styles.icon_bar} ${
              isDivVisible ? styles.icon_bar_click : ""
            }`}
          >
            <span className={styles.top_line}></span>
            <span className={styles.center_line}></span>
            <span className={styles.bottom_line}></span>
          </div>
          <div className={`col-md-2 col-6 ${styles.mobile_logo} logo`}>
            <Link href="/app">
              <Image
                src="/assets/CLA-Black-Horizontal-01.png"
                alt="logo"
                width={280}
                height={80}
              />
            </Link>
          </div>

          <div
            className={`col-lg-8 col-md-6 col-sm-6 ${styles.nav_menu} ${
              styles.mobile_menu
            } ${isDivVisible ? styles.visible : ""}`}
          >
            <div className={styles.main_menu}>
              <ul>
                <li onClick={toggleDivVisibility}>
                  <Link
                    href="javascript:void(0)"
                    onClick={() => scrollToSection(sectionRefs.about)}
                  >
                    About
                  </Link>
                </li>
                <li onClick={toggleDivVisibility}>
                  <Link
                    href="javascript:void(0)"
                    onClick={() => scrollToSection(sectionRefs.whyStudy)}
                  >
                    Why Smartchain
                  </Link>
                </li>
                <li onClick={toggleDivVisibility}>
                  <Link
                    href="javascript:void(0)"
                    onClick={() => scrollToSection(sectionRefs.company)}
                    // onClick={scrollToSection}
                  >
                    Comapny
                  </Link>
                </li>
                <li onClick={toggleDivVisibility}>
                  <Link
                    href="javascript:void(0)"
                    // onClick={scrollToSection}
                    onClick={() => scrollToSection(sectionRefs.courses)}
                  >
                    Courses
                  </Link>
                </li>
                <li onClick={toggleDivVisibility}>
                  <Link
                    href="javascript:void(0)"
                    onClick={() => scrollToSection(sectionRefs.resources)}

                    // onClick={scrollToSection}
                  >
                    Resources
                  </Link>
                </li>

                <li onClick={toggleDivVisibility} className={styles.signIn_btn}>
                  <Link href="https://cryptolearningacademy.com/login/">
                    Sign In
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={`col-md-2 d-none d-lg-block ${styles.btncol}`}>
            <div className={styles.header_btn}>
              <Link
                href="https://cryptolearningacademy.com/login/"
                className={styles.signin}
              >
                Sign in
              </Link>
              <Mainbutton
                text="Sign up"
                icon={FaArrowRight}
                variant="brown"
                url="https://cryptolearningacademy.com/signup/"
              />

              {/* <AiOutlineArrowRight /> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
