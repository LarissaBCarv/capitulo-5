import "./Chapter4.css";
import { useNavigate } from "react-router-dom";

function Chapter4() {
  const navigate = useNavigate();

  return (
    <div className="game">
      <div className="background-number">4</div>

      <div className="content">
        <h1>Capítulo 4</h1>

        <div className="line"></div>

        <h2>
          QUANDO O MUNDO PAROU,
          <br />
          NÓS CONTINUAMOS.
        </h2>

        <div className="story">
          <p>
            O mundo ficou mais quieto.
            <br />
            E, no meio de tudo que mudou,
            <br />
            eu comecei a conhecer você.
            <br />
            Não só a Ana das festas.
            <br />A Ana. <br />
            <br />
            Aquela que eu queria ter por perto, <br />
            mesmo quando não havia mais lugar nenhum para ir.
            <br />
            <br />
            Naquela época, existia uma coisa que nunca saía das nossas mãos.
          </p>
        </div>

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

export default Chapter4;
