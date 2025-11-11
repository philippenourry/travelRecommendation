const boutonRecherche = document.getElementById("boutonRecherche");
const boutonEffacer = document.getElementById("boutonEffacer");
const affichage=document.getElementById("affichageResultat");
let resultat=[];
let id=[];
affichage.style.display="none";

const tableCle=[
    {cle: "beach", valeur: "beaches"},
    {cle: "beache", valeur: "beaches"},
    {cle: "beaches", valeur: "beaches"},
    {cle: "temple", valeur: "temples"},
    {cle: "temples", valeur: "temples"},
    {cle: "countrie", valeur: "countries"},
    {cle: "countries", valeur: "countries"},
    {cle: "countire", valeur: "countries"},
    {cle: "countires", valeur: "countries"},
];

boutonRecherche.addEventListener("click", rechercheDestination);
boutonEffacer.addEventListener("click", effacerRecherche);



function rechercheDestination(){
    //const resultdiv=document.getElementById("result");
    const recherche=document.getElementById("recherche").value.toLowerCase();
    const affichage=document.getElementById("affichageResultat");
    let rechercheFinale="";
    affichage.style.display="block";
    affichage.innerHTML =``;
    let search=tableCle.find(element => element.cle===recherche)
    if (search){
        rechercheFinale=search.valeur}
    //else{
        //affichage.innerHTML +=`<p>il n'existe pas d'entrée pour  "${recherche}"</p>`;
        //affichage.innerHTML +=`<p>veuillez renouveller votre recherche</p>`;
    //}
fetch('travel_recommendation_api.json')
    .then (response => {return response.json();})
    .then (data => {
        resultat=data[rechercheFinale];
        if (rechercheFinale==="countries"){
            for (let i = 0; i < resultat.length; i++){
                for(let j = 0; j < resultat[i].cities.length; j++){
                    affichage.innerHTML +=`<img src="${resultat[i].cities[j].imageUrl}">`;
                    affichage.innerHTML +=`<h3>${resultat[i].cities[j].name}<h3>`;
                    affichage.innerHTML +=`<p>${resultat[i].cities[j].description}<p>`;
                    affichage.innerHTML +=`<p><button id=[${i},${j}] onclick=boutonReserver(id)>Reservation</button></p>`;
                }
            }
        }
        else{
            for (index=0;index<resultat.length; index++)
            {
                affichage.innerHTML +=`<img src="${resultat[index].imageUrl}">`;
                affichage.innerHTML +=`<h3>${resultat[index].name}<h3>`;
                affichage.innerHTML +=`<p>${resultat[index].description}</p>`;
                affichage.innerHTML +=`<p><button id=${index} onclick=boutonReserver(id)>Reservation</button></p>`;
            }
        }
        })
    .catch(err => {
        console.error('Error:', err);
        affichage.innerHTML += 'une erreur est apparue lors du chargement des données.';
    });
}
function effacerRecherche(){
    const affichage=document.getElementById("affichageResultat");
    document.getElementById("recherche").value="";
    affichage.innerHTML =``;
    affichage.style.display="none";
}
function boutonReserver(id){
    if (id.length>1){
        message=("votre réservation a bien été prise en compte pour " + resultat[id[1]].cities[id[3]].name);
    }
    else{
        message=("votre réservation a bien été prise en compte pour " + resultat[id].name);
    }
    alert (message);
}