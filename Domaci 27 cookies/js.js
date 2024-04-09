// Cookie is a small text file stored on your computer
// used to remember information about the user saved
// in name=value pairs

// In order to check if we have cookies enable
console.log(navigator.cookieEnabled)

// to add a cookie
document.cookie =
  'firstName=SpongeBob expires=Sun, 1 January 2030, 12:00:00 UTC; path=/'
// default path

console.log(document.cookie) // returns object

document.cookie =
  'lastName=SquarePants expires=Sun, 1 January 2030, 12:00:00 UTC; path=/'

// function to create a cookie

function setCookie(name, value, expdays) {
  const date = new Date()
  date.setTime(date.getTime() + expdays * 24 * 60 * 60 * 1000) // 24 hours * 60 min * 60 sec * 1000 milsec
  let expires = 'expires=' + date.toUTCString()
  document.cookie = `${name}=${value}; ${expires}; path=/`
}

setCookie('email', 'sponge@gmail.com', 365)

console.log(document.cookie)

// function to delete a cookie

function deleteCookie(name) {
  setCookie(name, null, null)
}

function getCookie(name) {
  const cDecoded = decodeURIComponent(document.cookie)
  const cArray = cDecoded.split('; ') //to make an array of cookie name value pairs
  let result = null

  cArray.forEach((element) => {
    if (element.indexOf(name) == 0) {
      result = element.substring(name.length + 1)
    }
  })
  return result
}

const firstText = document.querySelector('#firstText')
const lastText = document.querySelector('#lastText')
const submitBtn = document.querySelector('#submitBtn')
const cookieBtn = document.querySelector('#cookieBtn')

submitBtn.addEventListener('click', () => {
  setCookie('firstName', firstText.value, 365)
  setCookie('lastName', lastText.value, 365)
})

cookieBtn.addEventListener('click', () => {
  firstText.value = getCookie('firstName')
  lastText.value = getCookie('lastName')
})

// kada ocemo da stavimo da cookie istice npr za 45 dana

let datum = new Date()

datum.setDate(datum.getDate() + 45)

document.cookie = 'username=rasha; expires=' + datum.toUTCString()

if (document.cookie) {
  let niz = document.cookie.split(';')

  for (let i = 0; i < niz.length; i++) {
    let novi = niz[i].trim().split('=')
  }
} else {
  console.log('nema podataka')
}

// LOCAL STORAGE

// npr hocemo da napravimo niz koji zelimo da ubacimo kao value u local storage

let niz = ['engleski', 'srpski', 'francuski']

localStorage.setItem('kurs', JSON.stringify(niz))

// ako npr sada zelimo nesto da dodamo u ovaj niz

const niz2 = JSON.parse(localStorage.getItem('kurs'))

niz2.push('grcki')
localStorage.setItem('kurs', JSON.stringify(niz2))

// local storage keeps the data even when we refresh the page

// basic syntax

localStorage.setItem('keyname', input.value)
