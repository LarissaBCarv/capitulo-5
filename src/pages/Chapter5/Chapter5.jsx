import { useNavigate } from "react-router-dom";
import ChapterLayout from "../../components/ChapterLayout/ChapterLayout";

export default function Chapter5() {
  const navigate = useNavigate();

  return (
    <ChapterLayout
      chapter="5"
      title="CAPÍTULO 5"
      subtitle={
        <>
          E, PELA PRIMEIRA VEZ,
          <br />
          NÃO ERA MAIS UM QUASE.
        </>
      }
      story={
        <>
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
          <br />
          Naquele dia, eu te entreguei uma pergunta
          <br />
          e você me entregou um futuro.
          <br />
          <br />
          Hoje, eu te entrego o <br />
          próximo passo dessa história.
        </>
      }
      leftImage="/images/ana5.png"
      rightImage="/images/larissa5.png"
      hint={
        <>
          Quando encontrar a resposta,
          <br />
          escaneie o QR Code.
        </>
      }
      buttonText="ABRIR LEITOR"
      onButtonClick={() => navigate("/scanner")}
    />
  );
}
