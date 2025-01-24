// Imports
import "@/styles/globals.css";
// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SlidingText from "@/components/SlidingText";

export const metadata = {
  title: "Jonathan Andrew - Interactive & Graphic Designer",
  description:
    "Portfolio of Jonathan Andrew, an interactive and graphic designer based in Vancouver, British Columbia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=My+Soul&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Barcode+39+Text&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="antialiased">
        <SlidingText />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
