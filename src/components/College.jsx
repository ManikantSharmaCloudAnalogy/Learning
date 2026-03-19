import { Link, Route, Routes } from "react-router";
import { Student } from "./Student";
import { CollegeDetail } from "./CollegeDetail";
import { Department } from "./Department";
export function College() {
  return (
    <div className="collegeHeader">
      <div>
        <ul>
          <li>
            <Link className="link" to="student">
              Student
            </Link>
          </li>
          <li>
            <Link className="link" to="departments">
              Departments
            </Link>
          </li>
          <li>
            <Link className="link" to="collegedetail">
              CollegeDetails
            </Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="student" element={<Student />} />

        <Route path="collegedetail" element={<CollegeDetail />} />
        <Route path="departments" element={<Department />} />
      </Routes>
    </div>
  );
}
