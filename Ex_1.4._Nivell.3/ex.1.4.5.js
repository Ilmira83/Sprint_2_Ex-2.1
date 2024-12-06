'use strict'

let textDiv = document.getElementById('text')

function spread(num1, num2,num3) {
  textDiv.innerHTML = num1 + num2 + num3
}

const arr = [1,2,3]

spread(...arr)


