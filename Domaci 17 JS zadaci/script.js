// 1. Napisati program za učitavanje i ispis broja.

let x = parseInt(prompt('Enter number'))
console.log('Entered number is ' + x + '.')

// 2	Napisati program za učitavanje i ispis dva broja.

let a = parseInt(prompt('Enter the first number'))
let b = parseInt(prompt('Enter the second number'))
console.log('Entered numbers are ' + a + 'and' + b + '.')

// 3	Napisati program za učitavanje dva broja i ispisti ih u obrnutom redoslijedu učitavanja.

let c = parseInt(prompt('Enter the first number'))
let d = parseInt(prompt('Enter the second number'))
console.log('The entered numbers are ' + d + ' and ' + c)

// 4	Napisati program za učitavanje i ispis tri broja.

let e = parseInt(prompt('Enter the first number'))
let f = parseInt(prompt('Enter the second number'))
let g = parseInt(prompt('Enter the third number'))
console.log('The entered numbers are ' + e + ', ' + f + ', and ' + g)

// 5	Napisati program za učitavanje tri broja i ispis ih u obrnutom redoslijedu učitavanja.

console.log('The entered numbers are ' + g + ', ' + f + ', and ' + e)

// 6	Napisati program za ispis sume dva broja

let v = parseInt(prompt('Enter the first number'))
let l = parseInt(prompt('Enter the second number'))
let sum = v + l
console.log('The sum of the entered numbers is: ' + sum)

// 7	Izračunati kvadrat učitanog broja.

let num = parseInt(prompt('Enter number'))
let sqnum = math.pow(num)
console.log('Square num is' + sqnum)

// 8	Izračunati aritmetičku sredinu dva broja.

let num1 = parseInt(prompt('Enter the first number'))
let num2 = parseInt(prompt('Enter the second number'))
let arithmeticMean = (num1 + num2) / 2
console.log('The arithmetic mean of the two numbers is: ' + arithmeticMean)

// 9	Napisati program za izračunavanje aritmetičku sredinu tri broja.

let a1 = parseInt(prompt('Enter the first number'))
let b1 = parseInt(prompt('Enter the second number'))
let c1 = parseInt(prompt('Enter the third number'))
let mean = (a1 + b1 + c1) / 3
console.log('The arithmetic mean of the three numbers is: ' + mean)

// 10	Izračunati kvadrat učitanog broja i ispisati kao novu varijablu. Koristiti funkcije.

let inputNumber = parseInt(prompt('Enter a number'))
let square = Math.pow(inputNumber)
console.log('The square of the entered number is: ' + square)

// 11	Učitati 3 broja. Naći sumu prvog i trećeg te razliku trećeg i prvog.

let numA = parseInt(prompt('Enter the first number'))
let numB = parseInt(prompt('Enter the second number'))
let numC = parseInt(prompt('Enter the third number'))
let sumFirstAndThird = numA + numC
let differenceThirdAndFirst = numC - numA
console.log('The sum of the first and third numbers is: ' + sumFirstAndThird)
console.log(
  'The difference between the third and first numbers is: ' +
    differenceThirdAndFirst
)

// 12	Učitati 3 broja. Naći razliku trećeg i drugog te proizvod prvog i drugog.
// 13	Izračunati kvadratni korijen učitanog broja i ispisati kao novu varijablu. Koristiti funkcije. (Obavezno učitati negatvni broj)
// 14	Izračunati sumu kvadrata dva učitana broja.
// 15	Izračunati sumu kvadrata tri učitana broja.
// 16	Izračunati sumu kubova dva učitana broja.
// 17	Izračunati sumu kubova tri učitana broja.
// 18	Učitati 2 broja. Izračunati korijen aritmetičke sredine njihovih apsolutnih vrijednosti.
// 19	Učitati 4 broja. Izračunati korijen aritmetičke sredine njihovih apsolutnih vrijednosti.
// 20	Izračunati korijen sume kvadrata dva učitana broja.
// 21	Izračunati korijen sume kvadrata tri učitana broja.
// 22	Izračunati korijen apsolutne vrijednosti sume kvadrata dva učitana broja.
// 24	Izračunati površinu kvadrata.
// 25	Izračunati obim kvadrata.
// 26	Izračunati obim kocke.
// 27	Izračunati površinu kocke.
// 28	Izračunati zapreminu kocke.
// 30	Izračunati dijagonalu kvadrata.
// 31	Napisati program za izračunavanje površine pravougaonika.
// 32	Napisati program za izračunavanje obima pravougaonika.
// 33	Napisati program za izračunavanje dijagonalu pravougaonika.
// 34	Poznata je površina pravougaonika i stranica a. Izračunati obim.
// 35	Poznata je površina pravougaonika i stranica a. Izračunati dijagonalu.
// 36	Napisati program za izračunavanje izraza: 2x, a / 3.
// 37	Za učitani poluprečnik izračunati obim kruga.
// 38	Zaani polu učitprečnik izračunati površinu kruga.
// 39	Za poznati poluprečnik izračunati obim i površinu kruga.
// 40	Za poznatu površinu kruga izračunati poluprečnik i obim kruga.
// 41	Za poznat obim kruga izračunati poluprečnik i površinu kruga.
// 42	Za poznati poluprečnik izračunati površinu i zapreminu lopte.
// 43	Napisati program za izračunavanje obima trougla:
// 44	Napisati program za izračunavanje površine trougla na dva načina:
// koristeći Heronovu formulu: S=(a+b+c)/2, P=(S(S-a)(S-b)(S-c))1/2

