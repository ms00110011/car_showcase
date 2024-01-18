

import "./globals.css";

import { Footer, NavBar } from "@components";
import Provider from "@components/Provider";

export const metadata = {
  title: "Car Hub",
  description: "Discover world's best car showcase application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <Provider>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
      </Provider>
    </html>
  );
}
