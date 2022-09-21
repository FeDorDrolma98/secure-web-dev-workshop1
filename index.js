// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict'


// si on est pas strict, on est sloppy
// c'est mieux d'etre strict, sinon certaines error restent silencieuse
// ca peut aussi permettre d'etre plus optimisé et rapide

// en fait, pour que le truc de git fonctionne, il faut ouvrir tout le projet, et pas juste le .js
// ctrl + alt + l pour tout beau
// ctrl + d pour dupliquer la ligne


// https://opendata.paris.fr/explore/dataset/lieux-de-tournage-a-paris/information
const filmingLocations = require('./lieux-de-tournage-a-paris.json') // juste une ligne du tableau quand filmingLocations

console.log('\n🚀 It Works!');

/**
 * 💅 Try to produce the most readable code, use meaningful variable names
 * Your intentions should be clear by just reading the code
 * Good luck, have fun !
 */


// node fct en assynchrone, si on part sur qqch, commence deja a faire
// la suite. du coup, comme on peut faire des callback (qqch.then(qqch.then...)...
// du coup on arrive dans "l'enfer des callback", on est perdu
// du coup pour eviter ca, on peut faire des await (qqch= await qqch.then...)
// mais du coup attend, le code devient bloquant


console.log("\n📝 TODO 1: Number of filming locations");
// 1. Make the function return the number of filming locations
function getFilmingLocationsNumber() {
    return filmingLocations.length
}

console.log(`There is ${getFilmingLocationsNumber()} filming locations in Paris`)
console.log("\n📝 TODO 2: Filming locations sorted by start date, from most recent to oldest.");
// 1. Implement the function
// 2. Log the first and last item in array


/*// DU CRADE ET DE LA MAGIE---------------------------------------
arrayOfIds[0].id<arrayOfIds[1].id? console.log("C'est vrai") : console.log("C'est faux")
const titi=arrayOfIds[0].id<arrayOfIds[1].id ? "c'est vrai" : "c'est faux"
console.log(titi)
//---------------------------------------------------------------

for(let i=0;i<filmingLocations.length;i++){
	console.log(filmingLocations[i]["fields"]["nom_tournage"])
}

/// POUR LES BOUCLES --------------------------------------------------------------
const titi=toto.map() ca boucle et ca modifie direct

const tototo=[1,3,4,2]
const tititi={id:1,name:"toto"}// parfois trucs cachés (ex: ...,{{QQCH}})

for (const element of tototo){
	console.log(element)}

for (let i=0;i<tototo.length;i++){
	console.log(tototo[i])}

for(const totokey in tititi){
	if (Object.hasOwn(tititi,totokey))// bien de faire gaffe aux trucs cachés
	console.log('${totokey} is ${tititi[totokey]}')	//permet de boucler sur un objet}

for(const key of Object.keys(tititi)){
	console.log('${totokey} is ${tititi[totokey]}')
	//fait un tableau avec clé de l'obect, et du coup on boucle sur le tableau}
//------------------------------------------------------------------------------*/


/*console.log(filmingLocations[0]["fields"]["date_debut"], filmingLocations[50]["fields"]["date_debut"],filmingLocations[filmingLocations.length - 1]["fields"]["date_debut"])

filmingLocations.sort(function (a, b) {
    return a["fields"]["date_debut"] - b["fields"]["date_debut"]
})
const daty = new Date(filmingLocations[0]["fields"]["date_debut"])
const daty2 = new Date(filmingLocations[50]["fields"]["date_debut"])
const daty3 = new Date(filmingLocations[filmingLocations.length - 1]["fields"]["date_debut"])
console.log(daty3 - daty > 0)
console.log(daty3 - daty2 > 0)*/


// console.log(filmingLocations[0]["fields"]["date_debut"],filmingLocations[filmingLocations.length - 1]["fields"]["date_debut"])



/*
if (new Date(filmingLocations[0]["fields"]["date_debut"]) - new Date(filmingLocations[num]["fields"]["date_debut"])>0) {
    console.log("true")
    const filmy=filmingLocations[0]
    const deepfilmy=JSON.parse(JSON.stringify(filmy))
    console.log(filmingLocations[0]["fields"]["date_debut"])
    console.log(filmingLocations[num]["fields"]["date_debut"])


    filmingLocations[0] = JSON.parse(JSON.stringify(filmingLocations[num]))
    filmingLocations[num] = deepfilmy
    console.log(filmingLocations[0]["fields"]["date_debut"])
    console.log(filmingLocations[num]["fields"]["date_debut"])
}


*/

