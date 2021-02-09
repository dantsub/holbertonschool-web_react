interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Francisco',
  lastName: 'Muñoz',
  age: 23,
  location: 'Bogotá'
};
const student2: Student = {
  firstName: 'Angela',
  lastName: 'Villa',
  age: 29,
  location: 'Medellín'
};

const studentsList: Student[] = [student1, student2];

const tableHtml = document.createElement('table');

studentsList.forEach(student => {
  const row = tableHtml.insertRow();
  row.insertCell(0).innerHTML = student.firstName;
  row.insertCell(1).innerHTML = student.location;
});
document.body.appendChild(tableHtml);
