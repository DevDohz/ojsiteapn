import Head from 'next/head'
import Link from 'next/link'
import Menumain from './menumain'
import s from '../styles/header.module.css'


export default function Header() {
  return (
    <div className={s.divHeader}>
      <Head>
          <title>{process.env.SITE_NAME_OJ}</title>
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      
      <div className="flex flex-row">        
        {/* Logo Open Jujitsu */}
        {/* La zone et le logo doivent se réduire quand scroll vers le bas */}
        <div className="flex-shrink">
          <Link href="/">
            <a> 
              <img src="/header-LogoTexte-losange-blanc.png" alt="Open Jujitsu Logo"  width={287} height={150} min-height={32} />
              {/* <Image src="/header-LogoTexte-losange-blanc.png" alt="Open Jujitsu Logo" width={287} height={150} priority /> */}
            </a>
          </Link>
        </div>
        
        {/* Phrase d'accroche + Menu */}
        <div className="flex flex-col flex-grow">
          <div className="hidden md:my-auto md:self-start md:flex font-bold bg-ojwhite bg-opacity-70 rounded-r-md" >
            <p>Du Jujitsu Self-Défense et tellement plus...</p>
          </div>

          {/* intégration du Menu (+ menu burger en mode mobile) */}
          <div className="self-end">
            <Menumain />
          </div>
        </div>

      </div>

      {/* Truc de recherche de tout (texte, images, vidéo, lexique etc...) => Future évol */}
      {/* Zone de Connexion + une fois identifié. => Future évol */}
    </div>
  )}