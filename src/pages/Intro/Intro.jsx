import "./Intro.css";
import { useNavigate } from "react-router-dom";

function Intro() {
  const navigate = useNavigate();

  return (
    <main className="intro">
      <div className="intro__content">
        <span className="intro__edition">LIMITED EDITION</span>

        <h1 className="intro__title">Capítulo 5</h1>

        <p className="intro__text">
          ALGUMAS HISTÓRIAS
          <br />
          NÃO SÃO LIDAS,
          <br />
          SÃO DESCOBERTAS.
          <br />
          VOCÊ ESTÁ PRESTES A EMBARCAR
          <br />
          EM UM PEQUENO JOGO
          <br />
          BASEADO NA NOSSA HISTÓRIA.
          <br />
          <br />O JOGO COMEÇA AGORA.
          <br />
          ALGUMAS COISAS FORAM <br />
          DEIXADAS PELO CAMINHO.
          <br />
          NEM TUDO ESTÁ AQUI POR ACASO.
          <br />
          ALGUMAS COISAS CARREGAM
          <br />
          MAIS SIGNIFICADOS DO QUE
          <br />
          PARECEM, PROCURE AS RESPOSTAS.
        </p>

        <button className="intro__button" onClick={() => navigate("/chapter1")}>
          JOGAR
        </button>
      </div>
    </main>
  );
}

export default Intro;
