import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Coming from Twitter?</h1>
      <h3>Hello there! 👋</h3>
      <p><strong>Birdlr.com</strong> is a Twitter growth copilot.</p>
      <p>I&apos;m currently Design thinking on creators needs to better address their pain points!</p>
      <p>Want to know more?<a href="https://twitter.com/VittoStack"> Connect on Twitter</a> ⚡</p>
    </div>
  )
}
