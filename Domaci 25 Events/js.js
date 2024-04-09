// 1  Klikom unutar prvog tekstualnog polja promeniti pozadinsku boju i
// boju sadržaja tog elementa.

const paraf = document.querySelector('.paraf')
paraf.addEventListener('click', changeColor)
function changeColor() {
  paraf.style.color = 'blue'
  paraf.style.backgroundColor = 'red'
}

// 2 Izlaskom iz drugog tekstualnog polja ispisati današnji datum u
// sistemskom dijalogu alert.

const drugopolje = document.querySelector('.drugopolje')
drugopolje.addEventListener('mouseleave', function () {
  let datum = new Date()
  alert(datum)
})

// 3 Izborom neke opcije iz padajuće liste ispisati njenu vrednost.

const lista = document.getElementById('lista')
lista.addEventListener('change', handleChange)
function handleChange(event) {
  const izabrano = event.target.value
  console.log(izabrano)
}

// 4  Pritiskom bilo kog tastera unutar trećeg polja oivčiti to polje
// crvenom bojom.

const trece = document.querySelector('.trece')
trece.addEventListener('click', function () {
  trece.style.border = '1px solid red'
})

// 5 Pritiskom bilo kog tastera unutar četvrtog polja, ispisati ispod
// polja broj koji je taster pritisnut.

const cetvrto = document.querySelector('.cetvrto')
cetvrto.addEventListener('keypress', function (event) {
  cetvrto.textContent = 'Pritisnuto dugme' + event.keyCode
})

// 6 Prelaskom kursora miša preko tastera promeniti pozadinsku boju
// istog, a izlaskom iz polja tastera vratiti boju u prvobitnu.

document.getElementById('oboji').addEventListener('mouseover', function () {
  this.style.backgroundColor = 'green'
})
document.getElementById('oboji').addEventListener('mouseout', function () {
  this.style.backgroundColor = ''
})
// 7 Skrolovanjem elementa koj ima id="dogadjajScroll" ispisati njegove
// dimenzije.

document
  .getElementById('dogadjajScroll')
  .addEventListener('scroll', function () {
    console.log(
      'Dimenzije elementa' + this.offsetWidth + 'x' + this.offsetHeight
    )
  })

// 8 Klikom na taster promeniti boju slova elementa koji ima id="pasus".

document.getElementById('oboji').addEventListener('click', function () {
  document.getElementById('pasus').style.color = 'green'
})

//  9 Ispisati poruku u sistemskom dijalogu 3 sekunde nakon učitavanja
// stranice.

setTimeout(() => {
  alert('Poruka 3 sekunde nakon ocitavanja stranice')
}, 3000)

// 10 Ispisati trenutno vreme prilikom učitavanja stranice u formatu
// s:m:s, sa stalnim odbrojavanjem sekundi.

function updateTime() {
  let now = new Date()
  let hours = now.getHours()
  let minutes = now.getMinutes()
  let seconds = now.getSeconds()
  document.querySelector('.vreme').innerText =
    hours + ':' + minutes + ':' + seconds
  setTimeout(updateTime, 1000)
}
updateTime()

// 12 Generisati slučajan četvorocifreni broj koji se menja na svakih 5
// sekundi.

function generisiBroj() {
  let rendomBroj = Math.floor(Math.random() * 9000) + 1000
  document.querySelector('.generisi').innerText = 'Random broj je' + rendomBroj
  setTimeout(generisiBroj, 5000)
}

// 13 Inicijalno sakriti tekstualno polje koje ima id="tb5", i prikazati
// ga nakon čekiranja checkbox-a.

document.getElementById('cekboks').addEventListener('change', function () {
  let tekstPolje = document.querySelector('.tb5')
  if (this.checked) {
    tekstPolje.style.display = 'block'
  } else {
    tekstPolje.style.display = 'none'
  }
})
