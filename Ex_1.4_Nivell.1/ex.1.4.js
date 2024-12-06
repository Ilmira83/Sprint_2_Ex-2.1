'use strict'

/* Exercici 1.4: Rest and Spread operators - Nivell 1*/
/* Ex.1 */
let textDiv = document.getElementById('text')
const arr1 = [1, 2, 3, 4]
const arr2 = ['a', 'b', 'c',]

const arrCombined = [...arr1, ...arr2];

textDiv.innerHTML = arrCombined.join(', ')

/* Ex.2 */
let textDiv2 = document.getElementById('text2')

function suma (...params) {
  let sum = null
  for (let nums of params) sum += nums
  return textDiv2.innerHTML = `${sum}`
}

suma(1,2,3,4,5,6,7,8,9)