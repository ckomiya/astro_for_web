import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const sessionId = context.cookies.get("session")?.value;

  // Por defecto no existe usuario.
  context.locals.user = null;

  // No existe cookie de sesión.
  if (!sessionId) {
    return next();
  }

  // Simulación de una consulta a una BD.
  //
  // En una aplicación real sería algo parecido a:
  //
  // const user = await db.getUserBySession(sessionId);

  const user =
    sessionId === "demo-session-123"
      ? {
          id: "123",
          name: "Usuario Demo",
          role: "admin" as const,
        }
      : null;

  if (user) {
    context.locals.user = user;
  } else {
    // La sesión ya no es válida.
    context.cookies.delete("session", {
      path: "/",
    });
  }

  return next();
});
