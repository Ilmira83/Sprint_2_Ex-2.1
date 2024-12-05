'use strict'
let textDiv = document.getElementById('text')


function esperarISaludar (name, callback) {

setTimeout(() => callback(name), 2000)
  
}

function printName(name) {

  textDiv.innerHTML = `Hello ${name}!`
}


esperarISaludar('Ann', printName)
