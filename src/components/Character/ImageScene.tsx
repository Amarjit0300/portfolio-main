import { useEffect } from "react";
import { useLoading } from "../../context/LoadingProvider";
import { setProgress } from "../Loading";
import { setImageCharTimeline, setAllTimeline } from "../utils/GsapScroll";
import "./styles/Character.css";

const ImageScene = () => {
  const { setLoading } = useLoading();

  useEffect(() => {
    const progress = setProgress((value: number) => setLoading(value));
    progress.loaded().then(() => {
      setTimeout(() => {
        setImageCharTimeline();
        setAllTimeline();
      }, 1500);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="character-container">
      <div className="character-image-wrapper character-loaded">
        <div className="character-rim"></div>
        <img src="/images/character.JPG" alt="Profile" className="character-img" />
      </div>
    </div>
  );
};

export default ImageScene;
