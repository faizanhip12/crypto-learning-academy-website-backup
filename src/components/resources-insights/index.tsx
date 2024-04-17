import React from "react";
import styles from "./style.module.css";
import img1 from "../../../public/assets/insight-a.png";
import img2 from "../../../public/assets/insight-b.png";
import img3 from "../../../public/assets/insight-c.png";
import Image from "next/image";
import Subheading from "../common/subheading";
import Link from "next/link";

const Resources = () => {
  const resources = [
    {
      source: img1,
      title: "10 September, 2023",
      title2: "Blockchain & Governance",
      para: "Explore how blockchain can revolutionize governance systems for better transparency.",
      button: "Learn More",
    },

    {
      source: img2,
      title: "13 September, 2023",
      title2: "Investing in DeFi",
      para: "Learn the key considerations when investing in decentralized finance projects.",
      button: "Learn More",
    },
    {
      source: img3,
      title: "15 September, 2023",
      title2: "NFTs and Digital Art",
      para: "Understand the role of NFTs in transforming the art world.",
      button: "Learn More",
    },
  ];
  return (
    <section className={styles.resources_sec}>
      <div className="container_1470">
        <Subheading title="Resources" paragraph="Latest Blogs" />
        <div className={`row ${styles.resourceRow}`}>
          {resources?.map((item, index) => {
            return (
              <>
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className={styles.gradient_border}>
                    <div className={styles.card_content}>
                      <Image src={item.source} alt="res-image" />
                      <div className={styles.text}>
                        <h5>{item.title}</h5>
                        <h3>{item.title2}</h3>
                        <p>{item.para}</p>
                      </div>
                      <div className={styles.btn_more}>
                        <Link href="#">{item.button}</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Resources;
