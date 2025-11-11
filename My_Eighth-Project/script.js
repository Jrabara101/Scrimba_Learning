function roundDown(num, decimals) {
  const factor = Math.pow(10, decimals);
  return Math.floor(num * factor) / factor;
}

function updateConversions() {
  const value = Number(document.getElementById('input-value').value);

  // Length
  const metersToFeet = roundDown(value * 3.28084, 3);
  const feetToMeters = roundDown(value / 3.28084, 3);
  document.getElementById('length-result').textContent =
    `${value} meters = ${metersToFeet} feet | ${value} feet = ${feetToMeters} meters`;

  // Volume
  const litersToGallons = roundDown(value * 0.264172, 3);
  const gallonsToLiters = roundDown(value / 0.264172, 3);
  document.getElementById('volume-result').textContent =
    `${value} liters = ${litersToGallons} gallons | ${value} gallons = ${gallonsToLiters} liters`;

  // Mass
  const kilosToPounds = roundDown(value * 2.20462, 3);
  const poundsToKilos = roundDown(value / 2.20462, 3);
  document.getElementById('mass-result').textContent =
    `${value} kilos = ${kilosToPounds} pounds | ${value} pounds = ${poundsToKilos} kilos`;
}

document.getElementById('convert-btn').addEventListener('click', updateConversions);
document.getElementById('toggle-theme').addEventListener('click', function() {
  document.body.classList.toggle('dark');
});

updateConversions();
