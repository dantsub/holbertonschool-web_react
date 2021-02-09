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

let tableHtml = `<table>
  <tr>
    <th>First name</th>
    <th>Location</th>
  </tr>
`;

studentsList.forEach(student => {
  tableHtml += `<tr>
    <td>${student.firstName}</td>
    <td>${student.location}</td>
  </tr>`
});

tableHtml += '</table>';
document.write(tableHtml);
