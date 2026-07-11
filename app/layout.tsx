/** @format */

import "./globals.css";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import Rail from "@/components/rail";
import Topbar from "@/components/topbar";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
  weight: ["400", "600", "700", "800"],
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument",
  weight: ["400", "500", "600"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Soham Pal — Full-stack developer",
  description:
    "Soham Pal, a full-stack developer and Software Engineer at Rolls-Royce, building enterprise aerospace software with Angular, .NET, Micro Frontends and microservices.",
};

const themeInitScript = `
(function(){
  try{
    var stored=localStorage.getItem('theme');
    var prefersDark=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', stored||(prefersDark?'dark':'light'));
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
    <html
      lang="en"
      className={`!scroll-smooth ${bricolage.variable} ${instrument.variable} ${jetbrains.variable}`}
    >
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
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
