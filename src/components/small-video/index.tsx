"use client";
import { useRef, useState } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import playBtn from "../../assets/playBtn.png";

interface IVideoComponent {
  source: string | any;
  poster?: string | any;
  para?: string | any;
  //   videotxt?: string | any;
}

const SmallVideo = (props: IVideoComponent) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  return (
    <>
      <div className={styles.video_card}>
        <video
          ref={videoRef}
          loop
          controls
          poster={props.poster}
          onPlay={handleVideoPlay}
          onPause={handleVideoPause}
        >
          <source src={props.source} type="video/mp4" />
        </video>

        <div className={styles.video_content}>
          <button onClick={handleVideoClick} className={styles.playBtn}>
            {!isPlaying ? (
              <Image
                src="/assets/playbtn.png"
                alt="playbtn"
                width={80}
                height={80}
              />
            ) : (
              ""
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default SmallVideo;
