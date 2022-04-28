
var peliculas = [
    {titulo: '"Star Wars"', rating: "5 estrellas", loHasVisto: "Viste" },
    {titulo: '"El Turista"', rating: "3 estrellas", loHasVisto: "No Viste"},
    {titulo: '"Matrix"', rating: "5 estrellas", loHasVisto: "Viste"},
    {titulo: '"Titanic 2"', rating: "2 estrellas", loHasVisto: "No Viste"},
]

for (let i = 0; i < peliculas.length; i++) {
    console.log(peliculas[i]["loHasVisto"] + " " + peliculas[i]["titulo"] + " - " + peliculas[i]["rating"]);
}

// se utilizó combinación de comillas dobles y simples en las películas, para lograr que se imprimiera el valor de los títulos entre comillas dobles.