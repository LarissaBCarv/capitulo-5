import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();

    if (name === "AnaFlavia" && password === "2013") {
      navigate("/intro");
    } else {
      setError("Ih, gata... pensa mais um pouquinho");
    }
  }

  return (
    <main className="home">
      <img src="/images/eyes.png" alt="" className="home__image" />

      <section className="home__content">
        <span className="home__edition">LIMITED EDITION</span>

        <h1 className="home__title">CAPÍTULO 5</h1>

        <p className="home__text">Uma história que continua sendo escrita.</p>

        <form className="home__form" onSubmit={handleLogin}>
          <label htmlFor="name">Nome</label>

          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="password">Senha</label>

          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="home__error">{error}</p>}

          <button type="submit">ENTRAR</button>
        </form>
      </section>

      <span className="home__footer">01 / 01</span>
    </main>
  );
}

export default Home;
