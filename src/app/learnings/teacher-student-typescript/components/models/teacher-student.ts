export class Person {
  constructor(
    public first_name: string,
    public last_name: string,
    public age: number) {

  }
}

export class Teacher extends Person {
  constructor(
    public first_name: string,
    public last_name: string,
    public age: number,
    public teaching_years: number
  ) {
    super(first_name, last_name, age);
  }
}

export class Student extends Person {
  constructor(
    public first_name: string,
    public last_name: string,
    public age: number,
    public school_years: number
  ) {
    super(first_name, last_name, age);
  }
}
