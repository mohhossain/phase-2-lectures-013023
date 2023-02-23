import React from "react";
import StudentCard from "./StudentCard";
import { useState } from "react";

function Body({ students }) {
  const [currentStudent, setCurrentStudent] = useState(null);
  console.log(students);

  const [studentClicked, setStudentClicked] = useState(0);

  const updateCurrentStudent = (name) => {
    setStudentClicked(studentClicked + 1);
    setCurrentStudent(name);
  };

  const studentList = students.map((student, index) => {
    return (
      <StudentCard
        key={index}
        student={student}
        updateCurrentStudent={updateCurrentStudent}
      ></StudentCard>
    );
  });
  return (
    <div>
      <h3>Student count: {students.length}</h3>
      <p>Current student: {currentStudent}</p>
      <p>Student clicked: {studentClicked}</p>
      {studentList}
    </div>
  );
}

export default Body;
