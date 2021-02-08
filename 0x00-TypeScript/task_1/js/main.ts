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
  (firstName: string, lastName: string) : void;
}

let printTeacher: printTeacherFunction;

printTeacher = (firstName: string, lastName: string) : void => {
  console.log(`${firstName[0]}. ${lastName}`);
}
