export const metadata = {
  title: 'Trip Seyahat',
  description: 'Assistant demo app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        {children}
      </body>
    </html>
  );
}
