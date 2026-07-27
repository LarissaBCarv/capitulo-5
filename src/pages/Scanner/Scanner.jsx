import "./Scanner.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Html5QrcodeScanner } from "html5-qrcode";

function Scanner() {
  const navigate = useNavigate();

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        fps: 10,
        qrbox: {
          width: 250,
          height: 250,
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
        console.log("QR lido:", decodedText);

        const route = routes[decodedText];

        if (route) {
          scanner.clear().then(() => {
            navigate(route);
          });
        }
      },
      (error) => {
        console.log(error);
      },
    );

    return () => {
      scanner.clear().catch(() => {});
    };
  }, [navigate]);

  return (
    <main className="scanner">
      <div id="reader"></div>
    </main>
  );
}

export default Scanner;