function sortFilmingLocationsByStartDate() {
    console.log("Les premieres et dernieres dates :",filmingLocations[0]["fields"]["date_debut"],filmingLocations[filmingLocations.length - 1]["fields"]["date_debut"])

    for (let numy=0; numy < 5; numy++) {// 5 au lieu de filmingLocations.length-2
        for (let j = numy; j < filmingLocations.length; j++) {
            if (j < filmingLocations.length - 1) {
                let filmy = filmingLocations[j]
                let deepfilmy=JSON.parse(JSON.stringify(filmy))

                if (new Date(filmingLocations[j]["fields"]["date_debut"]) - new Date(filmingLocations[j + 1]["fields"]["date_debut"])>0) {
                    filmingLocations[j] = JSON.parse(JSON.stringify(filmingLocations[j + 1]))
                    filmingLocations[j + 1] = deepfilmy
                }// si un element a une date plus grande, il passe apres
            }
        }
        numy ++
    }// pour chaque elements, on va tout parcourir, comme c'est très long, on a écris un chiffre au lieu de filmingLocations.length-2

    console.log("Les premieres et dernieres dates apres classement (rudimentaire ici):",filmingLocations[0]["fields"]["date_debut"],filmingLocations[filmingLocations.length - 1]["fields"]["date_debut"])
}
sortFilmingLocationsByStartDate() //10766 element a FilmingLocation, bcp d'ou on ne fait pas tout le classement

// for(const filmi of filmingLocations){
// 	console.log(filmi["fields"]["date_debut"])
// }

// POUR COMPARER------------------------------------------
/*
let arrayOfIds=[{id:1},{id:2},{id:3},{id:4},{id:5}]
const compareFn=(elementA,elementB) => elementB.id-elementA.id
//les ligatures apparaissent et c'est plus joli
const sortedArray=arrayOfIds.sort(compareFn)
console.table(sortedArray)
//console.table permet d'afficher des table. mais log s'arrete au bout de 30 genre, et table fait tout (10000 par ex)
 */
//------------------------------------------------------


/* POINT MAP/NUMBER/FOREACH -----------------------------------
const sourceArray=[1,2,3,4,5,6,7,8,9,10]
console.log(sourceArray.map(number => number<5? number : null))//map s'attend a avoir une valeur a remplacer, ici par null, du coup on a le tab mais avec des null apres le 5
console.log(sourceArray.filter(number => number<5))//filter recoit un bool, retourne un tab plus petit du coup, sans les elements plus grand que 5
//console.log(sourceArray.forEach(number => number<5))//foreach reboucle sur tableau, du coup la ca ne marche pas
------------------------------------------------*/

console.log("\n📝 TODO 3: Number of filming locations in 2020 only")
// 1. Make the function return the number of filming locations in 2020 only
// 2. Log the result
function getFilmingLocationsNumber2020() {
    let list2020=0
    for (let i = 0; i < filmingLocations.length; i++){
        if(filmingLocations[i]["fields"]["annee_tournage"]==="2020"){
            list2020++
        }
    }
    return list2020
}// mongo tres utilisé en ce moment
console.log(`There is ${getFilmingLocationsNumber2020()} filming locations in 2022`)

console.log("\n📝 TODO 4: Number of filming locations per year")
// 1. Implement the function, the expected result is an object with years as
// keys and filming locations number as value, e.g:
//    const filmingLocationsPerYear = {
//      '2020': 1234,
//      '2021': 1234,
//    }
// 2. Log the result
function getFilmingLocationsNumberPerYear() {
    const filmingLocationsPerYear={}
    for (let i = 0; i < filmingLocations.length; i++){
        const year=filmingLocations[i]["fields"]["annee_tournage"]
        if(Number.isInteger(filmingLocationsPerYear[year])){
            filmingLocationsPerYear[year]+=1}
        else{
            filmingLocationsPerYear[year]=1}
    }
    return {filmingLocationsPerYear}
}
console.log('Here are the number of filming location per year :')
console.table(getFilmingLocationsNumberPerYear())


