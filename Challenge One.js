const markInput = document.querySelector("#marksinput") 
const submitButton = document.querySelector("#mark-button")
const gradeOutput = document.querySelector("#gradeOutput")

submitButton.addEventListener("click", calculateGrade)

 function studentGradeGenerator(marks){
    if (marks > 79){
    return "Grade A";
     } else if (marks > 60 && marks < 79){
           return "Grade B";
      }else if (marks > 49 && marks < 59){
        return "Grade C";
    }else if (marks > 40 &&  marks < 49){
       return "Grade D";
   }else{
       return "Grade E";
    }
}
function calculateGrade(){
 const inputValue = Number.parseInt(markInput.value);
 const grade = studentGradeGenerator(inputValue);
 gradeOutput.textContent = grade;
}
