// onclick function which calculates the demmerit points based on speed entered
function speedDetector() {
    let need4speed = document.querySelector("#speed").value; //Take the value of speed from the input box and assigns it to variable need4speed
    let speeder = document.querySelector("#speeder");
  
    if (isNaN(need4speed)) {
      //isNaN method is used to ensure the value entered is a valid number
      speeder.innerHTML = "ENTER A VALID SPEED!!!";
    } else if (need4speed <= 70 && need4speed >= 0) {
      speeder.innerHTML = "OK!";
    } else if (need4speed >= 75 && need4speed < 79) {
      speeder.innerHTML = "Speed limit exceeded by +5km/h: +1 demerit points";
    } else if (need4speed >= 80 && need4speed < 84) {
      speeder.innerHTML = "Speed limit exceeded by +10km/h: +2 demerit points";
    } else if (need4speed >= 85 && need4speed < 89) {
      speeder.innerHTML = "Speed limit exceeded by +15km/h: +3 demerit points";
    } else if (need4speed >= 90 && need4speed < 94) {
      speeder.innerHTML = "Speed limit exceeded by +20km/h: +4 demerit points";
    } else if (need4speed >= 95 && need4speed < 99) {
      speeder.innerHTML = "Speed limit exceeded by +25km/h: +5 demerit points";
    } else if (need4speed >= 100 && need4speed < 104) {
      speeder.innerHTML = "Speed limit exceeded by +30km/h: +6 demerit points";
    } else if (need4speed >= 105 && need4speed < 109) {
      speeder.innerHTML = "Speed limit exceeded by +35km/h: +7 demerit points";
    } else if (need4speed >= 110 && need4speed < 114) {
      speeder.innerHTML = "Speed limit exceeded by +40km/h: +8 demerit points";
    } else if (need4speed >= 115 && need4speed < 119) {
      speeder.innerHTML = "Speed limit exceeded by +45km/h: +9 demerit points";
    } else if (need4speed >= 120 && need4speed < 124) {
      speeder.innerHTML = "Speed limit exceeded by +50km/h: +10 demerit points";
    } else if (need4speed >= 125 && need4speed < 129) {
      speeder.innerHTML = "Speed limit exceeded by +55km/h: +11 demerit points";
    } else if (need4speed > 130) {
      //Returns the license suppended after confirming the value exceeds the 12 point demerit limit
      speeder.innerHTML =
        "Speed limit has exceeded acceptable limits. LICENSE SUSPENDED! ";
    }
  }
  
  