
const speedLimit = 70;
const pointsPerDemerit = 1;
const maxPoints = 12;
const currentPoints = 0;
const speed = parseInt("100"); //  Input Carspeed
function checkSpeed(speed) {
  if (speed <= 70) {
    return "Ok";
  }
  console.log(checkSpeed(speed));
  function checkPoints(points) {
    if (points > maxPoints) {
      return "License suspended!";
    } else {
      return "currentPoints" + pointsPerDemerit;
    }
  }
  const excessSpeed = speed - speedLimit;
  const currentPoints = Math.floor(speed / points);
}
