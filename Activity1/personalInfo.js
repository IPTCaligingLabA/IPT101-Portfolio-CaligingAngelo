const studentInfo = {
    studentName: "Caliging, Angelo A.",
    idNumber: "2026-6762",
    yearLevel: "2nd Year",
    program: "Information Technology"
};

// Course 1
const course1Name = "Arts Appreciation";
const course1Units = 3;
const course1Grade = 97;

// Course 2
const course2Name = "Networking 1";
const course2Units = 3;
const course2Grade = 93;

// Course 3
const course3Name = "Event-Driven Programming";
const course3Units = 3;
const course3Grade = 95;

// Course 4
const course4Name = "App Development and Emerging Technologies";
const course4Units = 3;
const course4Grade = 98;

// Course 5
const course5Name = "Integrative Programming and Technologies";
const course5Units = 3;
const course5Grade = 88;

// Course 6
const course6Name = "Pathfit 4: Sports and Adventure Activities";
const course6Units = 2;
const course6Grade = 94;

// Course 7
const course7Name = "Science, Technology and Society";
const course7Units = 2;
const course7Grade = 90;

let totalUnits = course1Units + course2Units + course3Units + course4Units + course5Units + course6Units + course7Units;

let totalWeightedGrades =
    (course1Grade * course1Units) +
    (course2Grade * course2Units) +
    (course3Grade * course3Units) +
    (course4Grade * course4Units) +
    (course5Grade * course5Units) +
    (course6Grade * course6Units) +
    (course7Grade * course7Units);

let gwa = totalWeightedGrades / totalUnits;

let letterGrade = "";

if (gwa <= 98 && gwa >= 100) {
    letterGrade = "A";
} else if (gwa <= 97 && gwa >= 95) {
    letterGrade = "A-";
} else if (gwa <= 94 && gwa >= 92) {
    letterGrade = "B+";
} else if (gwa <= 91 && gwa >= 89) {
    letterGrade = "B";
} else if (gwa <= 87 && gwa >= 85) {
    letterGrade = "B-";
} else if (gwa <= 84 && gwa >= 82) {
    letterGrade = "C+";
} else if (gwa <= 81 && gwa >= 79) {
    letterGrade = "C";
} else if (gwa <= 78 && gwa >= 75) {
    letterGrade = "C-";
}
else {
    letterGrade = "F";
}

console.log("Student Name: " + studentInfo.studentName);
console.log("ID Number: " + studentInfo.idNumber);
console.log("Year Level: " + studentInfo.yearLevel);
console.log("Program: " + studentInfo.program);

console.log("\n=Courses Enrolled=");
console.log(course1Name + " - Units: " + course1Units + " | Grade: " + course1Grade);
console.log(course2Name + " - Units: " + course2Units + " | Grade: " + course2Grade);
console.log(course3Name + " - Units: " + course3Units + " | Grade: " + course3Grade);
console.log(course4Name + " - Units: " + course4Units + " | Grade: " + course4Grade);
console.log(course5Name + " - Units: " + course5Units + " | Grade: " + course5Grade);
console.log(course6Name + " - Units: " + course6Units + " | Grade: " + course6Grade);
console.log(course7Name + " - Units: " + course7Units + " | Grade: " + course7Grade);

console.log("\nGeneral Weighted Average: " + gwa);
console.log("Letter Grade: " + letterGrade);