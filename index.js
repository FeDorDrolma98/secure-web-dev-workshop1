// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict'
// si on est pas strict, on est sloppy
// c'est mieux d'etre strict, sinon certaines error restent silencieuse
// ca peut aussi permettre d'etre plus optimisé et rapide



/*
* en fait, pour que le truc de git fonctionne, il faut ouvrir tout le projet, et pas juste le .js
* */

// https://opendata.paris.fr/explore/dataset/lieux-de-tournage-a-paris/information
const filmingLocations = require('./lieux-de-tournage-a-paris.json') // juste une ligne du tableau quand filmingLocations

console.log('🚀 It Works!');

/**
 * 💅 Try to produce the most readable code, use meaningful variable names
 * Your intentions should be clear by just reading the code
 * Good luck, have fun !
 */

//node fct en assynchrone, si on part sur qqch, commence deja a faire
// la suite. du coup, comme on peut faire des callback (qqch.then(qqch.then...)...
// du coup on arrive dans "l'enfer des callback", on est perdu
// du coup pour eviter ca, on peut faire des await (qqch= await qqch.then...)
// mais du coup attend, le code devient bloquant


// 📝 TODO: Number of filming locations
// 1. Make the function return the number of filming locations
function getFilmingLocationsNumber () {
	return filmingLocations.length
}
console.log(`There is ${getFilmingLocationsNumber()} filming locations in Paris`)
console.log(filmingLocations[0]["fields"]["coord_y"])
// 📝 TODO: Filming locations sorted by start date, from most recent to oldest.
// 1. Implement the function
// 2. Log the first and last item in array

/*
for(let i=0;i<filmingLocations.length;i++){
	console.log(filmingLocations[i]["fields"]["nom_tournage"])
}*/

function sortFilmingLocationsByStartDate () {
	console.log(filmingLocations[0]["fields"]["nom_tournage"])
	console.log(filmingLocations[filmingLocations.length-1]["fields"]["nom_tournage"])
	filmingLocations.sort(filmingLocations["field"]["date_debut"])

	return filmingLocations[0]["fields"]["nom_tournage"]
}
console.log(filmingLocations[0]["fields"]["nom_tournage"])


// POUR COMPARER
let arrayOfIds=[{id:1},{id:2},{id:3},{id:4},{id:5}]
const compareFn=(elementA,elementB) => elementB.id-elementA.id
//les ligatures apparaissent et c'est plus joli
const sortedArray=arrayOfIds.sort(compareFn)
console.table(sortedArray)
//console.table permet d'afficher des table. mais log s'arrete au bout de 30 genre, et table fait tout (10000 par ex)
//


// js a un format date
//new Date(value:'2022-09-13T00:00:00+02:00')



// 📝 TODO: Number of filming locations in 2020 only
// 1. Make the function return the number of filming locations in 2020 only
// 2. Log the result
function getFilmingLocationsNumber2020 () {
	return ''
}
console.log()

// 📝 TODO: Number of filming locations per year
// 1. Implement the function, the expected result is an object with years as
// keys and filming locations number as value, e.g:
//    const filmingLocationsPerYear = {
//      '2020': 1234,
//      '2021': 1234,
//    }
// 2. Log the result
function getFilmingLocationsNumberPerYear () {
	return {}
}
console.log()

// 📝 TODO: Number of filming locations by district (arrondissement)
// 1. Implement the function, the expected result is an object with
// district as keys and filming locations number as value, e.g:
//    const filmingLocationsPerDistrict = {
//      '75013': 1234,
//      '75014': 1234,
//    }
// 2. Log the result
function getFilmingLocationsNumberPerDistrict () {
	return {}
}
console.log()

// 📝 TODO: Number of locations per film, sorted in descending order
// 1. Implement the function, result expected as an array of object like:
//    const result = [{film: 'LRDM - Patriot season 2', locations: 12}, {...}]
// 2. Log the first and last item of the array
function getFilmLocationsByFilm () {
	return []
}
console.log()

// 📝 TODO: Number of different films
// 1. Implement the function
// 2. Log the result
function getNumberOfFilms() {
	return ''
}

// 📝 TODO: All the filming locations of `LRDM - Patriot season 2`
// 1. Return an array with all filming locations of LRDM - Patriot season 2
// 2. Log the result
function getArseneFilmingLocations () {
	return []
}

// 📝 TODO: Tous les arrondissement des lieux de tournage de nos films favoris
//  (favoriteFilms)
// 1. Return an array of all the districts of each favorite films given as a
//    parameter. e.g. :
//    const films = { 'LRDM - Patriot season 2': ['75013'] }
// 2. Log the result
function getFavoriteFilmsLocations (favoriteFilmsNames) {
	return []
}
const favoriteFilms =
	[
		'LRDM - Patriot season 2',
		'Alice NEVERS',
		'Emily in Paris',
	]

// 📝 TODO: All filming locations for each film
//     e.g. :
//     const films = {
//        'LRDM - Patriot season 2': [{...}],
//        'Une jeune fille qui va bien': [{...}]
//     }
function getFilmingLocationsPerFilm () {
	return { }
}

// 📝 TODO: Count each type of film (Long métrage, Série TV, etc...)
// 1. Implement the function
// 2. Log the result
function countFilmingTypes () {
	return {}
}

// 📝 TODO: Sort each type of filming by count, from highest to lowest
// 1. Implement the function. It should return a sorted array of objects like:
//    [{type: 'Long métrage', count: 1234}, {...}]
// 2. Log the result
function sortedCountFilmingTypes () {
	return []
}

/**
 * This arrow functions takes a duration in milliseconds and returns a
 * human-readable string of the duration
 * @param ms
 * @returns string
 */
const duration = (ms) => `${(ms/(1000*60*60*24)).toFixed(0)} days, ${((ms/(1000*60*60))%24).toFixed(0)} hours and ${((ms/(1000*60))%60).toFixed(0)} minutes`

// 📝 TODO: Find the filming location with the longest duration
// 1. Implement the function
// 2. Log the filming location, and its computed duration

// 📝 TODO: Compute the average filming duration
// 1. Implement the function
// 2. Log the result
