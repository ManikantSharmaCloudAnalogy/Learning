import { Link, Routes, Route, useParams } from "react-router";

const students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 21 },
  { id: 3, name: "Charlie", age: 22 },
];

export function Student() {
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((s) => (
          <li key={s.id}>
            <Link to={`${s.id}`}>{s.name}</Link>
          </li>
        ))}
      </ul>

      {/* Dynamic nested route */}
      <Routes>
        <Route path=":id" element={<StudentDetail />} />
      </Routes>
    </div>
  );
}

function StudentDetail() {
  const { id } = useParams();              // <-- dynamic id from URL
  const student = students.find((s) => s.id === Number(id));

  if (!student) return <p>Student not found</p>;

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Student Details</h3>
      <p>ID: {student.id}</p>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
    </div>
  );
}