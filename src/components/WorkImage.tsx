import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  images: string[];
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const [intervalId, setIntervalId] = useState<any>(null);

  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      try {
        const response = await fetch(`src/assets/${props.video}`);
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        setVideo(blobUrl);
      } catch (err) {
        // Silent error for video
      }
    }

    if (props.images && props.images.length > 1) {
      const id = window.setInterval(() => {
        setCurrentImgIndex((prev) => (prev + 1) % props.images.length);
      }, 1000);
      setIntervalId(id);
    }
  };

  const handleMouseLeave = () => {
    setIsVideo(false);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    setCurrentImgIndex(0);
  };

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        target="_blank"
        data-cursor={"disable"}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        <img src={props.images[currentImgIndex]} alt={props.alt} />
        {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
      </a>
    </div>
  );
};

export default WorkImage;
