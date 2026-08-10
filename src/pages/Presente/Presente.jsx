import { useNavigate } from "react-router-dom";
import ChapterLayout from "../../components/ChapterLayout/ChapterLayout";

export default function Presente() {
  const navigate = useNavigate();

  return (
    <ChapterLayout
      chapter="∞"
      title="A SURPRESA"
      subtitle={
        <>
          VOCÊ CHEGOU
          <br />
          ATÉ AQUI.
        </>
      }
      story={
        <>
          Você encontrou cada pista.
          <br />
          Reviveu cada lembrança.
          <br />
          E, principalmente,
          <br />
          reviveu a nossa história.
          <br />
          Agora chegou a hora
          <br />
          de descobrir
          <br />a última surpresa.
        </>
      }
      showHintOnly
      hint={
        <>
          O PRESENTE ESTÁ
          <br />
          NA MALA,
          <br />
          NO PORTA-MALAS.
          <br />
          A SENHA É:
          <br />
          <span className="password">705</span>
          <br />
        </>
      }
      buttonText="ABRIR A ÚLTIMA PÁGINA"
      onButtonClick={() => navigate("/feliz-aniversario")}
    />
  );
}
