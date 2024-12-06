'use strict'
let textDiv = document.getElementById('text')
let textDiv2 = document.getElementById('text2')
const myBook = {
  author: 'Dina Rubina',
  name: '"Stay tuned"',
  nPages: 200
}

const copiedBook = {...myBook}

textDiv.innerHTML = Object.values(myBook)


copiedBook.author = 'Lev Tolstoy'
console.log(copiedBook)

textDiv2.innerHTML = Object.values(copiedBook)