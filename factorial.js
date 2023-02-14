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