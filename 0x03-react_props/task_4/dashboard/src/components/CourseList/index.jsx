import CourseListRow from "./CourseListRow";
import './CourseList.css';

export default function CourseList() {
    return (
        <table id='CourseList' className="CourseList__container">
            <thead>
                <CourseListRow>
                    <th colSpan='2'>Available courses</th>
                </CourseListRow>
                <CourseListRow>
                    <th>Course name</th>
                    <th>Credit</th>
                </CourseListRow>
            </thead>
            <tbody>
                <CourseListRow>
                    <td>ES6</td>
                    <td>60</td>
                </CourseListRow>
                <CourseListRow>
                    <td>Webpack</td>
                    <td>20</td>
                </CourseListRow>
                <CourseListRow>
                    <td>React</td>
                    <td>40</td>
                </CourseListRow>
            </tbody>
        </table>
    );
}