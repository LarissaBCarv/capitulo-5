import "./Scanner.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Html5QrcodeScanner } from "html5-qrcode";

function Scanner() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 150);

    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        fps: 10,
        qrbox: {
          width: 220,
          height: 220,
        },
      },
      false,
    );

    const routes = {
      chapter2: "/chapter2",
      chapter3: "/chapter3",
      chapter4: "/chapter4",
      chapter5: "/chapter5",
      final: "/final",
      presente: "/presente",
    };

    scanner.render(
      (decodedText) => {
        const route = routes[decodedText];

        if (route) {
          scanner.clear().then(() => {
            navigate(route);
          });
        }
      },
      () => {},
    );

    return () => {
      scanner.clear().catch(() => {});
    };
  }, [navigate]);

  return (
    <main className={`scanner ${visible ? "show" : ""}`}>
      <section className="scanner__content">
        <span className="scanner__edition">LIMITED EDITION</span>

        <h1 className="scanner__title">LEITOR</h1>

        <div className="scanner__line"></div>

        <div id="reader"></div>
      </section>
    </main>
  );
}

export default Scanner;
