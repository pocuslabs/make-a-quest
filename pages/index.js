import Head from 'next/head'
import Image from 'next/image'

import StoryConfig from "~/components/StoryConfig"
import styles from '~/styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>make-a-quest</title>
        <meta name="description" content="Make a quest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
				<StoryConfig />
      </main>

      <footer className={styles.footer}>
        &copy; Copyright 2021 Pocus Labs
      </footer>
    </div>
  )
}
