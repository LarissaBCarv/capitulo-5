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
          ENTRE TANTAS LEMBRANÇAS,
          <br />
          EXISTE UMA QUE ATRAVESSOU OS ANOS.
          <br />
          ELA ESTEVE PRESENTE
          <br />
          QUANDO TUDO ERA APENAS O COMEÇO.
          <br />
          E, DE ALGUMA FORMA,
          <br />
          CONTINUA FAZENDO PARTE DA NOSSA HISTÓRIA.
          <br />
          <br />A PRÓXIMA RESPOSTA VESTE ESSA LEMBRANÇA.
        </>
      }
      leftImage="/images/ana2.png"
      rightImage="/images/larissa2.png"
      rightImageClass="bigger-image"
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
