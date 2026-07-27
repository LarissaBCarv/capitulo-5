import "./Chapter1.css";
import { useNavigate } from "react-router-dom";

export default function Intro() {
  const navigate = useNavigate();

  return (
    <div className="chapter1">
      <div className="background-number">1</div>

      <div className="content">
        <h1>Capítulo 1</h1>

        <div className="line"></div>

        <h2>
          UM NOVO LUGAR
          <br />E UMA HISTÓRIA QUE AINDA NEM EXISTIA.
        </h2>

        <p className="story">
          Antes dos abraços.
          <br />
          Antes dos beijos.
          <br />
          Antes de nós.
          <br />
          <br />
          Existia apenas um lugar...
          <br />
          e duas pessoas que ainda não imaginavam
          <br />o que o futuro estava preparando.
          <br />
          Encontre onde tudo começou.
        </p>

        <div className="footer">
          <p>
            Quando encontrar a resposta,
            <br />
            escaneie o QR Code.
          </p>

          <button onClick={() => navigate("/scanner")}>ABRIR LEITOR</button>
        </div>
      </div>
    </div>
  );
}
