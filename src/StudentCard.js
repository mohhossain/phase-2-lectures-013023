import React from "react";

function StudentCard({student}) {
  return (
    <div className="card">
          <h3>Name: { student.name}</h3>
          <h3>Age: { student.age}</h3>
          <h3>Profession: { student.profession}</h3>
          <h3>Code: {student.code}</h3>
    </div>
  );
}

export default StudentCard;
