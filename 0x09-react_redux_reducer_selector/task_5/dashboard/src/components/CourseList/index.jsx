import CourseListRow from "./CourseListRow";
import { courses } from "./courses.json";
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
                {!courses || courses.length === 0 ? (
                    <CourseListRow>
                        <th colSpan='2'>No course available yet</th>
                    </CourseListRow>
                ) : null}
                {courses.length > 0 && courses.map((course) => (
                    <CourseListRow key={course.id}>
                        <td>{course.name}</td>
                        <td>{course.credit}</td>
                    </CourseListRow>
                ))}
            </tbody>
        </table>
    );
}