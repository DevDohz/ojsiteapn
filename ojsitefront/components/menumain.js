import Link from 'next/link'
import s from '../styles/header.module.css'
import { useRef, useEffect, useState } from "react";

export default function Menumain() {
  // const menuRef = useRef(null);
  // const [isActive, setIsActive] = useState(false);
  // const menuClick = () => setIsActive(!isActive);
  // useEffect(() => {

  // }, [isActive]);
  
  // <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  // <script>const navLink = document.querySelectorAll(s.myLink);
  // function LinkAct(){
  //   navLink.forEach(n => n.classList.remove('active'));
  //   this.classList.add('active');
  // }
  // navLink.forEach(n => n.addEventListener('click', LinkAct));
  // </script>

  //https://youtu.be/qJnIJa-cF2M

  return (
    /* MENU version ORDI Eme#1052 */
    <nav className="flex flex-row flex-wrap lg:space-x-1 xl:space-x-2">
      <button className="inline-flex p-3 rounded md:hidden text-ojwhite ml-auto hover:bg-ojgreen outline-none">
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </button>
      
      <Link href="/news" > 
        <a>
          <div className="flex flex-row">
            <img src="/menu-blanc-G.png" height="16" width="10" className={s.myImage} />
            {/* TODO mettre la bonne page */}
            <p className={s.myLink}>News</p>          
            <img src="/menu-blanc-D.png" height="16" width="10" className={s.myImage} />
          </div>
        </a>
      </Link>

      <div className="flex flex-row">
        <img src="/menu-blanc-G.png" height="16" width="10" className={s.myImage} />        
        <Link href="/events">
          {/* TODO mettre la bonne page */}
          <a className={s.myLink}>Evènements</a>
        </Link>
        <img src="/menu-blanc-D.png" height="16" width="10" className={s.myImage} />
      </div>

      <div className="flex flex-row">
        <img src="/menu-blanc-G.png" height="16" width="10" className={s.myImage} />
        {/* TODO mettre la bonne page */}
        <Link href="/media"  > 
          <a className={s.myLink}>Média</a>
        </Link>
        <img src="/menu-blanc-D.png" height="16" width="10" className={s.myImage} />
      </div>

      <div className="flex flex-row" >
        <img src="/menu-blanc-G.png" height="16" width="10" className={s.myImage}  />
        {/* TODO mettre la bonne page */}
        <Link href="/jujitsu" className="flex-none"> 
          <a className={s.myLink}>le Ju-jitsu</a>
        </Link>
        <img src="/menu-blanc-D.png" height="16" width="10" className={s.myImage} />
      </div>

      <div className="flex flex-row">
        <img src="/menu-blanc-G.png" height="16" width="10" className={s.myImage} /> 
        {/* TODO mettre la bonne page */}
        <Link href="/club" className="flex-none"> 
          <a className={s.myLink}>le Club</a>
        </Link>
        <img src="/menu-blanc-D.png" height="16" width="10" className={s.myImage} />
      </div>

      <div className="flex flex-row">
        <img src="/menu-blanc-G.png" height="16" width="10" className={s.myImage} />
        {/* TODO mettre la bonne page */}
        <Link href="/contact" className="flex-none" > 
          <a className={`${s.myLink} active`} onClick="LinkAct()">Contact</a>
        </Link>
        <img src="/menu-blanc-D.png" height="16" width="10" className={s.myImage} />
      </div>

      <div className="flex flex-row">
        <img src="/menu-blanc-G.png" height="16" width="10" className={s.myImage} />
        {/* TODO mettre la bonne page */}
        <Link href="/liens" className="flex-none"> 
          <a className={s.myLink}>Liens</a>
        </Link>
        <img src="/menu-blanc-D.png" height="16" width="10" className={s.myImage} />
      </div>
    </nav>
  )}
  
  
