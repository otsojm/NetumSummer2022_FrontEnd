
export default class Person {

  person_id: number;
  first_name: string;
  last_name: string;
  age: number;

  constructor(person_id: number, first_name: string, last_name: string, age: number) {

    this.person_id = person_id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
  }
}
