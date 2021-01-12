function sum(num1, num2) {
  let sum = num1 + num2;
  
  if (num1 === 3 || num2 === 3 || sum.toString().match(/3/g)){
  return true;
  } else {
  return false;
  }
  }
