'use strict'
let textDiv = document.getElementById('text')
let textDiv2 = document.getElementById('text2')
let textDiv3 = document.getElementById('text3')

const arr = ['Ann', 1983, 'Doctor', 'university', 2006]

let [username, birthYear, ...rest] = arr;

textDiv.innerHTML = [username]
textDiv2.innerHTML = [birthYear]
textDiv3.innerHTML = [...rest].join(', ') 

