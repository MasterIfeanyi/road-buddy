import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Road Trip With Your Buddy",
  description: "A trivia driving game for the June Solstice Game Jam. Drive down the road answering questions on Juneteenth, civil rights history, Alan Turing, and the World Cup before your hearts run out.",
  openGraph: {
    title: "Road Trip With Your Buddy",
    description: "A trivia driving game built for the June Solstice Game Jam. Test your knowledge of Juneteenth, civil rights history, Alan Turing, and soccer while cruising down the road.",
    images: [
      {
        url: "/images/car.png",
        width: 1200,
        height: 630,
        alt: "Road Trip With Your Buddy",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Road Trip With Your Buddy",
    description: "A trivia driving game built for the June Solstice Game Jam.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}