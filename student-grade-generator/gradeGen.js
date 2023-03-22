// onclick function which calculate the grade of student entered in to the textbox

function grading() {
  let grade = prompt("Enter your grade between 0 to 100");
  // grade = document.querySelector("#graded").value;
  let gradedresult = document.querySelector("#gradedresult");

  if (isNaN(grade)) {
    // checks if the user enter a value that is not a number or no value at all
    gradedresult.innerHTML = "ENTER A VALID GRADE!"; //Returns enter a valid value if value is not a number
  } else if (grade >= 79 && grade <= 100) {
    //Returns an A if the value is greater than or equal 79 and not greater than 100
    gradedresult.innerHTML = "GRADE: A";
  } else if (grade >= 60 && grade < 79) {
    //Returns a B if the value is greater than or equal to 60 and less than 79
    gradedresult.innerHTML = "GRADE: B";
  } else if (grade >= 49 && grade < 60) {
    //Returns a C if the value is greater than or equal to 49 and less than 60
    gradedresult.innerHTML = "GRADE: C";
  } else if (grade >= 40 && grade < 49) {
    //Returns a D if the value is greater than or equal to 40 and less than 49
    gradedresult.innerHTML = "GRADE: D";
  } else if (grade < 40 && grade >= 0) {
    //Returns an E if the value is lesser than 40
    gradedresult.innerHTML = "GRADE: E";
  } else if (grade > 100) {
    //Returns enter valid number if grade is greater than 100
    gradedresult.innerHTML = "ENTER A VALID GRADE!";
  }
}
