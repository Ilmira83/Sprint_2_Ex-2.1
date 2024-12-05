'use strict'

/* Exercise 1.3: Callbacks  - Nivell 1 */
/* Ex.1 */
  let textDiv = document.getElementById('text')
 
  function processar (num, callback) { 
    let result = num * 2;
    callback(result);  
 }  
 
    function display(result) {
    textDiv.innerHTML = `The result is ${result}` 
    
  }
  processar(2, display)

  /* Ex.2 */

  let textDiv2 = document.getElementById('text2')

  function calculator (num1, num2, callback) {
      
   return textDiv2.innerHTML = `The result is ${callback(num1, num2)}.`
  
  }
   
  function sumNums(x, y) {
    return x + y
  }

 calculator(5, 5, sumNums )



