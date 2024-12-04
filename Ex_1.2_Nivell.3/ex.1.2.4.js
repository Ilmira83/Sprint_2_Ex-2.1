'use strict'

/* Exercise 1.2: Ternary operator - Nivell 3 */
/* Ex.4 */

  let textDiv = document.getElementById('text')
  const arr = [5, 6, 8, 9, 4, 3]
  let check = null

  let parOImpar = arr => { for (let i = 0; i <= arr.length-1; i++) {
     check = arr[i] % 2 
     check === 0 ? textDiv.innerHTML += `${arr[i]} num és paro. <br>` : textDiv.innerHTML += ` ${arr[i]} num és imparo. <br>`
    }
  }



