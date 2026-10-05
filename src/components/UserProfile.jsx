import { useState } from 'react';

export default function UserProfile({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div className="user-card">
      <h2>Perfil de usuario</h2>

      <p>
        Usuario: <strong>{name}</strong>
      </p>

      <button onClick={() => setCount(count + 1)}>
        Clicks: {count}
      </button>
    </div>
  );
}