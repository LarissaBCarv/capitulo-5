import "./Chapter3.css";
import { useNavigate } from "react-router-dom";

function Chapter3() {
  const navigate = useNavigate();

  return (
    <div className="game">
      <div className="background-number">3</div>

      <div className="content">
        <h1>Capítulo 3</h1>

        <div className="line"></div>

        <h2>
          ÀS VEZES,
          <br />
          TUDO RECOMEÇA
          <br />
          SEM QUE A GENTE PERCEBA.
        </h2>

        <p className="story">
          A nossa história parecia
          <br />
          ter ficado no passado.
          <br />
          Até que, um dia, alguém
          <br />
          apareceu em um stories.
          <br />
          E, de repente,
          <br />
          nós voltamos a conversar.
          <br />
          <br />
          A próxima resposta está
          <br />
          em uma lembrança
          <br />
          que eu escolhi
          <br />
          levar comigo para sempre.
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

export default Chapter3;