// 45	Učitati stranice trougla i naći obim i površinu.
// 46	Za poznate vrijednosti stranice i visine trougla izračunati odgovarajuću površinu (P=a*h/2).
// 47	Napisati program za izračunavanje stranice trougla ako je poznata površina i visina trougla (P=a*h/2)
// 48	Za poznate vrijednosti površine i stranice trougla izračunati odgovarajuću visinu (P=a*h/2) .
// 49	Izračunati površinu i hipotenuzu pravouglog trougla, ako su poznate katete.
// 50	Izračunati dijalgonale d i D kocke (za poznatu stranicu a).
// 51	Izračunati O, P i V kvadra (za poznate stranice a, b, c).
// 52	Izračunati dijagonale d i D kvadra (za poznate stranice a, b, c).
// 53	Za poznate vrijednosti površine i baze valjka izračunati odgovarajuću visinu.
// 54	Napisati program koji će za učitane vrijednosti x i y izračunati i ispisati vrijednosti a i b prema izrazima:
// a=x+y
// b=x-y
// 55	Napisati program koji izračunava slijedeće izraze:
// c = x * y
// d = x - y
// e = c - x + y
// 56	Izračunati vrijednosti prema izrazima:
// a = x * y
// b = x + y
// c = b / x

// 57	Napisati program za izračunavanje sume, proizvoda i razlike dva učitavana broja.
// 58	Napisati program za učitavanje tri broja. Prva dva sabrati i podjeliti sa trećim.
// 59	Napisati program za ispis prosjeka 5 brojeva.
// 60	Napisati program koji za ispis rezultata izraza: (x-y)/3.
// 73	Napisati program za pretvaranje galona u litre. (1 galon = 4.54 litre).
// 74	Napisati program za pretvaranje dolara u evre.
// 75	Napisati program za pretvaranje km/h u m/s.
// 76	Napisati program za pretvaranje Kelvinovih stepena u Celzujsove stepene.
// 77	Napisati program kojim se prevodi temperatura iz skale Celzija u skalu Farenhajta.
// 78	Napisati program za pretvaranje dužine puta u miljama u dužinu u kilometrima (1 milja = 1,825 km).
// 79	Napisati program za pretvaranje dužine puta u kilometrima u dužinu u miljama (1 milja = 1,825 km).
// 80	Napisati program za pretvaranje veličinu fajla izraženu u kilobajtima u veličinu u bajtima.
// 81	Napisati program za pretvaranje veličinu fajla izraženu u megabajtima ispisuje u kilobajtima.
// 82	Napisati program za računanje godina starosti.
// 83	Jedan radnik uradi posao za M dana a drugi za N dana. Za koliko dana bi uradili posao ako rade zajedno.
// 84	Ako vozilo pređe sa x litara s km. Koliko potroši litara na 100 km.
// 86	U banci imate određenu sumu novca. Godišnja kamata je 17%. Pod predpostavkom da ništa ne podižete u banci, koliko ćete novaca imati nakon tri godine.
// 87	Napisati program za izračunavanje godišnje kamate.
// 88	Napisati program za izračunavanje pređenog puta (s) pri jednolikom ubrzanom kretanju ( s=v0t + at2/2 ).
// 89	Izračunati vrijednost sinusne i kosinusne funkcije za učitani ugao u radijanima.
// 95	Napisati program koji vrijeme učitano u satima, minutama i sekundama izračunava i ispisuje u sekundama.
// 96	Putovanje traje n sekundi. Izračunaj koliko je to sati, minuta i sekundi.
// 97	Učitati koordinate tačke M1(x1,y1) izračunati udaljenost od koordinatnog početka.
// 98	Učitati koordinate dvije tačke M1(x1,y1) i M2(x2,y2) i izračunati pojedinačnu udaljenost tačaka od koordinatnog početka.
// 99	Učitati koordinate dvije tačke M1(x1,y1) i M2(x2,y2) i izračunati udaljenost tačaka.
// 100	Napisati program koji učitava dvocifreni broj i ispisuje odvojeno cifre.
// 101	Napisati program za cjelobrojno dijeljenje sa 100 i 10 kao i izračunavanje ostatka 100 i 10 trocifrenog broja.
// 102	Napisati program za izracunavanje: a MOD 2, a MOD -2, -a MOD 2, -a MOD -2
// 103	Napisati program za izracunavanje: INT (a/2), INT (a/-2), INT (-a/2), INT (-a/-2)
// 104	Napisati program za izračunavanje količnika i ostatka pri dijeljenju 7 sa 2 ( DIV i MOD)
// 105	Napisati program koji izračunava i ispisuje rezultate:
// 1 + 7 MOD 3 * (2 + 7) DIV 2
// (1 + 7) MOD 3 * 2 + 7 DIV 2
