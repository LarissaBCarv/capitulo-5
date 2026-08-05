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

        {singleImage ? (
          <div className="chapter__single-image">
            <img
              src={singleImage}
              alt=""
              className={`chapter__photo ${rightImageClass || ""}`}
            />
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

        {singleImage && <p className="chapter__hint">{hint}</p>}

        <button className="chapter__button" onClick={onButtonClick}>
          {buttonText}
        </button>
      </section>
    </main>
  );
}
