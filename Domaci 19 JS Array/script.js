// Kreirati js skript koji ce uneti u niz 100 random celih pozitivnih brojeva,
// a zatim iz niza ukloniti sve elemente koji su manji od 10.
// Ispisati oba niza u console.log.

let niz = []

for (let i = 1; i < 100; i++) {
  niz.push(Math.floor(Math.random() * 100))
}

console.log(niz)

niz = niz.filter(function (i) {
  if (i >= 10) {
    return i
  }
})

console.log('Niz od 10 je', niz)

// Napisati js skript koji ce iz niza od n prirodnih brojeva koji su random uneti u niz ispisati:
// Prvi clan niza
// Poslednji clan niza
// Srednji clan niza ukoliko niz ima neparan broj elemenata
// Aritmeticku sredinu niza.
// Najmanji element u nizu
// Najveci

let niz1 = []

for (let i = 1; i < 100; i++) {
  niz.push(Math.floor(Math.random() * 100))
}

console.log(niz)

prviUnizu = niz[0]

poslednji = [niz.length - 1]

if (niz.length % 2 !== 0) {
  const srednji = niz.length / 2
}

let ukupno = 0
let brojac = 0

for (let i = 0; i < niz.length; i++) {
  zbir = zbir + niz[i]
  brojac++
}

let prosek = zbir / brojac

let najmanji = niz[0]

for (let i = 0; i < niz.length; i++) {
  if (najmanji > niz[i]) {
    najmanji = niz[i]
  }
}

let najveci = niz[0]
for (let i = 0; i < niz.length; i++) {
  if (najmanji < niz[i]) {
    najmanji = niz[i]
  }
}
