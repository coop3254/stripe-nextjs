import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { checkout } from '../checkout'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">NFTs!</a>
        </h1>

        <div className={styles.grid}>
          <div>
            <Image 
              src="/images/sneaker1.jpeg"
              alt="Sneaker NFT" 
              width={400} 
              height={400} 
            /> 
            <p>RTFKT x Nike Dunk Genesis</p>
            <button onClick={(() => {
                checkout({
                  lineItems: [
                    {
                      price: "price_1Lqn23EmDvfq4Vd0bTCwjPVT",
                      quantity: 1
                    }
                  ]
                })
            })}>
              BUY!
            </button>
          </div>

          <div>
            <Image 
              src="/images/jacket.png" 
              alt="Jacket NFT"
              width={400} 
              height={400} 
            />
            <p>Alien Space Puffa</p>
          </div>      
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
