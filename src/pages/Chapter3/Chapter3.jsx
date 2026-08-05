import { useNavigate } from "react-router-dom";
import ChapterLayout from "../../components/ChapterLayout/ChapterLayout";

export default function Chapter3() {
  const navigate = useNavigate();

  return (
    <ChapterLayout
      chapter="3"
      title="CAPÍTULO 3"
      subtitle={
        <>
          ÀS VEZES,
          <br />
          TUDO RECOMEÇA
          <br />
          SEM QUE A GENTE PERCEBA.
        </>
      }
      story={
        <>
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
        </>
      }
      leftImage="/images/ana3.png"
      rightImage="/images/larissa3.png"
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
