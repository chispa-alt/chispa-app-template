export const metadata = {
  title: "Chispa App",
  description: "Tu app para compartir tu perfil y recibir apoyo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
