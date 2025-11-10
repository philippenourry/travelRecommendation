const boutonRecherche = document.getElementById("boutonRecherche");
const boutonEffacer = document.getElementById("boutonEffacer");

const tableCle=[
    {cle: "beach", valeur: "beaches"},
    {cle: "temple", valeur: "temples"},
    {cle: "countrie", valeur: "countries"}];

boutonRecherche.addEventListener("click", rechercheDestination);
boutonEffacer.addEventListener("click", effacerRecherche);



function rechercheDestination(){
    //const resultdiv=document.getElementById("result");
    const recherche=document.getElementById("recherche").value.toLowerCase();
    const affichage=document.getElementById("affichageResultat");
    affichage.innerHTML =``;
    for (index=0; index<tableCle.length; index++){
        if (recherche==tableCle[index].cle) {
            rechercheFinale=tableCle[index].valeur;
            break;
        }
        else {
            rechercheFinale=recherche;
        }
    }
fetch('travel_recommendation_api.json')
    .then (response => {return response.json();})
    .then (data => {
        const resultat=data[rechercheFinale];
        console.log(resultat);
        for (index=0;index<resultat.length; index++)
        {
            affichage.innerHTML +=`<h2>${resultat[index].name}<h2>`;
            affichage.innerHTML +=`<img scr="${resultat[index].imageUrl}" alt="angkor">`;
            affichage.innerHTML +=`<p>${resultat[index].description}<p>`;
        }
        });
    
}
function effacerRecherche(){
    const affichage=document.getElementById("affichageResultat");
    document.getElementById("recherche").value="";
    affichage.innerHTML =``;
}