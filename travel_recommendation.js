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
        //console.log(data);
        const resultat=data[rechercheFinale];//.find((element) => element.name==="Australia");
        console.log(resultat);
        console.log(resultat[0].name);
        affichage.innerHTML +=`<h2>${resultat[0].name}<h2>`;
        affichage.innerHTLM +=`<img scr="${resultat[0].imageUrl}" alt="hjh">`;
        affichage.innerHTML +=`<p>${resultat[0].description}<p>`;
        });
    
}
function effacerRecherche(){
    document.getElementById("recherche").value="";
}