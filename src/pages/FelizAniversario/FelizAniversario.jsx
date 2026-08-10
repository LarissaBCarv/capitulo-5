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
        <div className="chapter__edition">LIMITED EDITION</div>

        <h1 className="chapter__title">FELIZ ANIVERSÁRIO</h1>

        <div className="chapter__line"></div>

        <p className="chapter__story">
          O PRESENTE FOI PENSADO NA NOSSA HISTÓRIA.
          <br />
          MAS HOJE...
          <br />
          QUEM MERECE SER CELEBRADA É VOCÊ.
          <br />
          FELIZ ANIVERSÁRIO, MEU AMOR.
          <br />
          <br />
          QUE OS SEUS 30 ANOS SEJAM REPLETOS DE SAÚDE, PAZ, CONQUISTAS E DE TUDO
          AQUILO QUE TE FAZ FELIZ.
          <br />
          <br />
          EU ESPERO PODER ESTAR AO SEU LADO EM CADA UM DESSES MOMENTOS,
          COMPARTILHANDO A VIDA, AS VIAGENS, AS VITÓRIAS, OS DIAS COMUNS E TODOS
          OS CAPÍTULOS QUE AINDA VAMOS ESCREVER.
          <br />
          <br />
          PORQUE ESSA HISTÓRIA NUNCA FOI SOBRE CHEGAR AO FIM. ELA SEMPRE FOI
          SOBRE CONTINUAR ESCOLHENDO VOCÊ.
          <br />
          <br />
          EU TE AMO. BEM-VINDA AOS 30.
          <br />
          VOCÊ VAI ODIAR.
        </p>

        <div className="final__signature">
          <p>DA SUA ETERNA</p>
          <span>NISSA DA ESCOLA</span>
        </div>
      </section>
    </main>
  );
}
