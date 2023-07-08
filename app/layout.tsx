import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-tw-blue bg-tw-bg bg-fixed bg-no-repeat bg-top-left">
        {children}
      </body>
    </html>
  );
}
