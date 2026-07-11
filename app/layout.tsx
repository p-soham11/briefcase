/** @format */

import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import Rail from "@/components/rail";
import Topbar from "@/components/topbar";

export const metadata = {
  title: "Soham Pal — Full-stack developer",
  description:
    "Soham Pal, a full-stack developer and Software Engineer at Rolls-Royce, building enterprise aerospace software with Angular, .NET, Micro Frontends and microservices.",
};

const themeInitScript = `
(function(){
  try{
    var stored=localStorage.getItem('theme');
    document.documentElement.setAttribute('data-theme', stored||'light');
  }catch(e){
    document.documentElement.setAttribute('data-theme','light');
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700;12..96,800&family=Instrument+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Topbar />
            <div className="shell">
              <Rail />
              <main>{children}</main>
            </div>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
