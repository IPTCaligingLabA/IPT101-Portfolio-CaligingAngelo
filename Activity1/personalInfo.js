const studentInfo = {
    studentName: "Caliging, Angelo A.",
    idNumber: "2026-6762",
    yearLevel: "2nd Year",
    program: "Information Technology"
};

const courses = [
    { name: "Arts Appreciation", units: 3, grade: 97 },
    { name: "Networking 1", units: 3, grade: 93 },
    { name: "Event-Driven Programming", units: 3, grade: 95 },
    { name: "App Development and Emerging Technologies", units: 3, grade: 98 },
    { name: "Integrative Programming and Technologies", units: 3, grade: 88 },
    { name: "Pathfit 4: Sports and Adventure Activities", units: 2, grade: 94 },
    { name: "Science, Technology and Society", units: 2, grade: 90 }
];

let totalUnits = courses[0].units + courses[1].units + courses[2].units + courses[3].units + courses[4].units + courses[5].units;

let totalWeightedGrades = 
    (courses[0].grade * courses[0].units) + 
    (courses[1].grade * courses[1].units) + 
    (courses[2].grade * courses[2].units) + 
    (courses[3].grade * courses[3].units) + 
    (courses[4].grade * courses[4].units) + 
    (courses[5].grade * courses[5].units);

let gwa = totalWeightedGrades / totalUnits;

let letterGrade = "";

if (gwa >= 96) {
    letterGrade = "A";
} else if (gwa >= 90) {
    letterGrade = "B+";
} else if (gwa >= 85) {
    letterGrade = "B";
} else if (gwa >= 80) {
    letterGrade = "C+";
} else if (gwa >= 75) {
    letterGrade = "C";
} else {
    letterGrade = "F";
}

console.log("Student Name: " + studentInfo.studentName);
console.log("ID Number: " + studentInfo.idNumber);
console.log("Year Level: " + studentInfo.yearLevel);
console.log("Program: " + studentInfo.program);

console.log("\n=Courses Enrolled=");
console.log(courses[0].name + " - Units: " + courses[0].units + " | Grade: " + courses[0].grade);
console.log(courses[1].name + " - Units: " + courses[1].units + " | Grade: " + courses[1].grade);
console.log(courses[2].name + " - Units: " + courses[2].units + " | Grade: " + courses[2].grade);
console.log(courses[3].name + " - Units: " + courses[3].units + " | Grade: " + courses[3].grade);
console.log(courses[4].name + " - Units: " + courses[4].units + " | Grade: " + courses[4].grade);
console.log(courses[5].name + " - Units: " + courses[5].units + " | Grade: " + courses[5].grade);

console.log("\nGeneral Weighted Average: " + gwa);
console.log("Letter Grade: " + letterGrade);