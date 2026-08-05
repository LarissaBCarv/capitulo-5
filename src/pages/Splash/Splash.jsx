import "./Splash.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Splash() {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  const title = "CAPÍTULO 5";

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 4800);

    const navigateTimer = setTimeout(() => {
      navigate("/login");
    }, 5600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(navigateTimer);
    };
  }, [navigate]);

  return (
    <main className={`splash ${fadeOut ? "fade-out" : ""}`}>
      <div className="background-glow"></div>

      <div className="content">
        <h1 className="title">
          {title.split("").map((letter, index) => (
            <span
              key={index}
              className="letter"
              style={{
                animationDelay: `${1 + index * 0.15}s`,
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h1>

        <div className="line"></div>

        <img src="/images/eyes.png" alt="Capítulo 5" className="eye" />
      </div>
    </main>
  );
}

export default Splash;
