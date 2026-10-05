import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();

  const email = formData.get('email');
  const message = formData.get('message');

  if (
    typeof email !== 'string' ||
    typeof message !== 'string' ||
    !email ||
    !message
  ) {
    return new Response(
      JSON.stringify({
        error: 'Email y mensaje son obligatorios',
      }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }

  console.log('Nuevo mensaje recibido');
  console.log('Email:', email);
  console.log('Mensaje:', message);

  return new Response(
    JSON.stringify({
      success: true,
      message: 'Mensaje recibido correctamente',
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};