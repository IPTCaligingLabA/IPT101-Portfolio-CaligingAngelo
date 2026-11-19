const bsit_students = [
    {
        studentName: "Caliging, Angelo A.",
        idNumber: "2026-6762",
        yearLevel: "2nd Year",
        program: "Information Technology"
    },
    {
        studentName: "Vinluan Kevin B.",
        idNumber: "2026-6648",
        yearLevel: "2nd Year",
        program: "Information Technology"
    },
    {
        studentName: "Derder Mexandryl V.",
        idNumber: "2026-6716",
        yearLevel: "2nd Year",
        program: "Information Technology"
    },
    {
        studentName: "Balbin Benz Andrei P.",
        idNumber: "2026-6719",
        yearLevel: "2nd Year",
        program: "Information Technology"
    }
];

const courseInfoStud1 = [
    { courseName: "Arts Appreciation", courseUnits: 3, courseGrade: 97 },
    { courseName: "Networking", courseUnits: 3, courseGrade: 87 },
    { courseName: "Event-Driven Proramming", courseUnits: 3, courseGrade: 95 },
    { courseName: "Pathfit 4: Sports and Adventure Activities", courseUnits: 2, courseGrade: 93 },
    { courseName: "App Development and Emerging Technologies", courseUnits: 3, courseGrade: 91 },
    { courseName: "Integrative Programming And Technologies", courseUnits: 3, courseGrade: 85 },
    { courseName: "Science, Technology and Society", courseUnits: 3, courseGrade: 90 }
];

const courseInfoStud2 = [
    { courseName: "Arts Appreciation", courseUnits: 3, courseGrade: 89 },
    { courseName: "Networking", courseUnits: 3, courseGrade: 90 },
    { courseName: "Event-Driven Proramming", courseUnits: 3, courseGrade: 95 },
    { courseName: "Pathfit 4: Sports and Adventure Activities", courseUnits: 2, courseGrade: 93 },
    { courseName: "App Development and Emerging Technologies", courseUnits: 3, courseGrade: 92 },
    { courseName: "Integrative Programming And Technologies", courseUnits: 3, courseGrade: 95 },
    { courseName: "Science, Technology and Society", courseUnits: 3, courseGrade: 88 }
];

const courseInfoStud3 = [
    { courseName: "Arts Appreciation", courseUnits: 3, courseGrade: 91 },
    { courseName: "Networking", courseUnits: 3, courseGrade: 88 },
    { courseName: "Event-Driven Proramming", courseUnits: 3, courseGrade: 92 },
    { courseName: "Pathfit 4: Sports and Adventure Activities", courseUnits: 2, courseGrade: 94 },
    { courseName: "App Development and Emerging Technologies", courseUnits: 3, courseGrade: 90 },
    { courseName: "Integrative Programming And Technologies", courseUnits: 3, courseGrade: 89 },
    { courseName: "Science, Technology and Society", courseUnits: 3, courseGrade: 91 }
];

const courseInfoStud4 = [
    { courseName: "Arts Appreciation", courseUnits: 3, courseGrade: 95 },
    { courseName: "Networking", courseUnits: 3, courseGrade: 94 },
    { courseName: "Event-Driven Proramming", courseUnits: 3, courseGrade: 96 },
    { courseName: "Pathfit 4: Sports and Adventure Activities", courseUnits: 2, courseGrade: 95 },
    { courseName: "App Development and Emerging Technologies", courseUnits: 3, courseGrade: 93 },
    { courseName: "Integrative Programming And Technologies", courseUnits: 3, courseGrade: 92 },
    { courseName: "Science, Technology and Society", courseUnits: 3, courseGrade: 94 }
];

const totalUnits1 =
    courseInfoStud1[0].courseUnits +
    courseInfoStud1[1].courseUnits +
    courseInfoStud1[2].courseUnits +
    courseInfoStud1[3].courseUnits +
    courseInfoStud1[4].courseUnits +
    courseInfoStud1[5].courseUnits +
    courseInfoStud1[6].courseUnits;

const totalWeightedGrades1 =
    (courseInfoStud1[0].courseGrade * courseInfoStud1[0].courseUnits) +
    (courseInfoStud1[1].courseGrade * courseInfoStud1[1].courseUnits) +
    (courseInfoStud1[2].courseGrade * courseInfoStud1[2].courseUnits) +
    (courseInfoStud1[3].courseGrade * courseInfoStud1[3].courseUnits) +
    (courseInfoStud1[4].courseGrade * courseInfoStud1[4].courseUnits) +
    (courseInfoStud1[5].courseGrade * courseInfoStud1[5].courseUnits) +
    (courseInfoStud1[6].courseGrade * courseInfoStud1[6].courseUnits);

