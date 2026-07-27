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
          UMA BRINCADEIRA MUDA TUDO.
        </h2>

        <p className="story">
          Sem planos.
          <br />
          Sem expectativa.
          <br />
          Só duas pessoas
          <br />
          que o tempo resolveu colocar
          <br />
          no mesmo lugar outra vez.
          <br />
          E, dali em diante, nada foi por acaso.
          <br />
          <br />A próxima resposta está em uma <br />
          lembrança que você levou a sério demais.
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
