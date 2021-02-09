interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string) : string;
}

let printTeacher: printTeacherFunction;

printTeacher = (firstName: string, lastName: string) : string => {
  return `${firstName[0]}. ${lastName}`;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

interface StudentInterface {
  workOnHomework(): string;
  displayName(firstName: string): string;
}
const StudentClass: StudentConstructor = class StudentClass implements StudentInterface {
  constructor(firstName: string, lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(firstName: string): string {
    return firstName;
  }
}
