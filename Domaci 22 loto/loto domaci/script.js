let brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
let randomBrojevi = [];
const cont = document.querySelector(".container");
const dugme = document.querySelector("button");

function randomNumber(arr) {

    const randomIndex = Math.floor(Math.random() * arr.length);
    const broj = arr[randomIndex];
    return broj;

}

for (let i = 0; i < 10; i++) {

    var randomBroj = randomNumber(brojevi);

    if (randomBroj !== randomBrojevi[randomBrojevi.length - 1]) {
        randomBrojevi.push(randomBroj);
    }

}


console.log(randomBrojevi);



function loto() {
    dugme.classList.add("sakrij");
    cont.classList.add("sredi");


    for (let i = 0; i < 7; i++) {

        var slika = document.createElement("img");
        slika.setAttribute("src", `${randomBrojevi[i]}.png`);
        cont.appendChild(slika);

    }

}



dugme.addEventListener("click", loto);

