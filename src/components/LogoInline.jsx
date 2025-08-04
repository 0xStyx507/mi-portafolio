// src/components/LogoInline.jsx
import { useEffect, useState } from "react";

export default function LogoInline() {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    fetch("/data/svg-logo.json")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data.logos)) {
          setLogos(data.logos.filter((l) => l.enabled));
        }
      })
      .catch(console.warn);
  }, []);

  if (!logos.length) return <div className="p-4">Cargando logos...</div>;

  return (
    <div className="space-y-6">
      <Section title="Frontend Languages" filter={(l) => l.type === "Language" && l.category === "Frontend"} logos={logos} />
      <Section title="Backend Languages" filter={(l) => l.type === "Language" && l.category === "Backend"} logos={logos} />
      <Section title="Databases" filter={(l) => l.type === "Database"} logos={logos} />
      <Section title="Frameworks" filter={(l) => l.type === "Framework"} logos={logos} />
    </div>
  );
}

// Reusa las mismas subcomponentes Section y LogoCard del ejemplo anterior
function Section({ title, filter, logos }) {
  const subset = logos.filter(filter);
  if (!subset.length) return null;

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {subset.map((logo) => (
          <LogoCard key={logo.alias} logo={logo} />
        ))}
      </div>
    </div>
  );
}

function LogoCard({ logo }) {
  const [errored, setErrored] = useState(false);

  return (
    <div className="flex flex-col items-center p-3 border rounded shadow-sm bg-white">
      {!errored ? (
        <img
          src={logo.svg}
          alt={logo.title}
          className="w-16 h-16 object-contain mb-2"
          loading="lazy"
          onError={() => setErrored(true)}
        />
      ) : (
        <div className="w-16 h-16 flex items-center justify-center bg-gray-100 mb-2 text-[10px] text-center">
          {logo.title}
        </div>
      )}
      <div className="text-xs font-medium">{logo.title}</div>
      <div className="text-[10px] text-gray-500">{logo.category}</div>
    </div>
  );
}
