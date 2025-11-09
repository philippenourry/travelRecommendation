const boutonRecherche = document.getElementById("boutonRecherche");
const boutonEffacer = document.getElementById("boutonEffacer");
const tableCle=[
    {cle: "beaches", valeur: "beach"},
    {cle: "temples", valeur: "temple"},
    {cle: "countries", valeur: "countrie"}];

boutonRecherche.addEventListener("click", rechercheDestination);
boutonEffacer.addEventListener("click", effacerRecherche);



function rechercheDestination(){
    const recherche=document.getElementById("recherche").value.toLowerCase();
    for (index=0; index<tableCle.length; index++){
        if (recherche==tableCle[index].cle) {
            rechercheFinale=tableCle[index].valeur;
        }
        else {
            rechercheFinale=recherche;
        }
    }
console.log(recherches);
    fetch('./travel_recommendation_api.json')
        .then (response => response.json());
        //.then(data =>{
        
        }

function effacerRecherche(){
    document.getElementById("recherche").value="";
}