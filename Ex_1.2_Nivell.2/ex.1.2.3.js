'use strict'

/* Exercise 1.2: Ternary operator - Nivell 2 */
/* Ex.3 */
  let textDiv = document.getElementById('text')


  let findMax = (num1, num2, num3) => { 
    num1 = parseInt(prompt('Enter number 1')); num2 = parseInt(prompt('Enter number 2')); num3 = parseInt(prompt('Enter number 3')) 
    if (num1 == num2 & num1 == num3) return   textDiv.innerHTML = 'All numbers must be different.'

    num1 > num2 & num1 > num3  ? textDiv.innerHTML = 'num1 és més gran' : 
    num2 > num1 & num2 > num3 ? textDiv.innerHTML = 'num2 és més gran' : textDiv.innerHTML = 'num3 és més gran'
   
  }



