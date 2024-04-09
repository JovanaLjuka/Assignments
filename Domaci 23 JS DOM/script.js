// 1.Za element koji ima id="slika" ispisati vrednosti njegovih atributa
const slika = document.getElementById('slika')
const attr = slika.attributes

console.log(attr)

// 2.Promeniti vrednost alt atributa
slika.alt = 'novialt'

console.log(slika.alt)

// 3.Promeniti sliku za element koji ima id="slika"

slika.src = 'slika.jpg'
slika.style.width = '200px'

// 4.Unutar diva koji ima id="ispis" ubaciti prazan p tag i dodeliti mu neku vrednost za id atribut i ubaciti mu sadrzaj kroz JavaScript./textContent

const ispis = document.getElementById('ispis')

ispis.innerHTML = `<p id="vrednost"></p>`

document.getElementById('vrednost').textContent = 'Tekst proba'

// 5.Unutar diva koji ima id="ispis" ubaciti prazan p tag i dodeliti mu neku vrednost za id atribut, i ubaciti mu sadrzaj kroz JavaScript./innerHTML

ispis.innerHTML = ispis.innerHTML + `<p id="drugi">Drugi tekst proba</p>`

// 6.Prebrojavati tagove koji imaju klasu tekst

const countAll = document.querySelectorAll('.tekst').length
console.log(countAll)

// 7.Prebrojavati p tagove

const countAllP = document.querySelectorAll('p').length
console.log(countAllP)

// 8.Promeniti sadrzaj p taga koji ima id="pasus-tc"

const pasusTc = document.getElementById('pasus-tc')

pasusTc.textContent = 'Lorem ipsum tekst proba'

// 9.Dodelite sadrzaj p tagu sa klasom noviTekst

document.querySelector('.NoviTekst').textContent =
  'sdmnsmckosdvokmsdokvmoksdfmv'

// 10.Prebrojavati atribute elementa koji ima id="slika" i ispisati ih

const countAllAttr = document.getElementById('slika').attributes.length
console.log(countAllAttr)

// 11.Ispisati vrednost alt atributa elementa koji ima id="slika"

console.log(document.getElementById('slika').alt)

// 12. Ispisati vrednost id atributa prvog p taga

const proba = document.querySelectorAll('p')
console.log(proba[0].id)

// 13.Proveriti da li element div id="ispis" ima class atribut

let result = ispis.hasAttribute('class')
console.log(result)

// 14.Promeniti vrednost alt atributa elementa koji ima id="slika"
slika.alt = 'druga promena alta'

console.log(slika.alt)
// 15. Kreirati h1 tag i dodeliti mu sadrzaj
document.querySelector('body').innerHTML =
  document.querySelector('body').innerHTML + `<h1>Sadrzaj naslova<h1/>`
// 16. Proveriti da li element koji ima id="ispis" ima child node-ove

// 17. Ispisati broj child-node-ova koje ima element id="ispis"

// rez za 16 i 17
let rez = [document.querySelector('#ispis').childNodes]
const provera = function () {
  if (NodeList.length == 0) {
    console.log('Element koji ima id ispis n%ema childNodes')
  } else {
    console.log(niz)
  }
}

provera()

// 18.Ispisati prvi sledeci i prvi prethodni node na istom nivou DOM stabla koje ima element id="ispis"

// 19. Ispisati URL adresu dokumenta

// 20.Promeniti boju slova elementa koji ima id="pasus-tc"

document.getElementById('pasus-tc').style.color = 'blue'
