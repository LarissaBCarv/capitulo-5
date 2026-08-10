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
          VOCÊ ENCONTROU CADA PISTA.
          <br />
          REVIVEU CADA LEMBRANÇA.
          <br />
          E, PRINCIPALMENTE,
          <br />
          REVIVEU A NOSSA HISTÓRIA.
          <br />
          AGORA CHEGOU A HORA
          <br />
          DE DESCOBRIR
          <br />A ÚLTIMA SURPRESA.
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
          <span className="password">839</span>
          <br />
        </>
      }
      buttonText="ABRIR A ÚLTIMA PÁGINA"
      onButtonClick={() => navigate("/feliz-aniversario")}
    />
  );
}
