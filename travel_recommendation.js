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
    for (index=0; index<tableCle.length; index++){
        if (recherche==tableCle[index].cle) {
            rechercheFinale=tableCle[index].valeur;
            break;
        }
        else {
            rechercheFinale=recherche;
        }
    }

}
fetch('travel_recommendation_api.json')
    .then (response => {return response.json();})
    //.then (data => {console.log(data);})
    .then (data => {
        const condition = data.${rechercheFinale}.find(item => item.name.toLowerCase()==="australia");
        if(condition){
            const pays = condition.name;
            console.log(pays);
                }
    })


function effacerRecherche(){
    document.getElementById("recherche").value="";
}