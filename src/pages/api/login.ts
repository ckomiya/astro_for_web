import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();

  const email = formData.get("email");
  const password = formData.get("password");

  // Usuario ficticio para el laboratorio.
  // Todavía no estamos conectando una base de datos.
  if (email !== "demo@example.com" || password !== "123456") {
    return new Response("Credenciales incorrectas", {
      status: 401,
    });
  }

  // En una aplicación real esto sería un ID aleatorio
  // generado de forma segura y almacenado en una BD/Redis.
  const sessionId = "demo-session-123";

  cookies.set("session", sessionId, {
    path: "/",
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
  });

  return redirect("/dashboard");
};
