import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Pustaka Senja",
  description: "Ruang baca dan perpustakaan komunitas Pustaka Senja."
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col bg-stone-950 text-stone-100">
        <Navbar />
        <main className="flex-1 w-full max-w-6xl mx-auto px-5 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
