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

const body: HTMLBodyElement = document.getElementsByTagName('body')[0]
const tableHtml: HTMLTableElement = document.createElement('table');

studentsList.forEach(student => {
  const row: HTMLTableRowElement = tableHtml.insertRow();
  row.insertCell(0).innerHTML = student.firstName;
  row.insertCell(1).innerHTML = student.location;
});

body.append(tableHtml);
