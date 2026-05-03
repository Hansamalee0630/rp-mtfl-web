import type { Metadata } from "next";
import { Outfit, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BackToTop } from "@/components/ui/BackToTop";
import { SplashScreen } from "@/components/ui/SplashScreen";
import { Toaster } from "sonner";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MTFL Research | Federated Learning for Diabetes Prediction",
  description: "Research project exploring Federated Multi-Task Learning for Privacy-Preserving Personalized Diabetes Prediction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${robotoMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SplashScreen />
          <CustomCursor />
          <ScrollProgress />
          <BackToTop />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster 
            position="bottom-right" 
            theme="dark" 
            toastOptions={{ 
              style: { 
                background: 'rgba(0, 0, 0, 0.8)', 
                backdropFilter: 'blur(16px)', 
                border: '1px solid rgba(0, 212, 255, 0.3)', 
                color: '#fff',
                boxShadow: '0 0 20px rgba(0, 212, 255, 0.15)'
              } 
            }} 
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
