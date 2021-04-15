import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: "smtp.ionos.fr", // "toucheàtoncul", //
  port: 587,
  secure: false,
  auth: {
      user: process.env.EMAIL_WEBMASTER_OJ,
      pass: process.env.EMAIL_WEBMASTER_PASSWORD_OJ
  },
  tls: { 
    rejectUnauthorized: false  // do not fail on invalid certs
  }
})

export default async (req, res) => {
  // Texte du mail à envoyer
  const textM = "Bonjour, vous venez de recevoir une demande via le formulaire de contact du site : <br>" +
          "<br>Nom = " + req.body.nom +
          "<br>Prénom = " + req.body.prenom +
          "<br>email = " + req.body.email +
          "<br>tel = " + req.body.tel +
          "<br>Message = \"" + req.body.message + "\"" +
          "<br><br>Cordialement,<br>Webmaster."
    
  // infos pour le mail
  const emessage = {
    from: process.env.EMAIL_WEBMASTER_OJ,
    to: process.env.EMAIL_CONTACT_OJ,
    subject: "CONTACT - Une demande vient de vous être envoyée via le site.",
    text: textM,
    html: textM
  }
  
  // // Vérification de la connection au serveur de mail => pour les tests, à NE PAS mettre en PROD
  // transporter.verify(function(error, success) {
  //   if (error) {
  //     console.log(error)
  //   } else {
  //     console.log("OK- Server Mail prêt !")
  //   }
  // });

  try{
    const infoReturn = await transporter.sendMail(emessage);
    console.log("TRY OK- email service - MessageId : " + infoReturn.messageId);
    // console.log("TRY OK- email service - infoReturn : " + JSON.stringify(infoReturn));
    return res.status(222).send({messId: infoReturn.messageId});    
  } 
  catch (err) {
    console.log("CATCH ERR- email service send : " + err);
    return res.status(555).send(err);
  } 
}