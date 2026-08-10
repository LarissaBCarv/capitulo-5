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
          O MUNDO FICOU MAIS QUIETO.
          <br />
          E, NO MEIO DE TUDO QUE MUDOU,
          <br />
          EU COMECEI A CONHECER VOCÊ.
          <br />
          NÃO SÓ A ANA DAS FESTAS.
          <br />
          A ANA.
          <br />
          AQUELA QUE EU QUERIA TER POR PERTO,
          <br />
          MESMO QUANDO NÃO HAVIA MAIS LUGAR NENHUM PARA IR.
          <br />
          <br />
          NAQUELA ÉPOCA,
          <br />
          EXISTIA UMA COISA QUE NOS LEMBRAVA
          <br />
          QUE O MUNDO LÁ FORA TINHA MUDADO.
          <br />
          <br />
          HOJE,
          <br />
          ELA ESCONDE A PRÓXIMA PISTA.
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
