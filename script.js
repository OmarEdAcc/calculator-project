document
  .getElementById("velocityCalc")
  .addEventListener("click", calculateVelocity);
document
  .getElementById("distanceCalc")
  .addEventListener("click", calculateDistance);
document.getElementById("timeCalc").addEventListener("click", calculateTime);

function calculateVelocity() {
  let dis = +document.getElementById("distance").value;
  let tim = +document.getElementById("time").value;
  let show1 = (dis / tim).toFixed(2);
  document.getElementById(
    "showHere"
  ).innerHTML = `The Velocity is ${show1} m/s`;
}

function calculateDistance() {
  let vel = +document.getElementById("velocity").value;
  let tim = +document.getElementById("time").value;
  let show2 = (tim * vel).toFixed(2);
  document.getElementById("showHere").innerHTML = `The distance is ${show2}m`;
}

function calculateTime() {
  let vel = +document.getElementById("velocity").value;
  let dis = +document.getElementById("distance").value;
  let show3 = (dis / vel).toFixed(2);
  document.getElementById("showHere").innerHTML = `The Time is ${show3}s`;
}
