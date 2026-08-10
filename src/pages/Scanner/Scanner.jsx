import "./Scanner.css";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Html5QrcodeScanner } from "html5-qrcode";

function Scanner() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const scannerRef = useRef(null);
  const navigatingRef = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
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

    scannerRef.current = scanner;

    const routes = {
      chapter2: "/chapter2",
      chapter3: "/chapter3",
      chapter4: "/chapter4",
      chapter5: "/chapter5",
      final: "/final",
      presente: "/presente",
    };

    scanner.render(
      async (decodedText) => {
        const route = routes[decodedText];

        if (!route || navigatingRef.current) {
          return;
        }

        navigatingRef.current = true;

        try {
          await scanner.clear();
        } catch (error) {
          console.warn("Erro ao limpar o scanner:", error);
        }

        navigate(route);
      },
      () => {},
    );

    return () => {
      clearTimeout(timer);

      if (navigatingRef.current) {
        scannerRef.current = null;
        return;
      }

      if (scannerRef.current) {
        scannerRef.current
          .clear()
          .catch(() => {})
          .finally(() => {
            scannerRef.current = null;
          });
      }
    };
  }, [navigate]);

  return (
    <main className={`scanner ${visible ? "show" : ""}`}>
      <section className="scanner__content">
        <div className="scanner__edition">LIMITED EDITION</div>

        <h1 className="scanner__title">LEITOR</h1>

        <div className="scanner__line"></div>

        <div id="reader"></div>
      </section>
    </main>
  );
}

export default Scanner;