console.log("\n📝 TODO 5: Number of filming locations by district (arrondissement)")
// 1. Implement the function, the expected result is an object with
// district as keys and filming locations number as value, e.g:
//    const filmingLocationsPerDistrict = {
//      '75013': 1234,
//      '75014': 1234,
//    }
// 2. Log the result
function getFilmingLocationsNumberPerDistrict() {
    const filmingLocationsPerDistrict={}
    for (let i = 0; i < filmingLocations.length; i++){
        const dist=filmingLocations[i]["fields"]["ardt_lieu"]
        if(Number.isInteger(filmingLocationsPerDistrict[dist])){
            filmingLocationsPerDistrict[dist]+=1
        }
        else{filmingLocationsPerDistrict[dist]=1}
    }
    return {filmingLocationsPerDistrict}
}
console.log('Here are the number of filming location per district :')
console.table(getFilmingLocationsNumberPerDistrict())

console.log("\n📝 TODO 6: Number of locations per film, sorted in descending order")
// 1. Implement the function, result expected as an array of object like:
//    const result = [{film: 'LRDM - Patriot season 2', locations: 12}, {...}]
// 2. Log the first and last item of the array
function getFilmLocationsByFilm() {
    const result=[]
    for (let i=0;i<filmingLocations.length;i++){
        const nom=filmingLocations[i]["fields"]["nom_tournage"]
        //on verifie si ce film est deja dans le tableau et on recupere l'indice si besoin
        let dejala=false
        for(let j=0;j<result.length;j++){
            if(result[j]["film"]===nom) {
                dejala = JSON.parse(JSON.stringify(j))
            }
        }
        if(Number.isInteger(dejala)){result[dejala]["locations"]+=1}
        else{//si on a pas trouvé de films avec ce nom, on le créé
            const filmloc= {
                "film":nom,
                "locations":1
            }
            result.push(filmloc)
        }
    }
    result.sort((a,b)=>{return a.locations-b.locations;})

    return result.reverse()
}//tjrs mettre === plutot que ==, a part si on sait ce qu'on fait
console.log('Here are the movie with the highest number of filming locations, and the one with the lowest ones :')
console.table([getFilmLocationsByFilm()[0],getFilmLocationsByFilm()[getFilmLocationsByFilm().length-1]])

console.log("\n📝 TODO 7: Number of different films")
// 1. Implement the function
// 2. Log the result
function getNumberOfFilms() {
    return getFilmLocationsByFilm().length
}
console.log(`There is ${getNumberOfFilms()} different films`)



console.log("\n📝 TODO 8: All the filming locations of `LRDM - Patriot season 2`")
// 1. Return an array with all filming locations of LRDM - Patriot season 2
// 2. Log the result
function getArseneFilmingLocations() {
    const result=[]
    for(let i=0;i<filmingLocations.length;i++){
        if(filmingLocations[i]["fields"]["nom_tournage"]==="LRDM - Patriot season 2"){
            result.push(filmingLocations[i]["fields"])//ardt_lieu
        }
    }
    return result
}
console.log("Here are all the adresses used to film 'LRDM - Patriot season 2':")
console.table(getArseneFilmingLocations())

console.log("\n📝 TODO 9: Tous les arrondissement des lieux de tournage de nos films favoris")
//  (favoriteFilms)
// 1. Return an array of all the districts of each favorite films given as a
//    parameter. e.g. :
//    const films = { 'LRDM - Patriot season 2': ['75013'] }
// 2. Log the result
function getFavoriteFilmsLocations(favoriteFilmsNames) {
    const result=[]
    for(let i=0;i<favoriteFilmsNames.length;i++){
        const nomfilm=JSON.parse(JSON.stringify(favoriteFilmsNames[i]))
        //result[i]={nomfilm: []}
        result[i]={}
        result[i][nomfilm]=[]

        //result.push({nomfilm:[1]})

        //`There is ${getFilmingLocationsNumber()}
    }// on fabrique le tableau demandé qui comporte des objets de type : {nom_film : [tableau,avec,tous,les,arrondissements,utilisés]}

    /*result[1]['Alice NEVERS'].push(2)
    console.log(result[1]['Alice NEVERS'])
    console.log(Object.keys(result[1])[0]);
    for(const elem of result[1]['Alice NEVERS']){console.log(elem)}
    if(Object.keys(result[1])[0]==='Alice NEVERS'){console.log(true)}*/

    for(let j=0;j<result.length;j++){
        for(let i=0;i<filmingLocations.length;i++){//on va répertorier les arrondissements
            if(filmingLocations[i]["fields"]["nom_tournage"]===Object.keys(result[j])[0]){
                let test=false
                for(const elem of result[j][Object.keys(result[j])[0]]){
                    if(filmingLocations[i]["fields"]["ardt_lieu"]===elem){test=true}
                }// on verifie que l'arrondissement n'est pas déjà repertorié
                if(!test){result[j][filmingLocations[i]["fields"]["nom_tournage"]].push(filmingLocations[i]["fields"]["ardt_lieu"])}
            }// on regarde si cela correspond au film recherché
        }// on parcours tout filmingLocations a la recherche des arrondissements
    }// on rempli les tableaux d'arrondissements en parcourant ce tableau qui comporte les films a reperer
    return result
}

