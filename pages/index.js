import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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
          <a href="/vehicles" className={styles.card}>
            <h2>Vehicles &rarr;</h2>
            <p>Find Info on FP vehicles</p>
          </a>

          <a href="/charging" className={styles.card}>
            <h2>Charging &rarr;</h2>
            <p>Learn about FP Charging</p>
          </a>

        </div>
      </main>
    </div>
  )
}
