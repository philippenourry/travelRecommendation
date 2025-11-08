const boutonRecherche=document.getElementById("boutonRecherche");
const boutonEnvoi=document.getElementById("envoi");

boutonEnvoi.addEventListener("click", formulaireEnvoye);

function formulaireEnvoye(){
    const nom=document.getElementById("nom");
    const mail=document.getElementById("mail");
    const message=document.getElementById("message");
    if (nom && mail && message){
        messageEnvoye="votre message a bien été envoyé à l'adresse: "+ mail.value
        alert(messageEnvoye);
        document.getElementById("nom").value="";
        document.getElementById("mail").value="";
        document.getElementById("message").value="";
    }   
}