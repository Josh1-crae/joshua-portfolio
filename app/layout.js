import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Joshua S. Ricardo | Portfolio",
  description: "Personal portfolio of Joshua S. Ricardo, an Information Technology student."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <footer className="footer">
          <p>© {new Date().getFullYear()} Joshua S. Ricardo</p>
          <p>Designed with curiosity and creativity.</p>
        </footer>
      </body>
    </html>
  );
}
