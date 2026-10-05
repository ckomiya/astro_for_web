import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const data = {
    message: 'Hola desde mi API de Astro',
    timestamp: new Date().toISOString(),
  };

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};