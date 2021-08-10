import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum odit
          architecto commodi eius blanditiis voluptates libero nesciunt, hic
          officiis amet distinctio beatae, obcaecati enim dolor impedit corrupti
          modi ratione aliquid assumenda error quia eaque voluptatibus adipisci
          id. Laudantium obcaecati commodi ducimus dolorem error, doloribus ea,
          dolorum architecto, magni molestias expedita!
        </p>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum odit
          architecto commodi eius blanditiis voluptates libero nesciunt, hic
          officiis amet distinctio beatae, obcaecati enim dolor impedit corrupti
          modi ratione aliquid assumenda error quia eaque voluptatibus adipisci
          id. Laudantium obcaecati commodi ducimus dolorem error, doloribus ea,
          dolorum architecto, magni molestias expedita!
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
