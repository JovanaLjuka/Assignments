// Definisati promenljivu koja će biti tipa string i 
// ispisati koliko karaktera ta promenljiva ima.

let ime = "Jo-vana radi domaci, a zatim ide u skolicu.";

console.log(ime.length);

// Za definisanu promenljivu ispisati na kojoj poziciji se nalazi karakter "-".

console.log(ime.indexOf("-"));

// Za definisanu promenljivu ispisati koji se karakter nalazi na poziciji 10.

console.log(ime.charAt(10));

// Za definisanu promenljivu ispisati karaktere od 5. zaključno sa 17. pozicijom. 
// Isti primer uraditi sa metodom slice().

console.log(ime.substring(5,18));
console.log(ime.slice(5,18));

// Za definisanu promenljivu ispisati 10 karaktera počevši od 3.

console.log(ime.substring(3,13));

// Za definisanu promenljivu promeniti reč <i>lab.</i> sa rečju <i>laboratorijske

let novaRec = "Lab analize";

let pravaRec = novaRec.replace("Lab", "Laboratorijske");

console.log(novaRec, pravaRec);

// Od definisane promenljive napraviti niz tako što će se izostaviti karakter "e"

let words = "knjigaeolovkaegumica";

console.log(words.split("e"));

// Prebrojati reči u promenljivoj a.

let a = "knjiga,sveska,olovka,gumica,hemijska";

console.log(a.split(",").length);

// Definisati promenljive a, b, c, d, e i f i dodeliti im 
// vrednosti koje će biti tipa integer i ispisati minimalnu i maksimalnu vrednost.




// Definisati promenljive g i h čija će vrednost biti tipa double i zaokružiti
//  vrednost na prvi najbliži broj, na prvi viši i na prvi niži broj.

let g = Math.pow(Math.random()*100,2);
let h = Math.pow(Math.random()*100,2);

console.log(Math.round(g));
console.log(Math.round(h));
console.log(Math.ceil(g));
console.log(Math.ceil(h));
console.log(Math.floor(g));
console.log(Math.floor(h));

// Generisati slučajan broj

let randomN = Math.random();
console.log(randomN);

// Generisati slučajan ceo broj

let randomI = Math.floor(Math.random() * 100);
console.log(randomI);

// Napisati rezultat operacije stepenovanja 2 na 5.

console.log(Math.pow(2,5));

// Napisati slučajan broj sa dve cifre iza decimalne tačke.

let no = Math.random();
let no2 = no.toFixed(2);
console.log(no, no2);