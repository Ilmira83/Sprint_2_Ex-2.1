'use strict'

/* Ex.1.6.6 */

let textDiv = document.getElementById('text')
const noms = ['Anna', 'Bernat', 'Clara']

for (let i of noms) {
  textDiv.innerHTML += noms.indexOf(i) + ': ' + i + '<br>'
}