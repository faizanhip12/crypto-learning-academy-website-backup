import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer_sec}>
      <div className="container_1470">
        <div className={`row ${styles.footerRow}`}>
          <div className="col-lg-5 col-md-6 col-sm-6">
            <div className={styles.footer_logo}>
              <Link href="/">
                <Image
                  src="/assets/CLA-Black-Horizontal-01.png"
                  alt="logo"
                  width={280}
                  height={80}
                />
              </Link>
            </div>
            <div className={styles.footer_content}>
              <Link href="tel:123 456 7890">123 456 7890</Link>
              <p>Questions?</p>
              <p>
                Not affiliated with a corporation? We have learning programs
                that cater to your needs…
              </p>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className={styles.footer_links}>
              <h4>The Company</h4>
              <ul>
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#"> Why STI Works?</Link>
                </li>
                <li>
                  <Link href="#">Our History</Link>
                </li>
                <li>
                  <Link href="#">GSI Scholarship</Link>
                </li>
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className={styles.footer_links}>
              <h4>Legal</h4>
              <ul>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#">Terms</Link>
                </li>
                <li>
                  <Link href="#">Refund Policy</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className={styles.footer_links}>
              <h4>What We Do</h4>
              <ul>
                <li>
                  <Link href="#">Training Topics</Link>
                </li>
                <li>
                  <Link href="#">Learning Tracks</Link>
                </li>
                <li>
                  <Link href="#">Free Sample Courses</Link>
                </li>
                <li>
                  <Link href="#">Get Certified</Link>
                </li>
                <li>
                  <Link href="#">Courses</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className={styles.footer_bottom}>
            <p>Copyright © 2023 Crypto Learning Academy. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
