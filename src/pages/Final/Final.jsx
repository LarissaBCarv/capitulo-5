import { useNavigate } from "react-router-dom";
import ChapterLayout from "../../components/ChapterLayout/ChapterLayout";

export default function Final() {
  const navigate = useNavigate();

  return (
    <ChapterLayout
      chapter="∞"
      title="EPÍLOGO"
      singleImage
      subtitle={
        <>
          ANTES DO PRÓXIMO
          <br />
          CAPÍTULO...
        </>
      }
      story={
        <>
          Existe uma mulher
          <br />
          que mudou completamente a minha vida.
          <br />
          Uma mulher que eu escolho amar
          <br />
          todos os dias.
          <br />
          <br />
          E toda vez que ela olhar
          <br />
          para um espelho, eu espero
          <br />
          que consiga enxergar
          <br />
          pelo menos um pouco do que eu enxergo nela.
          <br />
          <br />
          Olhe para ela onde seguimos viagem.
        </>
      }
      singleImage="/images/nos.png"
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
