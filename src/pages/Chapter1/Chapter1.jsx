import "./Chapter1.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Chapter1() {
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={`chapter1 ${visible ? "show" : ""}`}>
      <section className="chapter1__content">
        <span className="chapter1__edition">LIMITED EDITION</span>

        <h1 className="chapter1__title">CAPÍTULO 1</h1>

        <div className="chapter1__line"></div>

        <h2 className="chapter1__subtitle">
          UM NOVO LUGAR
          <br />E UMA HISTÓRIA QUE AINDA NEM EXISTIA.
        </h2>

        <p className="chapter1__story">
          Antes dos abraços.
          <br />
          Antes dos beijos.
          <br />
          Antes de nós.
          <br />
          <br />
          Existia apenas um lugar...
          <br />
          e duas pessoas que ainda
          <br />
          não imaginavam o que
          <br />
          o futuro estava preparando.
          <br />
          <br />
          Encontre onde tudo começou.
        </p>

        <div className="chapter1__footer">
          <img src="/images/ana1.png" alt="" className="chapter1__photo" />

          <button
            className="chapter1__button"
            onClick={() => navigate("/scanner")}
          >
            ABRIR LEITOR
          </button>

          <img src="/images/larissa1.png" alt="" className="chapter1__photo" />
        </div>
      </section>
    </main>
  );
}
