"use client";
import { useRef, useState } from "react";
import styles from "./style.module.css";
import Image from "next/image";

interface IVideoComponent {
  source: string | any;
  poster?: string | any;
  para?: string | any;
}

const VideoComponent = (props: IVideoComponent) => {
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
      <section className={styles.video_sec}>
        <div className={`container_1470`}>
          <video
            ref={videoRef}
            loop
            controls
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50px",
            }}
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
                  width={280}
                  height={80}
                />
              ) : (
                ""
              )}
            </button>
            <p className={styles.para}>{props.para}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoComponent;
