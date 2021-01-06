function tempInFarenhite(tempInCelsius) {
  let celsiusToFahrenheit = (tempInCelsius * 9) / 5 + 32;
  return celsiusToFahrenheit;
}

function tempInCelsius(tempInFarenhite) {
  let fahrenheitToCelsius = ((tempInFarenhite - 32) * 5) / 9;
  return fahrenheitToCelsius;
}
