'use strict'

/* Ex.1 */

let textDiv = document.getElementById('text')
const arr = [1, 2, 3, 4]
const arr2 = arr.map(item => item ** 2)

textDiv.innerHTML = arr2.join(', ')

/* Ex.2 */

let textDiv2 = document.getElementById('text2')
const arr3 = [1, 2, 3, 4]
const arr4 = []

for (let i = 0; i <= arr3.length - 1; i++) {
  let check = arr3[i] % 2
  if (check == 0 ) {
    arr4.push(arr3[i])
  }  
}

textDiv2.innerHTML = arr4.join(', ')

/* Ex.3 */

let textDiv3 = document.getElementById('text3')
const arr5 = [1, 10 , 8, 11]

textDiv3.innerHTML = arr5.find( i => i > 10 )

/* Ex.4 */  

let textDiv4 = document.getElementById('text4')
const arr6 = [13, 7, 8, 21]

textDiv4.innerHTML = arr6.reduce((total, i) => total += i)


