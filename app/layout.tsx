// app/layout.tsx
import '../styles/Home.module.css';

export const metadata = {
  title: 'Isa Charity Clone',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
