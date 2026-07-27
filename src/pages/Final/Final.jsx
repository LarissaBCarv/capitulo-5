import "./Final.css";
import { useNavigate } from "react-router-dom";

function Final() {
  const navigate = useNavigate();

  return (
    <div className="game">
      <div className="background-number">5</div>

      <div className="content">
        <h1>Final</h1>

        <div className="line"></div>

        <h2>ANTES DO ÚLTIMO CAPÍTULO...</h2>

        <p className="story">
          Existe uma mulher
          <br />
          que mudou completamente a minha vida.
          <br />
          Uma mulher que eu escolho amar <br />
          todos os dias. <br />E toda vez que ela olhar
          <br /> para um espelho, eu espero
          <br /> que consiga enxergar <br />
          pelo menos um pouco do que eu enxergo nela.
          <br />
          <br />
          Olhe para ela onde seguimos viagem.
        </p>

        <div className="footer">
          <p>
            Quando encontrar a última pista,
            <br />
            escaneie o QR Code.
          </p>

          <button onClick={() => navigate("/scanner")}>ABRIR LEITOR</button>
        </div>
      </div>
    </div>
  );
}

export default Final;
