import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = { title: "Pustaka Senja" };

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        <Navbar />
        <main className="flex-grow max-w-6xl mx-auto w-full p-4 mt-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}