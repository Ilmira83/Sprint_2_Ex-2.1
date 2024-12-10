'use strict'

async function greet() {
  let textDiv = document.getElementById('text')
  let input = document.getElementById('greeting').value

  let promise = new Promise((resolve, reject) => {
  if (input == 'Hola') {
    setTimeout(() => resolve('Hola món.'), 2000)
  } else {
    reject ('Oops...')};
  })

  
  try {
    textDiv.innerHTML = await promise;
  } catch (error) {
    textDiv.innerHTML = `Oops...`
  }
}


