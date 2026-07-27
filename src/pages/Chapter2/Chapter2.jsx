import "./Chapter2.css";
import { useNavigate } from "react-router-dom";

function Chapter2() {
  const navigate = useNavigate();

  return (
    <div className="game">
      <div className="background-number">2</div>

      <div className="content">
        <h1>Capítulo 2</h1>

        <div className="line"></div>

        <h2>
          O TEMPO PASSOU.
          <br />
          MAS NEM TUDO MUDOU.
        </h2>

        <p className="story">
          Entre tantas lembranças,
          <br />
          existe uma que atravessou os anos.
          <br />
          Ela esteve presente
          <br />
          quando tudo era apenas o começo.
          <br />
          E, de alguma forma,
          <br />
          continua fazendo parte da nossa história.
          <br />
          <br />A próxima resposta veste essa lembrança.
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

export default Chapter2;
