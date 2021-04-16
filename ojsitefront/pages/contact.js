import Link from 'next/link'
import Image from 'next/image'
import s from '../styles/contact.module.css'
import { useFormik } from 'formik';

export default function Contact() {
    return (
    <>
    {/* Script ReCaptcha Google : à mettre dans le Header de préférence */}
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>

    <div className={s.divcontact}>
      {/* Titre de la page */}
      <p className={s.title}>Nous Rencontrer</p>
      <div class="grid sm:grid-cols-2 sm:divide-x-2 sm:divide-y-0 divide-y-2 divide-ojgreen text-center">
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
     {/**/}  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.7854620819835!2d-0.6610626842099919!3d44.80556067909877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54d973488db243%3A0xe5e17d0cc266689a!2sOpen%20Jujitsu!5e0!3m2!1sfr!2sfr!4v1616939727833!5m2!1sfr!2sfr" 
        width="95%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" class="m-auto pb-4 pt-4"/>
     
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
        <div id="confirmMessage" className={s.confirmMessageOK}>Merci ! Votre message a bien été envoyé.</div>
        <ContactForm />
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

  /* #########################################
     ##    Formulaire de Contact            ##
     #########################################*/
  // appel API d'envoie du mail
  async function sendContactEmail(formValues) { 
    // Appel l'API d'envoi de mail
    const resp = await fetch('/api/emailService', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formValues)
    });

    return resp; // retourne la promesse en asynchrone
  }

  function ContactForm() {
    const formik = useFormik({
      initialValues: {
        nom:'',
        prenom:'',
        email: '',
        tel:'',
        message:'',
        captcha:'',
      },
      validate,
      onSubmit: values => {
        // Check le reCaptcha
        values.captcha = grecaptcha.getResponse();
        //const captchaOK = grecaptcha.getResponse();
        //if(captchaOK === "")
        if(values.captcha === "")
        {
          formik.errors.captcha = "Merci de valider le captcha."
          return false;
        }

        // Envoyer le mail de contact
        sendContactEmail(values)
          .then( isOk => {            
            // Réinitialise le Formulaire
            // alert("onSubmit before if - isOk.status : " + isOk.status + "\n MessId : " + JSON.stringify(isOk)); //TODEL
            if(isOk.status < 300){
              // Réinitialise le Formulaire
              formik.handleReset(); // réinitialise les champs une fois le formulaire validé
              document.getElementById('confirmMessage').style.visibility="visible";  // Affiche le message de confirmation vert              
            }else{              
              alert("Une erreur est survenue lors de l'envoi du message. Merci de bien vouloir réessayer ultérieurement.");
            }            
          });
          // .catch(err => { // Inutile car le try catch est déjà effectif dans l'API.
          //   // alert("Une erreur est survenue lors de l'envoi du message. Merci de bien vouloir réessayer ultérieurement.");
          // });
      },
    });

    return (
      <form class="space-y-4" onSubmit={formik.handleSubmit} noValidate >
        <div class="flex flex-wrap mx-20 space-y-1 md:space-y-5 ">
          <label htmlFor="nom" className={s.ojlabel} >Nom</label>
          <div class="flex flex-shrink w-full space-x-4">
            <input id="nom" type="text" autoComplete="family-name" className={s.ojinput} placeholder="nom" {...formik.getFieldProps('nom')} />
            {formik.touched.nom && formik.errors.nom ? <div className={s.errorText}>{formik.errors.nom}</div> : null}
            <input id="prenom" type="text" autoComplete="given-name" className={s.ojinput} placeholder="prénom" {...formik.getFieldProps('prenom')} />
            {formik.touched.prenom && formik.errors.prenom ? <div className={s.errorText}>{formik.errors.prenom}</div> : null}
          </div>
          <div class="w-full">
            <label htmlFor="email" className={s.ojlabel} >Email <span className={s.ojetoilerouge}>*</span></label>
            <input id="email" type="text" autoComplete="email" className={ formik.touched.email && formik.errors.email ? s.ojinputInvalid : s.ojinput } {...formik.getFieldProps('email')} />
            {formik.touched.email && formik.errors.email ? <div className={s.errorText}>{formik.errors.email}</div> : null}
          </div>
          <div class="w-full">
            <label htmlFor="message" className={s.ojlabel} >Message <span className={s.ojetoilerouge}>*</span></label>
            <textarea id="message" type="text" autoComplete="Votre Message..." className={ formik.touched.message && formik.errors.message ? s.ojinputInvalid : s.ojinput } {...formik.getFieldProps('message')} />
            {formik.touched.message && formik.errors.message ? <div className={s.errorText}>{formik.errors.message}</div> : null}
          </div>
          <div class="w-full">
            <label htmlFor="tel" >Téléphonne</label>
            <input id="tel" type="text" autoComplete="tel" className={ formik.touched.tel && formik.errors.tel ? s.ojinputInvalid : s.ojinput } {...formik.getFieldProps('tel')} />
            {formik.touched.tel && formik.errors.tel ? <div className={s.errorText}>{formik.errors.tel}</div> : null}          
          </div>
          <div class="flex flex-wrap w-full">
            <div class="flex flex-col flex-none">
              <div>Vérification <span className={s.ojetoilerouge}>*</span></div>
              <div id="captcha" class="g-recaptcha" data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_PUBLICSITE_KEY } className={ formik.errors.captcha ? s.ojinputInvalid : null} ></div>
                { formik.errors.captcha ? <div className={s.errorText}>{formik.errors.captcha}</div> : null}
            </div>
            <div class="flex-auto">
              <button type="submit" className={s.ojbouton} >Envoyer le message</button>         
            </div>
          </div>
        </div>
      
      </form>
    )
  }
  // data-callback="captchaCallback"
  const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email requis...';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Format d\'email incorrect.';
    }  

    if (!values.message) {
      errors.message = 'Merci de bien vouloir saisir votre message.';
    } else if (values.message.length < 5) {
      errors.message = 'Ce message est un peu court...';
    }

    if (values.tel && !/^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/i.test(values.tel)) {
      errors.tel = 'Format de téléphone incorrect.';
    }

  /* Garder pour l'exemple
    if (values.nom.length > 15) {
      errors.nom = 'Ne doit pas dépassé les 15 caractères';
    }  
    if (values.prenom.length > 20) {
      errors.prenom = 'Ne doit pas dépassé les 20 caractères';
    }
  */
    if(errors) {
      document.getElementById('confirmMessage').style.visibility="hidden";
    }
    return errors;
  };

  