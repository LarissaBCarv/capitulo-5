import "./ChapterLayout.css";
import { useEffect, useState } from "react";

export default function ChapterLayout({
  chapter,
  title,
  subtitle,
  story,
  leftImage,
  rightImage,
  rightImageClass,
  singleImage,
  showHintOnly,
  hint,
  buttonText,
  onButtonClick,
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={`chapter ${visible ? "show" : ""}`}>
      <section className="chapter__content">
        <span className="chapter__edition">LIMITED EDITION</span>

        <h1 className="chapter__title">{title || `CAPÍTULO ${chapter}`}</h1>

        <div className="chapter__line"></div>

        <h2 className="chapter__subtitle">{subtitle}</h2>

        <p className="chapter__story">{story}</p>

        {showHintOnly ? (
          <p className="chapter__hint chapter__hint-final">{hint}</p>
        ) : singleImage ? (
          <div className="chapter__single-clue">
            <img
              src={singleImage}
              alt=""
              className={`chapter__photo ${rightImageClass || ""}`}
            />

            <p className="chapter__hint">{hint}</p>
          </div>
        ) : (
          <div className="chapter__clue">
            <img src={leftImage} alt="" className="chapter__photo" />

            <p className="chapter__hint">{hint}</p>

            <img
              src={rightImage}
              alt=""
              className={`chapter__photo ${rightImageClass || ""}`}
            />
          </div>
        )}

        {buttonText && (
          <button className="chapter__button" onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
      </section>
    </main>
  );
}
