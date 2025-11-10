const boutonRecherche = document.getElementById("boutonRecherche");
const boutonEffacer = document.getElementById("boutonEffacer");
const affichage=document.getElementById("affichageResultat");
affichage.style.display="none";

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
    affichage.style.display="block";
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
        if (rechercheFinale==="countries"){
            for (let i = 0; i < resultat.length; i++){
                console.log(resultat[i]);
                console.log((resultat[i].cities).length);
                for(let j = 0; j < resultat[i].cities.length; j++){
                    affichage.innerHTML +=`<img src="${resultat[i].cities[j].imageUrl}">`;
                    affichage.innerHTML +=`<h3>${resultat[i].cities[j].name}<h3>`;
                    affichage.innerHTML +=`<p>${resultat[i].cities[j].description}<p>`;
                    affichage.innerHTML +=`<p><button>Reservation</button></p>`;
                }
            }
        }
        else{
            for (index=0;index<resultat.length; index++)
            {
                affichage.innerHTML +=`<img src="${resultat[index].imageUrl}">`;
                affichage.innerHTML +=`<h3>${resultat[index].name}<h3>`;
                affichage.innerHTML +=`<p>${resultat[index].description}</p>`;
                affichage.innerHTML +=`<p><button>Recherche</button></p>`;
            }
        }
        });
    
}
function effacerRecherche(){
    const affichage=document.getElementById("affichageResultat");
    document.getElementById("recherche").value="";
    affichage.innerHTML =``;
    affichage.style.display="none";
}