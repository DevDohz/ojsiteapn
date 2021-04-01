import Link from 'next/link'
import Image from 'next/image'
import s from '../styles/contact.module.css'

export default function Contact() {
    return (
    <>
    <div className={s.divcontact}>
      {/* Titre de la page */}
      <p className={s.title}>Nous Rencontrer</p>
      <div class="grid grid-cols-2 divide-x-2 text-center divide-ojgreen">
        {/* Partie Gauche : info de contact */}
        <div>
          <p class="textOJsoulignerVert text-2xl"><span class="font-bold">Open</span> <span class="text-ojgreen">Jujitsu</span></p>
          <p>51 avenue de Madran, 33600 Pessac</p>
          <p>05 56 36 94 49</p>
          <p>contact<span class="text-ojgreen font-bold">@</span>openjujitsu<span class="text-ojgreen font-bold">.</span>fr</p>
        </div>

        {/* Partie Droite : Horaires */}
        <div>        
          <p class="textOJsoulignerVert text-xl">Horaires accueil et inscriptions :</p>
          <p><span class="font-bold">Lundi, Mardi, Jeudi et Vendredi :</span> 17h à 20h</p>
          <p><span class="font-bold">Mercredi :</span> 14h à 20h30</p>
          <p><span class="font-bold">Samedi :</span> 14h à 19h</p>
        </div>
      </div>

     {/* Carte Google Maps sur OpenJujitsu */}
    {/*   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.7854620819835!2d-0.6610626842099919!3d44.80556067909877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54d973488db243%3A0xe5e17d0cc266689a!2sOpen%20Jujitsu!5e0!3m2!1sfr!2sfr!4v1616939727833!5m2!1sfr!2sfr" 
        width="95%" height="400" style={{ border: 0 }} allowfullscreen="" loading="lazy" class="m-auto pb-4 pt-4"/>
     */}
    </div>
    
    {/* Liens réseaux Sociaux */}
    <div className={s.divcontact}>     
      <div class="flex flex-row justify-center">
        <div class="flex-none">
          <a href="https://www.facebook.com/openjujitsu/" target="_blank">
            <Image
                src="/icon-facebook-ojlike.png"
                alt="Instagram icon"
                width={70}
                height={70}
              />
          </a>
        </div>
        
        <div class="flex-shrink w-96">
          <p className={s.title}>Nous Suivre</p>
        </div>
        
        <div class="flex-none">
          <a href="https://www.instagram.com/openjujitsu/" target="_blank">
            <Image
                src="/icon-instagram-ojlike.png"
                alt="Instagram icon"
                width={70}
                height={70}
              />
          </a>
        </div>
      </div>      
    </div>

      {/* Formulaire de contact */}
      <div className={s.divcontact}>
        <p className={s.title}>Nous Contacter</p>
        <p class="text-center">Formulaire de contact</p>
        <Form />
      </div>

      {/* Faux Footer */}
      <h4 class="py-4 ml-96">
        <Link href="/">
          <a>← retour à l'accueil</a>
        </Link>
      </h4>
    </>
    )
  }

  function Form() {
    const sendContactMessage = event => {
      event.preventDefault() // don't redirect the page
      // where we'll add our form logic

    }
  
    return (
      <form onSubmit={sendContactMessage} class="space-y-4">
        <div class="flex flex-wrap mx-10 space-y-4 md:space-y-0">
          <label htmlFor="nom" className={s.ojlabel} >Nom :</label>
          <div class="flex flex-shrink w-full space-x-4">
            <input id="nom" type="text" autoComplete="Nom" className={s.ojinput} placeholder="nom" />
            <input id="prenom" type="text" autoComplete="Prénom" className={s.ojinput} placeholder="prénom" />           
          </div>
          <div class="w-full">
            <label htmlFor="email" className={s.ojlabel} >Email :</label>
            <input id="email" type="text" autoComplete="Email" className={s.ojinput} required />
          </div>
          <div class="w-full">
            <label htmlFor="message" className={s.ojlabel} >Message :</label>
            <textarea id="message" type="text" autoComplete="Votre Message..." className={s.ojinput} required />
          </div>
          <div class="w-full">
            <label htmlFor="tel" className={s.ojlabel} >Téléphonne :</label>
            <input id="tel" type="text" className={s.ojinput} autoComplete="" />
          </div>
          <div class="flex flex-shrink w-full space-x-4">
            
            <button type="submit" class="h-10 px-5 border text-ojwhite bg-ojblack transition-colors duration-150 rounded-lg focus:shadow-outline hover:bg-ojgreen hover:text-ojblack hover:font-bold ">Envoyer le message</button>         
          </div>
        </div>
        
      </form>
    )
  }