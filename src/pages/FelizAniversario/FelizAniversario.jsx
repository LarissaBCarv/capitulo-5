import "../../components/ChapterLayout/ChapterLayout.css";
import { useEffect, useState } from "react";

export default function FelizAniversario() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={`chapter ${visible ? "show" : ""}`}>
      <section className="chapter__content">
        {/* INTRO */}
        <div className="chapter__edition">LIMITED EDITION</div>

        {/* TÍTULO */}
        <h1 className="chapter__title">FELIZ ANIVERSÁRIO</h1>

        <div className="chapter__line"></div>

        {/* TEXTO */}
        <p className="chapter__story">
          O presente foi pensado na nossa história.
          <br />
          Mas hoje...
          <br />
          Quem merece ser celebrada é você.
          <br />
          Feliz aniversário, meu amor.
          <br />
          <br />
          Que os seus 30 anos sejam repletos de saúde, paz, conquistas e de tudo
          aquilo que te faz feliz.
          <br />
          <br />
          Eu espero poder estar ao seu lado em cada um desses momentos,
          compartilhando a vida, as viagens, as vitórias, os dias comuns e todos
          os capítulos que ainda vamos escrever.
          <br />
          <br />
          Porque essa história nunca foi sobre chegar ao fim. Ela sempre foi
          sobre continuar escolhendo você.
          <br />
          <br />
          Eu te amo. Bem-vinda aos 30.
          <br />
          Você vai odiar.
        </p>

        {/* ASSINATURA */}
        <div className="final__signature">
          <p>DA SUA ETERNA</p>
          <span>NISSA DA ESCOLA</span>
        </div>
      </section>
    </main>
  );
}
