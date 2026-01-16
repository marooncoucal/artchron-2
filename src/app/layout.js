import Header1 from "./_components/header";
import "./globals.css";

export const metadata = {
  title: "Art Chronos",
  description: "тесты по истории искусств",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="font-sf-pro-text" >
        {/* <Header1/> */}
        <div className="layout-js h-svh w-full mx-auto relative">
            {children}
        </div>
      </body>
    </html>
  );
}
