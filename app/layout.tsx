import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MuiThemeProvider } from "./theme-prodiver";
export const metadata: Metadata = {
  title: "بوته",
  description: "بوته",
};

const iranSans = localFont({
  src: [
    {
      path: "../public/fonts/IRANSansXFaNum-Black.woff",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANSansXFaNum-ExtraBold.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANSansXFaNum-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANSansXFaNum-DemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANSansXFaNum-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANSansXFaNum-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANSansXFaNum-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANSansXFaNum-ExtraBold.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANSansXFaNum-Thin.woff",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-iranSans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html dir="rtl">
      <body className={`${iranSans.variable} font-sans`}>
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </body>
    </html>
  );
}

// import "./globals.css";
// import { MuiThemeProvider } from "./theme-prodiver";

// export const metadata = {
//   title: "My Next.js App",
//   description: "An app with Material-UI and Persian localization.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="fa" dir="rtl">
//       <body>
//         <MuiThemeProvider>{children}</MuiThemeProvider>
//       </body>
//     </html>
//   );
// }
