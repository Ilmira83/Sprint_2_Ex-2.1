'use strict'
let textDiv = document.getElementById('text')
const address = {
  Country: 'Spain',
  City: 'Barcelona',
  Postal_code: 80070
}

const address2 = {
  Continent: 'Europe',
  Province: 'Barcelona',
  Street: 'av. Girona'
}

const combinedAddress = {...address, ...address2}

textDiv.innerHTML = Object.values(combinedAddress)