const favoriteFilms =
    [
        'LRDM - Patriot season 2',
        'Alice NEVERS',
        'Emily in Paris',
        'TOUT S\'EST BIEN PASSE',
    ]

console.log(getFavoriteFilmsLocations(favoriteFilms))

console.log("\n📝 TODO 10: All filming locations for each film")
//     e.g. :
//     const films = {
//        'LRDM - Patriot season 2': [{...}],
//        'Une jeune fille qui va bien': [{...}]
//     }
function getFilmingLocationsPerFilm() {
    const films={}
    for (let i=0;i<filmingLocations.length;i++){
        //if(filmingLocations[i]["fields"]["nom_tournage"]==="Alice NEVERS"){
        const nom=filmingLocations[i]["fields"]["nom_tournage"]
        //const nom="Emily in Paris"
        if(!Array.isArray(films[nom])){
            films[nom]=[]}
        films[nom].push(filmingLocations[i]["fields"])
        //}

    }
    return films
}
console.table("All of this is too long to, so here is just the location of one movie.")
console.table(getFilmingLocationsPerFilm()['Tournage S\u00e9rie Web'])// passer ca en commentaire si on veut voir toutes les locations par films
//console.log(getFilmingLocationsPerFilm()) //repasser ca en non-commentaire pour la consigne

console.log("\n📝 TODO 11: Count each type of film (Long métrage, Série TV, etc...)")
// 1. Implement the function
// 2. Log the result
function countFilmingTypes() {
    const result=[]
    for (let i=0;i<filmingLocations.length;i++){
        const type=filmingLocations[i]["fields"]["type_tournage"]
        //on verifie si ce film est deja dans le tableau et on recupere l'indice si besoin
        let dejala=false
        for(let j=0;j<result.length;j++){
            if(result[j]["type"]===type) {
                dejala = JSON.parse(JSON.stringify(j))
            }
        }
        if(Number.isInteger(dejala)){result[dejala]["locations"]+=1}
        else{//si on a pas trouvé de type avec ce nom, on le créé
            const filmloc= {
                "type":type,
                "locations":1
            }
            result.push(filmloc)
        }
    }
    return result

}
console.log('Here are the number of filming location per types :')
console.table(countFilmingTypes())



console.log("\n📝 TODO 12: Sort each type of filming by count, from highest to lowest")
// 1. Implement the function. It should return a sorted array of objects like:
//    [{type: 'Long métrage', count: 1234}, {...}]
// 2. Log the result
function sortedCountFilmingTypes(result) {
    result.sort((a,b)=>{return a.locations-b.locations;})
    return result.reverse()
}
console.log('Here are the number of filming location per types sorted by count from highest to lowest :')
console.table(sortedCountFilmingTypes(countFilmingTypes()))

/**
 * This arrow functions takes a duration in milliseconds and returns a
 * human-readable string of the duration
 *  @param ms
 *  @returns string
 *  */
const duration = (ms) => `${(ms / (1000 * 60 * 60 * 24)).toFixed(0)} days, ${((ms / (1000 * 60 * 60)) % 24).toFixed(0)} hours and ${((ms / (1000 * 60)) % 60).toFixed(0)} minutes`

//console.log("\n📝 TODO 13: Find the filming location with the longest duration")
// 1. Implement the function
// 2. Log the filming location, and its computed duration

//console.log("\n📝 TODO 14: Compute the average filming duration")
// 1. Implement the function
// 2. Log the result



// console.log(Object.keys(locationsPerDistrict).map((district) => ({'arrondissement': district, 'count': locationsPerDistrict[district]})).sort((a,b) => b.count-a.count))