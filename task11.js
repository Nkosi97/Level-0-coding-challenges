function commonLetters(str1, str2) {
  let strX = str1.split("");
  let strY = str2.split("");
  let outPut = "";
  for (let i = 0; i < strX.length; i++) {
    for (let j = 0; j < strY.length; j++) {
      if (strY[j] == strX[i]) {
        outPut += strX[i];
      }
    }
  }
  return `Common letters: ${outPut}`;
}

