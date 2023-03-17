// ONCLICK FUNCTION WHICH CALCULATE THE GRADE OF STUDENT ENTERED IN TO THE TEXTBOX

function grading() {
  let grade = document.querySelector("#graded").value;
  let gradedresult = document.querySelector("#gradedresult");

  if (isNaN(grade)) {
    // checks if the user enter a value that is not a number or no value at all
    gradedresult.innerHTML = "ENTER A VALID GRADE !!!"; //Returns enter a valid value if value is not a number
  } else if (grade >= 79 && grade <= 100) {
    //Returns an A if the value is greater than or equal 79 and not greater than 100
    gradedresult.innerHTML = "You scored an A!!!";
  } else if (grade >= 60 && grade < 79) {
    //Returns a B if the value is greater than or equal to 60 and less than 79
    gradedresult.innerHTML = "You scored a B!!!";
  } else if (grade >= 49 && grade < 60) {
    //Returns a C if the value is greater than or equal to 49 and less than 60
    gradedresult.innerHTML = "You scored a C!!!";
  } else if (grade >= 40 && grade < 49) {
    //Returns a D if the value is greater than or equal to 40 and less than 49
    gradedresult.innerHTML = "You scored a D!!!";
  } else if (grade < 40 && grade >= 0) {
    //Returns an E if the value is lesser than 40
    gradedresult.innerHTML = "You scored an E!!!";
  } else if (grade > 100) {
    //Returns enter valid number if grade is greater than 100
    gradedresult.innerHTML = "ENTER A VALID GRADE !!!";
  }
}

// ONCLICK FUNCTION WHICH CALCULATES THE DEMMERIT POINTS BASED ON SPEED ENTERED
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
      "Speed limit has exceeded acceptable limits. LICENSE SUSPENDED!!! ";
  }
}

//ONCLICK FUNCTION CALCULATES GROSS SALARY AND RETURNS THE VALUES OF PAYEE, NHIF DEDUCTION, NSSF DEDUCTION AND THE TOTAL NET SALARY

function netSalCalculator() {
  let basicSalary = document.querySelector("#grosssalary").value; //Take the value of gross salary from the input box and assigns it to variable basicSalary
  let payeeTax = document.querySelector("#payeeTax");
  let nhif = document.querySelector("#NHIF");
  let nssfdeduction = document.querySelector("#NSSF");
  let netsal = document.querySelector("#netsalary");
  let ptax; //ptax variable is declared outside the scope of the payee else if statement as it will be accessed when calculating net salary

  //Calculating Payee Tax
  if (isNaN(basicSalary)) {
    payeeTax.innerHTML = `Payee tax is: ${ptax}`;
  } else if (basicSalary <= 24000) {
    ptax = basicSalary * 0.1;
    payeeTax.innerHTML = `Payee tax is: ${ptax}`;
  } else if (basicSalary > 24000 && basicSalary <= 32333) {
    ptax = basicSalary * 0.25;
    payeeTax.innerHTML = `Payee tax is: ${ptax}`;
  } else if (basicSalary > 32333) {
    ptax = basicSalary * 0.3;
    payeeTax.innerHTML = `Payee tax is: ${ptax}`;
  }

  //Switch case statement which evaluate basicSalary and matches it to the appropriate case
  switch (
    true //true statement makes the switch statement evaluate each case until it finds a match in the case
  ) {
    case basicSalary <= 6000:
      deduction = 150;
      break;
    case basicSalary <= 8000:
      deduction = 300;
      break;
    case basicSalary <= 12000:
      deduction = 400;
      break;
    case basicSalary <= 15000:
      deduction = 500;
      break;
    case basicSalary <= 20000:
      deduction = 750;
      break;
    case basicSalary <= 25000:
      deduction = 850;
      break;
    case basicSalary <= 30000:
      deduction = 900;
      break;
    case basicSalary <= 35000:
      deduction = 950;
      break;
    case basicSalary <= 40000:
      deduction = 1000;
      break;
    case basicSalary <= 45000:
      deduction = 1100;
      break;
    case basicSalary <= 50000:
      deduction = 1200;
      break;
    case basicSalary <= 60000:
      deduction = 1300;
      break;
    case basicSalary <= 70000:
      deduction = 1400;
      break;
    case basicSalary <= 80000:
      deduction = 1500;
      break;
    case basicSalary <= 90000:
      deduction = 1600;
      break;
    case basicSalary > 100000:
      deduction = 1700;
      break;

    default:
      deduction = 0;
      break;
  }

  nhif.innerHTML = `NHIF deduction is :${deduction}`;

  //Using NSSF Act, the employee and the employer contributed 5% of gross pay each
  nssf = basicSalary * 0.05;
  nssfdeduction.innerHTML = `NSSF deduction is :${nssf}`; //Returns the 5% value of gross salary

  // Net salary will amounts to
  let netsalary = basicSalary - (nssf + deduction + ptax); //value of netsalary basicSalary value subtracted from addition of nssf

  netsal.innerHTML = `Net salary is :${netsalary} `;
}
