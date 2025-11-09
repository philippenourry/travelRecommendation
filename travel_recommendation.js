const boutonEnvoi=document.getElementById("boutonEnvoi");
const boutonRecherche=document.getElementById("boutonRecherche");
const boutonEffacer=document.getElementById("boutonEffacer");

boutonEnvoi.addEventListener('click', formulaireEnvoye);
boutonRecherche.addEventListener('click', rechercheDestination);
BoutonEffacer.addEventListener('click', effacerRecherche);

function formulaireEnvoye(){
    const nom=document.getElementById("nom").value;
    const mail=document.getElementById("mail").value;
    const message=document.getElementById("message").value;
    if (nom && mail && message){
        messageEnvoye="votre message a bien été envoyé à l'adresse: "+ mail
        alert(messageEnvoye);
        document.getElementById("nom").value="";
        document.getElementById("mail").value="";
        document.getElementById("message").value="";
    }   
}

function rechercheDestination(){
    const Recherche=document.getElementById("recherche").value.toLowercase();
    console.log(recherche);
}

function effacerRecherche(){
    document.getElementById("recherche").value="";
}