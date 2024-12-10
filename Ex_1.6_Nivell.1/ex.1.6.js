'use strict'
/* Ex.1.6.1 */
let textDiv = document.getElementById('text')
const noms = ['Anna', 'Bernat', 'Clara']

 noms.forEach( i => textDiv.innerHTML += i + '<br>' )

 /* Ex.1.6.2 */

 let textDiv2 = document.getElementById('text2')
 const noms2 = ['Anna', 'Bernat', 'Clara']
 for (let i of noms2) {
  textDiv2.innerHTML += i +'<br>'
 }

 /* Ex.1.6.3 */
 let textDiv3 = document.getElementById('text3')
 const numeros = [1, 2, 3, 4, 5, 6]

 textDiv3.innerHTML = numeros.filter(i => i % 2 == 0)