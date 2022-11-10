import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "./NavBar";



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>draft digital</title>
        <meta name="description" content="draft digital" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
        <NavBar />
        </div>
      </div>
    </div>
  );
}
