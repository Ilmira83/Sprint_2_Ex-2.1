'use strict'

let textDiv = document.getElementById('text')

function processarElements (arr, callback) {
   callback(arr)
  }
  
  function printArray(arr) {

    for (let i = 0; i <= arr.length-1; i++ ) {

    textDiv.innerHTML += `Element ${i} is ${arr[i]}! <br>`
    }
  }
  
  const userArr = [5,9,8,6,2,7]
  processarElements(userArr, printArray)