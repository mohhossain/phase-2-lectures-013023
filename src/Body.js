import React from "react";
import StudentCard from "./StudentCard";

function Body({ students }) {
  // map over the studnets array and return a StudentCard component for each student

  const studentList = students.map((student, index) => {
    return <StudentCard key={index} student={student}></StudentCard>;
  });
  return <div>{studentList}</div>;
}

export default Body;
