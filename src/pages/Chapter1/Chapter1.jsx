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
          Antes dos abraços.
          <br />
          Antes dos beijos.
          <br />
          Antes de nós.
          <br />
          <br />
          Existia apenas um lugar...
          <br />
          e duas pessoas que ainda
          <br />
          não imaginavam o que
          <br />
          o futuro estava preparando.
          <br />
          <br />
          Encontre onde tudo começou.
        </>
      }
      leftImage="/images/ana1.png"
      rightImage="/images/larissa1.png"
      hint={
        <>
          Quando encontrar
          <br />
          a resposta,
          <br />
          escaneie o QR Code.
        </>
      }
      buttonText="ABRIR LEITOR"
      onButtonClick={() => navigate("/scanner")}
    />
  );
}
