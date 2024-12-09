'use strict'

let textDiv = document.getElementById('text')
let textDiv2 = document.getElementById('text2')
const arr = [ 11, 12, 13, 14 ]

textDiv.innerHTML  = `Every method: Are there all the values bigger than 10? ${arr.every( i => i >= 10)}`

textDiv2.innerHTML  = `Some method: Is there any value bigger than 10? ${arr.some( i => i >= 10)}`
