
// const speedLimit = 70;
// const pointsPerDemerit = 1;
// const maxPoints = 12;
// const currentPoints = 0;
// const speed = parseInt("100"); //  Input Carspeed 
const speedInput = document.querySelector("#speedinput") 
const speedButton = document.querySelector("#checkSpeed")
const pointsOutput = document.querySelector("#pointsOutput")

speedButton.addEventListener("click", calculatePoints)


function checkSpeed(speed) {
  if (speed <= 70) {
    return "Ok";
  } else {
    const points = (speed - 70) / 5;
   if (points <= 12){
    return `${points} points`;
   } else{
    return "License Suspended";
   }
  }
 
  
}

function calculatePoints(){
  const inputValue = Number.parseInt(speedInput.value);
  const speedValue = checkSpeed(inputValue);
  pointsOutput.textContent = speedValue;
}