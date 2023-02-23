import React from "react";

function StudentCard({ student, updateCurrentStudent }) {
  const handleClick = () => {
    updateCurrentStudent(student.name);
    console.log(student.name);
  };
  return (
    <div className="card" onClick={handleClick}>
      <h3>Name: {student.name}</h3>
      <h3>Age: {student.age}</h3>
      <h3>Profession: {student.profession}</h3>
      <h3>Code: {student.code}</h3>
      {/* <button>Current</button> */}
    </div>
  );
}

export default StudentCard;
