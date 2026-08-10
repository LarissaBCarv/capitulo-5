import { useNavigate } from "react-router-dom";
import ChapterLayout from "../../components/ChapterLayout/ChapterLayout";

export default function Chapter1() {
  const navigate = useNavigate();

  return (
    <ChapterLayout
      chapter="1"
      title="CAPÍTULO 1"
      subtitle={
        <>
          UM NOVO LUGAR
          <br />E UMA HISTÓRIA QUE AINDA NEM EXISTIA.
        </>
      }
      story={
        <>
          ANTES DOS ABRAÇOS.
          <br />
          ANTES DOS BEIJOS.
          <br />
          ANTES DE NÓS.
          <br />
          <br />
          EXISTIA APENAS UM LUGAR...
          <br />
          E DUAS PESSOAS QUE AINDA
          <br />
          NÃO IMAGINAVAM O QUE
          <br />
          O FUTURO ESTAVA PREPARANDO.
          <br />
          <br />
          ENCONTRE ONDE TUDO COMEÇOU.
        </>
      }
      leftImage="/images/ana1.png"
      rightImage="/images/larissa1.png"
      hint={
        <>
          Quando encontrar a resposta,
          <br />
          escaneie o qr code.
        </>
      }
      buttonText="ABRIR LEITOR"
      onButtonClick={() => navigate("/scanner")}
    />
  );
}
