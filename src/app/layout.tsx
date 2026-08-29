import "./globals.css";
import ThemeProviderWrapper from "../components/ThemeProviderWrapper";

export const metadata = {
  title: "Portafolio Abdiel Bernal",
  description: "Portafolio profesional de desarrollo Full Stack, backend, cloud y seguridad aplicada.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProviderWrapper>
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
