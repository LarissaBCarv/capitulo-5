import { useNavigate } from "react-router-dom";
import ChapterLayout from "../../components/ChapterLayout/ChapterLayout";

export default function Final() {
  const navigate = useNavigate();

  return (
    <ChapterLayout
      chapter="∞"
      title="EPÍLOGO"
      singleImage="/images/nos.png"
      rightImageClass="final-image"
      subtitle={
        <>
          ANTES DO PRÓXIMO
          <br />
          CAPÍTULO...
        </>
      }
      story={
        <>
          EXISTE UMA MULHER
          <br />
          QUE MUDOU COMPLETAMENTE A MINHA VIDA.
          <br />
          UMA MULHER QUE EU ESCOLHO AMAR
          <br />
          TODOS OS DIAS.
          <br />
          <br />
          E TODA VEZ QUE ELA OLHAR
          <br />
          PARA UM ESPELHO, EU ESPERO
          <br />
          QUE CONSIGA ENXERGAR
          <br />
          PELO MENOS UM POUCO DO QUE EU ENXERGO NELA.
          <br />
          <br />
          OLHE PARA ELA ONDE SEGUIMOS VIAGEM.
        </>
      }
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
