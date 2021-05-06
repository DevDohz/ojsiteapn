import Link from 'next/link'
import s from '../styles/header.module.css'
import { useRef, useEffect, useState } from "react";

export default function Menumain() {
  const menuRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  useEffect(() => {

  }, [isActive]);

  return (
    /* MENU version ORDI */
    <div className="flex flex-row flex-wrap lg:space-x-1 xl:space-x-2">
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

      <div className="flex flex-row">
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
        <Link href="/contact" className="flex-none"> 
          <a className={s.myLink}>Contact</a>
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
    </div>
  )}