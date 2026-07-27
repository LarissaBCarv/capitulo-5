import { QRCodeSVG } from "qrcode.react";
import "./QRCodes.css";

function QRCodes() {
  const chapters = [
    { id: 2, code: "chapter2" },
    { id: 3, code: "chapter3" },
    { id: 4, code: "chapter4" },
    { id: 5, code: "chapter5" },
    { id: "Final", code: "final" },
    { id: "Presente", code: "presente" },
  ];

  return (
    <main className="qrcodes">
      <h1>QR Codes do Projeto</h1>

      <div className="qrcodes-grid">
        {chapters.map((chapter) => (
          <div className="card" key={chapter.code}>
            <h2>
              {typeof chapter.id === "number"
                ? `Capítulo ${chapter.id}`
                : chapter.id}
            </h2>

            <QRCodeSVG
              id={`qr-${chapter.id}`}
              value={chapter.code}
              size={220}
            />

            <button
              onClick={() => {
                const svg = document.getElementById(`qr-${chapter.id}`);
                const data = new XMLSerializer().serializeToString(svg);

                const blob = new Blob([data], { type: "image/svg+xml" });
                const url = URL.createObjectURL(blob);

                const a = document.createElement("a");
                a.href = url;
                a.download = `${chapter.code}.svg`;
                a.click();

                URL.revokeObjectURL(url);
              }}
            >
              Baixar
            </button>

            <p>{chapter.code}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default QRCodes;
