import { Seq } from 'immutable';

function capitalize(str) {
  return str.trim().replace(/^\w/, (c) => c.toUpperCase());
}

export default function printBestStudents(grades) {
  const students = Seq(grades)
    .filter((student) => student.score < 70)
    .map((student) => {
      const { firstName, lastName } = student;
      return {
        ...student,
        firstName: capitalize(firstName),
        lastName: capitalize(lastName),
      };
    });
  students.forEach((student) => console.log(student));
}
