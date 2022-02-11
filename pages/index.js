import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FP Next Elastic POC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          FP Next Elastic POC
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
                  <Link href="/vehicles" className={styles.card}>
                     <h2>Vehicles &rarr;</h2>
                  </Link>
        </div>
         <div className={styles.grid}>
                  <br/> <br/>
                  <Link href="/charging" className={styles.card}>
                    <h2>Charging &rarr;</h2>
                  </Link>
        </div>

      </main>
    </div>
  )
}
