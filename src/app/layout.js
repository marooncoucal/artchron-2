import Header1 from "./_components/header";
import "./globals.css";

export const metadata = {
  title: "Art Chronos",
  description: "тесты по истории искусств",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="relative font-sf-pro-text w-full max-w-[500px] mx-auto" >
        {/* <Header1/> */}
        <div className="layout-js h-svh w-full mx-auto relative">
            {children}
        </div>
      </body>
    </html>
  );
}
