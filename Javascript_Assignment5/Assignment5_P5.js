// Base Class
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getDetails() {
    return `Employee: ${this.name}, Base Salary: $${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name, salary, bonus) {
    super(name, salary); 
    this.bonus = bonus;
  }

  getTotalSalary() {
    return this.salary + this.bonus;
  }

  getDetails() {
    return `${super.getDetails()}, Bonus: $${this.bonus}`;
  }
}


class Director extends Manager {
  constructor(name, salary, bonus, stockOptions) {
    super(name, salary, bonus); 
    this.stockOptions = stockOptions;
  }

  getFullCompensation() {
    return this.getTotalSalary() + this.stockOptions;
  }

  getDetails() {
    return `${super.getDetails()}, Stock Options: $${this.stockOptions}`;
  }
}



const dir = new Director("Sarah Connor", 150000, 30000, 50000);

console.log(dir.getDetails()); 
// Output: Employee: Sarah Connor, Base Salary: $150000, Bonus: $30000, Stock Options: $50000

console.log(`Total Compensation: $${dir.getFullCompensation()}`); 
// Output: Total Compensation: $230000