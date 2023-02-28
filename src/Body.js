import React, { useEffect } from "react";
import StudentCard from "./StudentCard";
import { useState } from "react";

function Body({ students }) {
  const [currentStudent, setCurrentStudent] = useState(null);
  console.log(students);

  const [category, setCategory] = useState("All");

  const [studentClicked, setStudentClicked] = useState(0);
  // const [filteredStudents, setFilteredStudents] = useState(students);

  const updateCurrentStudent = (name) => {
    setStudentClicked(studentClicked + 1);
    setCurrentStudent(name);
  };

  // useEffect(() => {
  //   console.log(students, "The original student list");
  //   setFilteredStudents(students);
  // }, [students]);

  const handleCategory = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  const studentsFiltered = students.filter((student) => {
    if (category === "All") {
      return true;
    } else {
      return student.code === category;
    }
  });
  // setFilteredStudents(studentsFiltered);
  // };

  const studentList = studentsFiltered.map((student, index) => {
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
      <h3>Student count: {studentsFiltered.length}</h3>
      <p>Current student: {currentStudent}</p>
      <p>Student clicked: {studentClicked}</p>
      <form>
        <select onChange={handleCategory}>
          <option>All</option>
          <option name="option">Javascript</option>
          <option name="option">Python</option>
        </select>
      </form>
      {studentList}
    </div>
  );
}

export default Body;
