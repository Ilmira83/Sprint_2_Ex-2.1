'use strict'

/* Exercise 1.2: Ternary operator - Nivell 1 */
/* Ex.1 */
  let textDiv = document.getElementById('text')

  let potConduir = age => { age = parseInt(prompt('Enter your age'))
    age >= 18 ? textDiv.innerHTML ='Pot conduir' : textDiv.innerHTML ='No pot conduir'
  }

  /* Ex.2 */
  let textDiv2 = document.getElementById('text2')

  let compareNums = (num1, num2) => { num1 = parseInt(prompt('Enter number 1')); num2 = parseInt(prompt('Enter number 2')) 
    num1 > num2 ? textDiv2.innerHTML = 'num1 és més gran' : textDiv2.innerHTML = 'num2 és més gran'
  }