const gwa1 = totalWeightedGrades1 / totalUnits1;

let letterGrade1 = "";
if (gwa1 >= 98 && gwa1 <= 100) {
    letterGrade1 = "A";
} else if (gwa1 >= 95 && gwa1 < 98) {
    letterGrade1 = "A-";
} else if (gwa1 >= 92 && gwa1 < 95) {
    letterGrade1 = "B+";
} else if (gwa1 >= 89 && gwa1 < 92) {
    letterGrade1 = "B";
} else if (gwa1 >= 85 && gwa1 < 89) {
    letterGrade1 = "B-";
} else if (gwa1 >= 82 && gwa1 < 85) {
    letterGrade1 = "C+";
} else if (gwa1 >= 79 && gwa1 < 82) {
    letterGrade1 = "C";
} else if (gwa1 >= 75 && gwa1 < 79) {
    letterGrade1 = "C-";
} else {
    letterGrade1 = "F";
}

const totalUnits2 =
    courseInfoStud2[0].courseUnits +
    courseInfoStud2[1].courseUnits +
    courseInfoStud2[2].courseUnits +
    courseInfoStud2[3].courseUnits +
    courseInfoStud2[4].courseUnits +
    courseInfoStud2[5].courseUnits +
    courseInfoStud2[6].courseUnits;

const totalWeightedGrades2 =
    (courseInfoStud2[0].courseGrade * courseInfoStud2[0].courseUnits) +
    (courseInfoStud2[1].courseGrade * courseInfoStud2[1].courseUnits) +
    (courseInfoStud2[2].courseGrade * courseInfoStud2[2].courseUnits) +
    (courseInfoStud2[3].courseGrade * courseInfoStud2[3].courseUnits) +
    (courseInfoStud2[4].courseGrade * courseInfoStud2[4].courseUnits) +
    (courseInfoStud2[5].courseGrade * courseInfoStud2[5].courseUnits) +
    (courseInfoStud2[6].courseGrade * courseInfoStud2[6].courseUnits);

const gwa2 = totalWeightedGrades2 / totalUnits2;

let letterGrade2 = "";
if (gwa2 >= 98 && gwa2 <= 100) {
    letterGrade2 = "A";
} else if (gwa2 >= 95 && gwa2 < 98) {
    letterGrade2 = "A-";
} else if (gwa2 >= 92 && gwa2 < 95) {
    letterGrade2 = "B+";
} else if (gwa2 >= 89 && gwa2 < 92) {
    letterGrade2 = "B";
} else if (gwa2 >= 85 && gwa2 < 89) {
    letterGrade2 = "B-";
} else if (gwa2 >= 82 && gwa2 < 85) {
    letterGrade2 = "C+";
} else if (gwa2 >= 79 && gwa2 < 82) {
    letterGrade2 = "C";
} else if (gwa2 >= 75 && gwa2 < 79) {
    letterGrade2 = "C-";
} else {
    letterGrade2 = "F";
}

const totalUnits3 =
    courseInfoStud3[0].courseUnits +
    courseInfoStud3[1].courseUnits +
    courseInfoStud3[2].courseUnits +
    courseInfoStud3[3].courseUnits +
    courseInfoStud3[4].courseUnits +
    courseInfoStud3[5].courseUnits +
    courseInfoStud3[6].courseUnits;

const totalWeightedGrades3 =
    (courseInfoStud3[0].courseGrade * courseInfoStud3[0].courseUnits) +
    (courseInfoStud3[1].courseGrade * courseInfoStud3[1].courseUnits) +
    (courseInfoStud3[2].courseGrade * courseInfoStud3[2].courseUnits) +
    (courseInfoStud3[3].courseGrade * courseInfoStud3[3].courseUnits) +
    (courseInfoStud3[4].courseGrade * courseInfoStud3[4].courseUnits) +
    (courseInfoStud3[5].courseGrade * courseInfoStud3[5].courseUnits) +
    (courseInfoStud3[6].courseGrade * courseInfoStud3[6].courseUnits);

const gwa3 = totalWeightedGrades3 / totalUnits3;

