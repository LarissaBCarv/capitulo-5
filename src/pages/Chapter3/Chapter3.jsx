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
          A NOSSA HISTÓRIA PARECIA
          <br />
          TER FICADO NO PASSADO.
          <br />
          ATÉ QUE, UM DIA, ALGUÉM
          <br />
          APARECEU EM UM STORIES.
          <br />
          E, DE REPENTE,
          <br />
          NÓS VOLTAMOS A CONVERSAR.
          <br />
          <br />
          A PRÓXIMA RESPOSTA ESTÁ
          <br />
          EM UMA LEMBRANÇA
          <br />
          QUE EU ESCOLHI
          <br />
          LEVAR COMIGO PARA SEMPRE.
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
