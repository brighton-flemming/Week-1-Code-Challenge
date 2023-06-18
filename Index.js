function studentGradeGenerator(marks){
    if (marks > 79){
     return "Grade A";
     } else if (marks > 60 && 79 < marks){
        return "Grade B";
     }else if (marks > 49 && 59 < marks){
        return "Grade C";
     }else if (marks > 40 && 49 < marks){
        return "Grade D";
     }else (marks < 40){
        return "Grade E";
     }
}

