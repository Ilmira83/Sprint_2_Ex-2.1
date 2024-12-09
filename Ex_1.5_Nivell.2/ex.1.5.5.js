'use strict'

let textDiv = document.getElementById('text')
const arr = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]

textDiv.innerHTML  = arr.filter( i => i >= 10).map((i) => i**2 ).reduce((total, i) => total += i) 


