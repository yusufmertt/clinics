import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Landing from "./../components/landing/landing";

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Best clinics in Turkey</title>
        <meta
          name="description"
          content="Find world-class doctors and experts qualified in hair transplant, aethetics, dental and much more in Turkey."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Landing />
      </main>
    </div>
  );
}

/* export async function getStaticProps(){
  return {
    props:{

    }
  }
} */

export default Home;
