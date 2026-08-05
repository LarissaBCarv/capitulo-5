import { useNavigate } from "react-router-dom";
import ChapterLayout from "../../components/ChapterLayout/ChapterLayout";

export default function Chapter2() {
  const navigate = useNavigate();

  return (
    <ChapterLayout
      chapter="2"
      title="CAPÍTULO 2"
      subtitle={
        <>
          O TEMPO PASSOU.
          <br />
          MAS NEM TUDO MUDOU.
        </>
      }
      story={
        <>
          Entre tantas lembranças,
          <br />
          existe uma que atravessou os anos.
          <br />
          Ela esteve presente
          <br />
          quando tudo era apenas o começo.
          <br />
          E, de alguma forma,
          <br />
          continua fazendo parte da nossa história.
          <br />
          <br />A próxima resposta veste essa lembrança.
        </>
      }
      leftImage="/images/ana2.png"
      rightImage="/images/larissa2.png"
      rightImageClass="bigger-image"
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
