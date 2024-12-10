'use strict'

/* Ex.1.7.1 */
let textDiv = document.getElementById('text')

let promise = new Promise((resolve) => {
  setTimeout(() => resolve(textDiv.innerHTML = 'Hola món.'), 2000)
})

/* Ex.1.7.2 */
let textDiv2 = document.getElementById('text2')

let promise2 = new Promise((resolve) => {
  setTimeout(() => resolve('Hola món.'), 2000)
})

promise2.then((message) => {textDiv2.innerHTML = message})

/* Ex.1.7.3 */
let textDiv3 = document.getElementById('text3')
let input = prompt('Enter your greeting.')

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {if (input == 'Hola') {
    resolve(('Hola món.'), 2000)
  } else {
    reject ('Oops...')}
  })
})

promise3.then((message) => {textDiv3.innerHTML = 'Then: '+ message
}).catch((message) => {
  textDiv3.innerHTML = 'Catch: '+ message
})