'use strict'

function greet() {
  let textDiv = document.getElementById('text')
  let input = document.getElementById('name').value

  let promise = new Promise((resolve, reject) => {
    if (typeof input === 'string' && input.trim() !== '') {
      setTimeout(() => resolve(`Hola ${input}.`), 2000)
    } else {
      reject ('Enter a valid name.')};
    })

  let promise2 = new Promise((resolve) => 
     setTimeout(() => resolve(`How are you?`), 3000)
  )
 
    Promise.all ( 
    [promise, promise2]  
  ).then ((messages) => {
    textDiv.innerHTML = messages.join(' ') }
  ).catch((error) => 
    textDiv.innerHTML = error)   

}
  
  


