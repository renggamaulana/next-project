import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <>
    <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
    </Head>
    <div>
     <h1 className={styles.title}>Homepage</h1>
     <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ad eum dolore sunt veritatis autem adipisci esse. Tenetur nemo reiciendis nulla beatae, mollitia dolorem eos cum eius quam. Ratione, modi?</p>
     <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ad eum dolore sunt veritatis autem adipisci esse. Tenetur nemo reiciendis nulla beatae, mollitia dolorem eos cum eius quam. Ratione, modi?</p>
     <Link href="/ninjas">
       <a className={styles.btn}>See Ninja Listing</a>
       </Link>
   </div>
   </>
  )
}
