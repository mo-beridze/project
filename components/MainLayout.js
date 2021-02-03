import Head from "next/head";
import styles from '../styles/Home.module.css'


export const MainLayout = ({children}) =>
  <>
    <Head>
      <title>Products List</title>
      <link rel="icon" href="/favicon.png"></link>
    </Head>
    <main className={styles.main}>
      {children}
    </main>
</>