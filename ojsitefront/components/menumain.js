import Image from 'next/image'
import Link from 'next/link'
import s from '../styles/header.module.css'

export default function Menumain() {
  return (
    /* MENU version ORDI */
    <div>
      {/* TODO mettre la bonne page */}
      <Link href="/news"> 
        <a className={s.myLink}>News</a>
      </Link>
      {/* TODO mettre la bonne page */}
      <Link href="/events"> 
        <a className={s.myLink}>Evènements</a>
      </Link>
      {/* TODO mettre la bonne page */}
      <Link href="/media"> 
        <a className={s.myLink}>Média</a>
      </Link>
      {/* TODO mettre la bonne page */}
      <Link href="/jujitsu"> 
        <a className={s.myLink}>le Ju-jitsu</a>
      </Link>
      {/* TODO mettre la bonne page */}
      <Link href="/club"> 
        <a className={s.myLink}>le Club</a>
      </Link>
      {/* TODO mettre la bonne page */}
      <Link href="/contact"> 
        <a className={s.myLink}>Contact</a>
      </Link>
      {/* TODO mettre la bonne page */}
      <Link href="/liens"> 
        <a className={s.myLink}>Liens</a>
      </Link>
    </div>
  )}