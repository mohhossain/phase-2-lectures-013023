import React, { useEffect } from "react";
import StudentCard from "./StudentCard";
import { useState } from "react";

function Body({ students }) {
  const [currentStudent, setCurrentStudent] = useState(null);
  console.log(students);

  const [category, setCategory] = useState("All");

  const [studentClicked, setStudentClicked] = useState(0);
  const [filteredStudents, setFilteredStudents] = useState(students);

  const updateCurrentStudent = (name) => {
    setStudentClicked(studentClicked + 1);
    setCurrentStudent(name);
  };

  useEffect(() => {
    console.log(students, "The original student list");
    // setFilteredStudents(students);

    setFilteredStudents(students);

    // {
    //   students.length !== 0
    //     ? setFilteredStudents(students)
    //     : setFilteredStudents([]);
    // }
  }, [students]);

  const handleCategory = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const studentsFiltered = students.filter((student) => {
      if (category === "All") {
        return true;
      } else {
        return student.code === category;
      }
    });
    setFilteredStudents(studentsFiltered);
  };

  const studentList = filteredStudents.map((student, index) => {
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
      <form onSubmit={handleSubmit}>
        <select onChange={handleCategory}>
          <option>All</option>
          <option name="option">Javascript</option>
          <option name="option">Python</option>
        </select>
        <input type="submit"></input>
      </form>
      <h3>Student count: {filteredStudents.length}</h3>
      <p>Current student: {currentStudent}</p>
      <p>Student clicked: {studentClicked}</p>
      {studentList}
    </div>
  );
}

export default Body;
