import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'
import styles from '../styles/Home.module.css' // TODEL & replace

export default function Index() {
  return (
    <div>
      <Header />
       
        <main className={styles.main}>
          <h1 className={styles.title}>
            Accueil Open Jujitsu
          </h1>
          
          <p className={styles.description}>
            Page <Link href="/contact">
                  <a>Contact</a>
                 </Link>
          </p>

        </main>

      <Footer />
    </div>
  )
}