let letterGrade3 = "";
if (gwa3 >= 98 && gwa3 <= 100) {
    letterGrade3 = "A";
} else if (gwa3 >= 95 && gwa3 < 98) {
    letterGrade3 = "A-";
} else if (gwa3 >= 92 && gwa3 < 95) {
    letterGrade3 = "B+";
} else if (gwa3 >= 89 && gwa3 < 92) {
    letterGrade3 = "B";
} else if (gwa3 >= 85 && gwa3 < 89) {
    letterGrade3 = "B-";
} else if (gwa3 >= 82 && gwa3 < 85) {
    letterGrade3 = "C+";
} else if (gwa3 >= 79 && gwa3 < 82) {
    letterGrade3 = "C";
} else if (gwa3 >= 75 && gwa3 < 79) {
    letterGrade3 = "C-";
} else {
    letterGrade3 = "F";
}

const totalUnits4 =
    courseInfoStud4[0].courseUnits +
    courseInfoStud4[1].courseUnits +
    courseInfoStud4[2].courseUnits +
    courseInfoStud4[3].courseUnits +
    courseInfoStud4[4].courseUnits +
    courseInfoStud4[5].courseUnits +
    courseInfoStud4[6].courseUnits;

const totalWeightedGrades4 =
    (courseInfoStud4[0].courseGrade * courseInfoStud4[0].courseUnits) +
    (courseInfoStud4[1].courseGrade * courseInfoStud4[1].courseUnits) +
    (courseInfoStud4[2].courseGrade * courseInfoStud4[2].courseUnits) +
    (courseInfoStud4[3].courseGrade * courseInfoStud4[3].courseUnits) +
    (courseInfoStud4[4].courseGrade * courseInfoStud4[4].courseUnits) +
    (courseInfoStud4[5].courseGrade * courseInfoStud4[5].courseUnits) +
    (courseInfoStud4[6].courseGrade * courseInfoStud4[6].courseUnits);

const gwa4 = totalWeightedGrades4 / totalUnits4;

let letterGrade4 = "";
if (gwa4 >= 98 && gwa4 <= 100) {
    letterGrade4 = "A";
} else if (gwa4 >= 95 && gwa4 < 98) {
    letterGrade4 = "A-";
} else if (gwa4 >= 92 && gwa4 < 95) {
    letterGrade4 = "B+";
} else if (gwa4 >= 89 && gwa4 < 92) {
    letterGrade4 = "B";
} else if (gwa4 >= 85 && gwa4 < 89) {
    letterGrade4 = "B-";
} else if (gwa4 >= 82 && gwa4 < 85) {
    letterGrade4 = "C+";
} else if (gwa4 >= 79 && gwa4 < 82) {
    letterGrade4 = "C";
} else if (gwa4 >= 75 && gwa4 < 79) {
    letterGrade4 = "C-";
} else {
    letterGrade4 = "F";
}

console.log("========================================");
console.log("Student Name: " + bsit_students[0].studentName);
console.log("ID Number: " + bsit_students[0].idNumber);
console.log("Year Level: " + bsit_students[0].yearLevel);
console.log("Program: " + bsit_students[0].program);
console.log("\n=Courses Enrolled=");
console.log(courseInfoStud1[0].courseName + " - Units: " + courseInfoStud1[0].courseUnits + " | Grade: " + courseInfoStud1[0].courseGrade);
console.log(courseInfoStud1[1].courseName + " - Units: " + courseInfoStud1[1].courseUnits + " | Grade: " + courseInfoStud1[1].courseGrade);
console.log(courseInfoStud1[2].courseName + " - Units: " + courseInfoStud1[2].courseUnits + " | Grade: " + courseInfoStud1[2].courseGrade);
console.log(courseInfoStud1[3].courseName + " - Units: " + courseInfoStud1[3].courseUnits + " | Grade: " + courseInfoStud1[3].courseGrade);
console.log(courseInfoStud1[4].courseName + " - Units: " + courseInfoStud1[4].courseUnits + " | Grade: " + courseInfoStud1[4].courseGrade);
console.log(courseInfoStud1[5].courseName + " - Units: " + courseInfoStud1[5].courseUnits + " | Grade: " + courseInfoStud1[5].courseGrade);
console.log(courseInfoStud1[6].courseName + " - Units: " + courseInfoStud1[6].courseUnits + " | Grade: " + courseInfoStud1[6].courseGrade);
console.log("\nGeneral Weighted Average: " + gwa1.toFixed(2));
console.log("Letter Grade: " + letterGrade1);

