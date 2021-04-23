import s from '../styles/footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (   
    <footer className={s.divFooter} >
      <Image
        src="/footer-separateur vert.png"
        alt="Open Jujitsu Self Defense Logo"
        width={1620}
        height={30}
      />    
      <div class="flex flex-row -mt-5">
        {/* Logo OJSD fixe */}
        <div class="flex-none self-center">
          <Image
            src="/footer-ojsd.png"
            alt="Open Jujitsu Self Defense Logo"
            width={147}
            height={70}
          />
        </div>

        {/* Menu simple espacé */}
        <div class="flex-grow flex space-x-4 self-center place-content-center sm:visible invisible" >
          <Link href="/contact">
            <a className={s.myLink}>Contact</a>
          </Link>
          <p>-</p>
          {/* TODO mettre la bonne page */}
          <Link href="/contact"> 
            <a className={s.myLink}>Infos légales</a>
          </Link>        
          <p>-</p>
          {/* TODO mettre la bonne page */}
          <Link href="/contact"> 
            <a className={s.myLink}>Plan du site</a>
          </Link>
        </div>

        {/* Info réccap OJ */}
        <div class="flex-shrink mr-0 text-center sm:visible invisible">
          <p class="text-xl"><span class="font-bold">Open</span> <span class="text-ojgreen">Jujitsu</span></p>
          <p>contact<span class="text-ojgreen">@</span>openjujitsu<span class="text-ojgreen">.</span>fr</p>
          <p>51 avenue de Madran, 33600 Pessac</p>
        </div>      
      </div>
    </footer>
  )}