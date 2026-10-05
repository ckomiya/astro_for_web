import { useState } from 'react';

export default function DataGraph({ title }) {
  const [active, setActive] = useState(false);

  return (
    <div className="graph-card">
      <h2>{title}</h2>

      <div className={active ? 'bar active' : 'bar'}>
        {active ? 'Gráfico activo' : 'Gráfico inactivo'}
      </div>

      <button onClick={() => setActive(!active)}>
        Cambiar estado
      </button>
    </div>
  );
}