console.log("========================================");
console.log("Student Name: " + bsit_students[1].studentName);
console.log("ID Number: " + bsit_students[1].idNumber);
console.log("Year Level: " + bsit_students[1].yearLevel);
console.log("Program: " + bsit_students[1].program);
console.log("\n=Courses Enrolled=");
console.log(courseInfoStud2[0].courseName + " - Units: " + courseInfoStud2[0].courseUnits + " | Grade: " + courseInfoStud2[0].courseGrade);
console.log(courseInfoStud2[1].courseName + " - Units: " + courseInfoStud2[1].courseUnits + " | Grade: " + courseInfoStud2[1].courseGrade);
console.log(courseInfoStud2[2].courseName + " - Units: " + courseInfoStud2[2].courseUnits + " | Grade: " + courseInfoStud2[2].courseGrade);
console.log(courseInfoStud2[3].courseName + " - Units: " + courseInfoStud2[3].courseUnits + " | Grade: " + courseInfoStud2[3].courseGrade);
console.log(courseInfoStud2[4].courseName + " - Units: " + courseInfoStud2[4].courseUnits + " | Grade: " + courseInfoStud2[4].courseGrade);
console.log(courseInfoStud2[5].courseName + " - Units: " + courseInfoStud2[5].courseUnits + " | Grade: " + courseInfoStud2[5].courseGrade);
console.log(courseInfoStud2[6].courseName + " - Units: " + courseInfoStud2[6].courseUnits + " | Grade: " + courseInfoStud2[6].courseGrade);
console.log("\nGeneral Weighted Average: " + gwa2.toFixed(2));
console.log("Letter Grade: " + letterGrade2);

console.log("========================================");
console.log("Student Name: " + bsit_students[2].studentName);
console.log("ID Number: " + bsit_students[2].idNumber);
console.log("Year Level: " + bsit_students[2].yearLevel);
console.log("Program: " + bsit_students[2].program);
console.log("\n=Courses Enrolled=");
console.log(courseInfoStud3[0].courseName + " - Units: " + courseInfoStud3[0].courseUnits + " | Grade: " + courseInfoStud3[0].courseGrade);
console.log(courseInfoStud3[1].courseName + " - Units: " + courseInfoStud3[1].courseUnits + " | Grade: " + courseInfoStud3[1].courseGrade);
console.log(courseInfoStud3[2].courseName + " - Units: " + courseInfoStud3[2].courseUnits + " | Grade: " + courseInfoStud3[2].courseGrade);
console.log(courseInfoStud3[3].courseName + " - Units: " + courseInfoStud3[3].courseUnits + " | Grade: " + courseInfoStud3[3].courseGrade);
console.log(courseInfoStud3[4].courseName + " - Units: " + courseInfoStud3[4].courseUnits + " | Grade: " + courseInfoStud3[4].courseGrade);
console.log(courseInfoStud3[5].courseName + " - Units: " + courseInfoStud3[5].courseUnits + " | Grade: " + courseInfoStud3[5].courseGrade);
console.log(courseInfoStud3[6].courseName + " - Units: " + courseInfoStud3[6].courseUnits + " | Grade: " + courseInfoStud3[6].courseGrade);
console.log("\nGeneral Weighted Average: " + gwa3.toFixed(2));
console.log("Letter Grade: " + letterGrade3);

console.log("========================================");
console.log("Student Name: " + bsit_students[3].studentName);
console.log("ID Number: " + bsit_students[3].idNumber);
console.log("Year Level: " + bsit_students[3].yearLevel);
console.log("Program: " + bsit_students[3].program);
console.log("\n=Courses Enrolled=");
console.log(courseInfoStud4[0].courseName + " - Units: " + courseInfoStud4[0].courseUnits + " | Grade: " + courseInfoStud4[0].courseGrade);
console.log(courseInfoStud4[1].courseName + " - Units: " + courseInfoStud4[1].courseUnits + " | Grade: " + courseInfoStud4[1].courseGrade);
console.log(courseInfoStud4[2].courseName + " - Units: " + courseInfoStud4[2].courseUnits + " | Grade: " + courseInfoStud4[2].courseGrade);
console.log(courseInfoStud4[3].courseName + " - Units: " + courseInfoStud4[3].courseUnits + " | Grade: " + courseInfoStud4[3].courseGrade);
console.log(courseInfoStud4[4].courseName + " - Units: " + courseInfoStud4[4].courseUnits + " | Grade: " + courseInfoStud4[4].courseGrade);
console.log(courseInfoStud4[5].courseName + " - Units: " + courseInfoStud4[5].courseUnits + " | Grade: " + courseInfoStud4[5].courseGrade);
console.log(courseInfoStud4[6].courseName + " - Units: " + courseInfoStud4[6].courseUnits + " | Grade: " + courseInfoStud4[6].courseGrade);
console.log("\nGeneral Weighted Average: " + gwa4.toFixed(2));
console.log("Letter Grade: " + letterGrade4);