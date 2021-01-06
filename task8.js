function timeConvert(num) {
  let hours = num / 60;
  let minutes = num % 60;
  let hoursSingular = "hour";
  let hourPlural = Math.floor(hours);

  if (hourPlural > 1) {
    hoursSingular = "hours";
  }
  if (num < 60) {
    return `${minutes} minutes`;
  }
  return `${hourPlural} ${hoursSingular} and ${minutes} minutes`;
}
console.log(timeConvert(120));
