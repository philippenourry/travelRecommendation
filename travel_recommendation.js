const boutonRecherche = document.getElementById("boutonRecherche");
const boutonEffacer = document.getElementById("boutonEffacer");


boutonRecherche.addEventListener("click", rechercheDestination);
boutonEffacer.addEventListener("click", effacerRecherche);

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
    const recherche=document.getElementById("recherche").value.toLowerCase();
    console.log(recherche);
}

function effacerRecherche(){
    document.getElementById("recherche").value="";
}