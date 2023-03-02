import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });
import { Footer } from "@/components/footer";
import { Welcome } from "@/components/welcome";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tomi204 Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center">
        <Navbar />
        <Welcome />
        <Footer />
      </main>
    </>
  );
}
