import OJLayout from '../components/layout'
import Link from 'next/link'
import styles from '../styles/Home.module.css' // TODEL & replace

export default function Index() {
  return (
    <OJLayout>
      <h1 className={styles.title}>
         Accueil Open Jujitsu
      </h1>
    
      <p className={styles.description}>
        Page <Link href="/contact">
                <a>Contact</a>
             </Link>
      </p>
    </OJLayout>
  )
}
