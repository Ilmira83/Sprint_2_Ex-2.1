'use strict'

/* Ex.1.6.4 */

let textDiv = document.getElementById('text')
let obj = { nom: 'Ona', edat: 25, ciutat: 'Barcelona' }

for (let key in obj) {
  textDiv.innerHTML += key + ': ' + obj[key] +'<br>'
}

/* Ex.1.6.5 */
let textDiv2 = document.getElementById('text2')
let numeros = [1, 2, 3, 4, 5, 6]

for (let i of numeros) {
 switch (true) {case i <= 5: textDiv2.innerHTML += i + ', '; break;}
}