import React, { useState } from "react";

function StudentCard({ student, onStudentDelete }) {
  const [active, setActive] = useState(student.isActive);
  const handleDelete = () => {
    console.log(student);

    fetch(`http://localhost:4000/students/${student.id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        onStudentDelete(student);
      }
    });
  };

  const handleUpdate = () => {
    // setActive(!active);
    fetch(`http://localhost:4000/students/${student.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isActive: !active,
      }),
    })
      .then((res) => res.json())
      .then(() => setActive(!active));

  };
  return (
    <div className="card">
      <h3>Name: {student.name}</h3>
      <h3>Age: {student.age}</h3>
      <h3>Profession: {student.profession}</h3>
      <h3>Code: {student.code}</h3>
      <button onClick={handleUpdate}>{active ? "Inactive" : "Active"}</button>

      <button style={{ color: "red" }} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default StudentCard;
