import Head from 'next/head'
import Image from 'next/image'
import Menumain from './menumain'
import s from '../styles/header.module.css'

export default function Header() {
  return (
    <div className={s.divHeader} >
      <Head>
          <title>{process.env.SITE_NAME_OJ}</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div class="flex flex-row">        
        {/* Logo Open Jujitsu + Phrase d'accroche */}
        {/* La zone et le logo doivent se réduire quand scroll vers le bas */}
        <div class="flex flex-row">
          <div class="flex-none">
            <Image
              src="/Header- LogoTexte losange blanc.png"
              alt="Open Jujitsu Logo"
              width={300}
              height={150}
            />
          </div>
          <div class="flex-auto m-auto hidden md:flex font-bold text-shadow-white-lg" >
            <p>Du Jujitsu Self-Défense et tellement plus...</p>
          </div>
        </div>

        {/* intégration du Menu (+ menu burger en mode mobile) */}
        <div class="flex-grow">
          <Menumain />
        </div>
      </div>
      {/* Truc de recherche de tout (texte, images, vidéo, lexique etc...) => Future évol */}
      {/* Zone de Connexion + une fois identifié. => Future évol */}
    </div>
  )}