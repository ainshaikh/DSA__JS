// 1
// let simpleArray = ['one', 2, 'three', true, false, undefined, null];
// console.log(simpleArray.length);

// // 2
// let myArray = ["a", "b", "c", "d"];
// // Only change code below this line
// myArray[1]='w';
// // Only change code above this line
// console.log(myArray);

// // 3
// function popShift(arr) {
//     let popped = arr.shift() ; // Change this line
//     let shifted = arr.pop(); // Change this line
//     return [popped, shifted];
//   }
  
//   console.log(popShift(['challenge', 'is', 'not', 'complete']));


//   // 4
//   function mixedNumbers(arr) {
//     // Only change code below this line
//   arr.unshift('I', 2, 'three');
//   arr.push(7,'VIII', 9);
//     // Only change code above this line
//     return arr;
//   }
  
//   console.log(mixedNumbers(['IV', 5, 'six']));

//   // 5
  

//   // factorial algorithm

  function factorial(num){
    let product = 1;
    for(let i=2; i<=num; i++){
      product *= i;
    }

    return product;
    
  }
  console.log(factorial(7));


  // recursion--

  function factorial(num){
    if(num === 0){
      return 1;
    }
    return num*factorial(num-1);
  }
  console.log(factorial(5));
  