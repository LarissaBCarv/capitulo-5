import { useNavigate } from "react-router-dom";
import ChapterLayout from "../../components/ChapterLayout/ChapterLayout";

export default function Chapter4() {
  const navigate = useNavigate();

  return (
    <ChapterLayout
      chapter="4"
      title="CAPÍTULO 4"
      subtitle={
        <>
          QUANDO O MUNDO PAROU,
          <br />
          NÓS CONTINUAMOS.
        </>
      }
      story={
        <>
          O mundo ficou mais quieto.
          <br />
          E, no meio de tudo que mudou,
          <br />
          eu comecei a conhecer você.
          <br />
          Não só a Ana das festas.
          <br />
          A Ana.
          <br />
          Aquela que eu queria ter por perto,
          <br />
          mesmo quando não havia mais lugar nenhum para ir.
          <br />
          <br />
          Naquela época,
          <br />
          existia uma coisa que nunca saía
          <br />
          das nossas mãos.
        </>
      }
      leftImage="/images/ana4.png"
      rightImage="/images/larissa4.png"
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
