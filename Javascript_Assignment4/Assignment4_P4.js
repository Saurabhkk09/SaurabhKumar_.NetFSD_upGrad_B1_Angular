let employees = [
  { id: 1, name: "Ravi", dept: "IT", salary: 70000 },
  { id: 2, name: "Anita", dept: "HR", salary: 50000 },
  { id: 3, name: "Karan", dept: "IT", salary: 80000 },
  { id: 4, name: "Meena", dept: "Finance", salary: 60000 }
];

const totalExpense = employees.reduce((sum, emp) => sum + emp.salary, 0);

const sortedBySalary = [...employees].sort((a, b) => b.salary - a.salary);
const highestPaid = sortedBySalary[0];
const lowestPaid = sortedBySalary[sortedBySalary.length - 1];

const updatedSalaries = employees.map(emp => 
  emp.dept === "IT" ? { ...emp, salary: emp.salary * 1.15 } : emp
);

const groupedByDept = employees.reduce((acc, emp) => {
  (acc[emp.dept] = acc[emp.dept] || []).push(emp);
  return acc;
}, {});

const deptAverages = Object.keys(groupedByDept).map(dept => {
  const deptEmps = groupedByDept[dept];
  const avg = deptEmps.reduce((sum, e) => sum + e.salary, 0) / deptEmps.length;
  return { department: dept, averageSalary: avg };
});


const descendingEmps = [...employees].sort((a, b) => b.salary - a.salary);