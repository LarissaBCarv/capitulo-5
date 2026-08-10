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
          VOCÊ ENCERROU UM CAPÍTULO.
          <br />
          EU FIZ UMA ESCOLHA.
          <br />
          E, EM ALGUM MOMENTO,
          <br />
          A GENTE DEIXOU DE SER POSSIBILIDADE
          <br />
          PARA VIRAR NÓS.
          <br />
          CINCO ANOS DEPOIS,
          <br />
          EU AINDA ESCOLHERIA FAZER
          <br />
          O MESMO PEDIDO.
          <br />
          NAQUELE DIA, EU TE ENTREGUEI UMA PERGUNTA
          <br />
          E VOCÊ ME ENTREGOU UM FUTURO.
          <br />
          <br />
          HOJE, EU TE ENTREGO O <br />
          PRÓXIMO PASSO DESSA HISTÓRIA.
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
