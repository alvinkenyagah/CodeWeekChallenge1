//onclick function calculates gross salary and returns the values of payee, nhif deduction, nssf deduction and the total net salary

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
  