// Imports
import "@/styles/globals.css";
// Components
import Header from "../components/Header";

export const metadata = {
  title: "Jonathan Andrew - Interactive & Graphic Designer",
  description:
    "Portfolio of Jonathan Andrew, an interactive and graphic designer based in Vancouver, British Columbia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
