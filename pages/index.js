import Head from 'next/head'
import Image from 'next/future/image'
import styles from '../styles/Home.module.css'
import heroImage from '../public/hero.jpg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lorem Ipsum Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src={heroImage} style={{maxWidth: '100%', height: 'auto'}} sizes="100vw" loading="eager" fetchpriority="high"/>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

      </main>

    </div>
  )
}
