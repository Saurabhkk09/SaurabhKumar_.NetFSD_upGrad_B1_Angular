let students = [
  { name: "Akhil", marks: 85 },
  { name: "Priya", marks: 72 },
  { name: "Ravi", marks: 90 },
  { name: "Meena", marks: 45 },
  { name: "Karan", marks: 30 }
];

const passedStudents = students.filter(s => s.marks >= 40);

const distinctionStudents = students.filter(s => s.marks >= 85);

const classAverage = students.reduce((sum, s) => sum + s.marks, 0) / students.length;

const topper = students.reduce((prev, current) => (prev.marks > current.marks) ? prev : current);

const failedCount = students.filter(s => s.marks < 40).length;

const gradedStudents = students.map(s => {
  let grade;
  if (s.marks >= 85) grade = 'A';
  else if (s.marks >= 60) grade = 'B';
  else if (s.marks >= 40) grade = 'C';
  else grade = 'Fail';
  
  return { ...s, grade };
});