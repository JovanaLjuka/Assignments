// 1. Napisati program koji za uneti broj proverava da li je deljiv sa 3 i deljiv sa 4 i ako jeste pronalazi koren
//  tog broja a ako nije proverava da li je deljiv sa 5 i ako jeste onda radi kvadrat.

let num = parseInt(prompt('Enter a number.'))

if (typeof num == 'number' && !isNaN(num)) {
  if (num % 3 == 0 || num % 4 == 0) {
    console.log(Math.sqrt(num))
  } else {
    if (num % 5) {
      console.log(Math.pow(num, 2))
    } else {
      console.log('Number is not divisible with 3,4 and 5')
    }
  }
} else {
  console.log('Please enter valid number!')
}

// 2. Avion je poleteo u sati_poleteo sati, min_poleteo minuta i sekundi_poleteo sekundi.
// Ako je dužina leta duzina_leta sekundi, u koliko sati, minuta i sekundi je sleteo? Sa if obeybediti sve tacne unose.

let hourFlight = parseInt(prompt('Enter an hour of flight:'))
if (hourFlight > 24) {
  hourFlight %= 24
}
let minFlight = parseInt(prompt('Enter minute of flight:'))
if (minFlight > 60) {
  minFlight %= 60
}
let secFlight = parseInt(prompt('Enter second of flight:'))
if (secFlight > 60) {
  secFlight %= 60
}

let flightLengthHour = 0
let flightLengthMin = 0
let flightLengthSecond = 0
let flightLength = parseInt(prompt('Enter flight length(in secound):'))

flightLengthHour = Math.floor(flightLength / 3600) //4
flightLengthMin = Math.floor((flightLength % 3600) / 60) //3
flightLengthSecond = Math.floor((flightLength % 3600) % 60) //17

let flightEndHour = hourFlight + flightLengthHour
if (flightEndHour > 24) {
  flightEndHour = flightEndHour % 24
}
let flightEndMin = minFlight + flightLengthMin
if (flightEndMin > 60) {
  flightEndMin %= 60
}
let flightEndSec = secFlight + flightLengthSecond
if (flightEndSec > 60) {
  flightEndSec %= 60
}
console.log(
  'Flight ended at: ' + flightEndHour + ':' + flightEndMin + ':' + flightEndSec
)

// 3.Pomocu switch naredbe za uneti broj mseeca ispisati njegov broj dana.

let month = parseInt(prompt('Enter a month number.'))
let year = parseInt(prompt('Enter a year'))

let daysInMonth

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    daysInMonth = 31
    console.log(
      'The selected month is ' + month,
      'and has ' + daysInMonth,
      'days.'
    )
    break

  case 4:
  case 6:
  case 9:
  case 11:
    daysInMonth = 30
    console.log(
      'The selected month is ' + month,
      'and has ' + daysInMonth,
      'days.'
    )
    break

  case 2:
    if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
      daysInMonth = 29
      console.log(
        'The selected month is ' + month,
        'and has ' + daysInMonth,
        'days.'
      )
    } else {
      daysInMonth = 28
      console.log(
        'The selected month is ' + month,
        'and has ' + daysInMonth,
        'days.'
      )
    }
    break
  default:
    alert('Invalid month.')
}

// Ponavljanje gradiva sa prezentacije

let number = parseInt(prompt('Enter a number.'))

let jedinica = broj % 10
let desetica = (broj % 100) / 10
let stotina = broj / 100

let proizvod = jedinica * desetica * stotina

console.log('proizvod')

let time = parseInt(prompt('Enter time in seconds.'))

let timeHour = Math.floor(time / 3600)
let timeMin = Math.floor((time % 3600) / 60)
let timeSec = Math.floor((time % 3600) % 60)

console.log('Entered ' + time + 'is' + timeHour + timeMin + timeSec)
