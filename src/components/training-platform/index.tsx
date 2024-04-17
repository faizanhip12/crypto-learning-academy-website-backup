import React from "react";
import styles from "./style.module.css";
import SmallVideo from "../small-video";
import poster1 from "../../../public/assets/academic-a.png";
import poster2 from "../../../public/assets/academic-b.png";
import poster3 from "../../../public/assets/academic-c.png";
import Heading from "../common/heading";

interface IProps {
  subtitle?: string;
}
const Training = (props: IProps) => {
  const video = [
    {
      source:
        "https://res.cloudinary.com/dairwfrpv/video/upload/v1685120417/ecom-empire/aboutvid-compresed_jlcmsk.mp4",
      poster: poster1,
      title: "Crypto Basics 101",
    },
    {
      source:
        "https://res.cloudinary.com/dairwfrpv/video/upload/v1685120417/ecom-empire/aboutvid-compresed_jlcmsk.mp4",
      poster: poster2,
      title: "Blockchain for Business",
    },
    {
      source:
        "https://res.cloudinary.com/dairwfrpv/video/upload/v1685120417/ecom-empire/aboutvid-compresed_jlcmsk.mp4",
      poster: poster3,
      title: "Advanced Trading Strategies",
    },

    {
      source:
        "https://res.cloudinary.com/dairwfrpv/video/upload/v1685120417/ecom-empire/aboutvid-compresed_jlcmsk.mp4",
      poster: poster1,
      title: "DeFi Explained",
    },
    {
      source:
        "https://res.cloudinary.com/dairwfrpv/video/upload/v1685120417/ecom-empire/aboutvid-compresed_jlcmsk.mp4",
      poster: poster2,
      title: "NFT Fundamentals",
    },
    {
      source:
        "https://res.cloudinary.com/dairwfrpv/video/upload/v1685120417/ecom-empire/aboutvid-compresed_jlcmsk.mp4",
      poster: poster3,
      title: "The Future of Blockchain Technology",
    },
  ];

  return (
    <section className={styles.training_sec}>
      <div className="container_1470">
        <Heading
          TextAlignment="left"
          title="Training Platform"
          gradienttext="Crypto Learning Academy"
        />
        <div className="row">
          {video?.map((video, index) => {
            return (
              <>
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className={styles.gradient_border}>
                    <div className={styles.video_box}>
                      <SmallVideo
                        source={video?.source}
                        poster={video?.poster.src}
                      />
                      <div className={styles.text}>
                        <h5>{video?.title}</h5>
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

export default Training;
