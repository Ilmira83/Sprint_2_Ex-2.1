'use strict'

let textDiv = document.getElementById('text')


function processarCadena (string, callback) {
  let newString = string.toUpperCase()

  callback(newString)
  
}

function printString(string) {
  textDiv.innerHTML = `The uppercased text is: ${string}`
}

processarCadena('Hellow World!', printString)
