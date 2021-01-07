function sum(num1, num2) {
  let sum = num1 + num2;
  sum.toString();
  if (num1 === 3 || num2 === 3 && sum.includes("3")){
    return true;
  } else{
    return false;
  }
}

