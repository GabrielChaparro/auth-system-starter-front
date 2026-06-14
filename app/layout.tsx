import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AuthKick - Self-hosted Auth API with Keycloak",
  description:
    "A ready-to-run self-hosted authentication API powered by Keycloak, Docker, PostgreSQL, OpenAPI, and Postman.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
