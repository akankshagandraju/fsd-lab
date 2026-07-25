 let movieName: string = "Baahubali: The Beginning";
let releaseYear: number = 2015;
let hitMovie: boolean = true;

function getMovieDetails(name: string, year: number): string {
    return `${name} was released in ${year} and became a huge success.`;
}

let cast: string[] = [
    "Prabhas",
    "Rana Daggubati",
    "Anushka Shetty",
    "Tamannaah"
];
console.log(getMovieDetails(movieName, releaseYear));
console.log("Main Cast: " + cast.join(", "));
console.log("Blockbuster Status: " + (hitMovie ? "Yes, Super Hit!" : "No"));