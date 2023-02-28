import React, { useEffect } from "react";
import StudentCard from "./StudentCard";
import { useState } from "react";

function Body({ students, onStudentDelete }) {
  const [currentStudent, setCurrentStudent] = useState(null);
  console.log(students);

  const [category, setCategory] = useState("All");
  const [profession, setProfession] = useState("All");

  const [studentClicked, setStudentClicked] = useState(0);
  // const [filteredStudents, setFilteredStudents] = useState(students);

  const updateCurrentStudent = (name) => {
    setStudentClicked(studentClicked + 1);
    setCurrentStudent(name);
  };

  const handleCategory = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value);
  };

  const handleProfession = (e) => {
    setProfession(e.target.value.toLowerCase());
  };

  const studentsFiltered = students.filter((student) => {
    if (category === "All" && profession === "All") {
      return true;
    } else if (category === "All") {
      return student.profession === profession;
    } else if (profession === "All") {
      return student.code === category;
    } else {
      return student.code === category && student.profession === profession;
    }
  });

  const studentList = studentsFiltered.map((student, index) => {
    return (
      <StudentCard
        key={index}
        student={student}
        updateCurrentStudent={updateCurrentStudent}
        onStudentDelete={onStudentDelete}
      ></StudentCard>
    );
  });
  return (
    <div>
      <h3>Student count: {studentsFiltered.length}</h3>
      <form>
        <select onChange={handleCategory}>
          <option>All</option>
          <option name="option">Javascript</option>
          <option name="option">Python</option>
        </select>

        <select onChange={handleProfession}>
          <option>All</option>
          <option name="option">Student</option>
          <option name="option">Engineer</option>
        </select>
      </form>
      {studentList}
    </div>
  );
}

export default Body;
