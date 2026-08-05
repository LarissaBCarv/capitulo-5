import "./Intro.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Intro() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={`intro ${visible ? "show" : ""}`}>
      <div className="intro__content">
        <span className="intro__edition">LIMITED EDITION</span>

        <h1 className="intro__title">CAPÍTULO 5</h1>

        <div className="intro__line"></div>

        <p className="intro__text">
          ALGUMAS HISTÓRIAS
          <br />
          NÃO SÃO LIDAS,
          <br />
          SÃO DESCOBERTAS.
          <br />
          <br />
          VOCÊ ESTÁ PRESTES
          <br />
          A EMBARCAR EM UM
          <br />
          PEQUENO JOGO
          <br />
          BASEADO NA NOSSA
          <br />
          HISTÓRIA.
          <br />
          <br />
          O JOGO COMEÇA AGORA
          <br />
          PROCURE O PRIMEIRO QR CODE.
          <br />A HISTÓRIA ESPERA POR VOCÊ.
        </p>

        <button className="intro__button" onClick={() => navigate("/chapter1")}>
          JOGAR
        </button>
      </div>
    </main>
  );
}

export default Intro;
