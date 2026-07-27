import "./Chapter5.css";
import { useNavigate } from "react-router-dom";

function Chapter5() {
  const navigate = useNavigate();

  return (
    <div className="game">
      <div className="background-number">5</div>

      <div className="content">
        <h1>Capítulo 5</h1>

        <div className="line"></div>

        <h2>
          E, PELA PRIMEIRA VEZ,
          <br />
          NÃO ERA MAIS UM QUASE.
        </h2>

        <p className="story">
          Você encerrou um capítulo.
          <br />
          Eu fiz uma escolha.
          <br />
          E, em algum momento,
          <br />
          a gente deixou de ser possibilidade
          <br />
          para virar nós.
          <br />
          Cinco anos depois,
          <br />
          eu ainda escolheria fazer
          <br />
          o mesmo pedido.
          <br />E esse capítulo ainda não acabou.
          <br />
          <br />
          A próxima resposta está exatamente onde tudo mudou.
          <br />
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

export default Chapter5;
