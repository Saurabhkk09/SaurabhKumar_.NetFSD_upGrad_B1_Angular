class Student {
  constructor(name) {
    this.name = name;
    this.marks = []; 
  }
  addMark(mark) {
    if (typeof mark === 'number' && mark >= 0 && mark <= 100) {
      this.marks.push(mark);
    } else {
      console.error("Please enter a valid mark between 0 and 100.");
    }
  }
  getAverage() {
    if (this.marks.length === 0) return 0;
    
    const sum = this.marks.reduce((acc, curr) => acc + curr, 0);
    return sum / this.marks.length;
  }

  getGrade() {
    const average = this.getAverage();

    if (average >= 90) return 'A';
    if (average >= 75) return 'B';
    if (average >= 50) return 'C';
    return 'Fail';
  }
}