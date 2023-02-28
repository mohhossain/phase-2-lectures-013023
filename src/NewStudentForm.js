import React, { useState } from "react";

function NewStudentForm({ onStudentListChange }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [profession, setProfession] = useState("");
  const [code, setCode] = useState("");

  const handleName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleAge = (e) => {
    console.log(e.target.value);
    setAge(e.target.value);
  };

  const handleProfession = (e) => {
    console.log(e.target.value);
    setProfession(e.target.value);
  };

  const handleCode = (e) => {
    console.log(e.target.value);
    setCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, age, profession, code);
    const student = { name, age, profession, code };
    console.log(student);

    fetch("http://localhost:4000/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.id) {
          onStudentListChange(data);
        } else {
          console.log("Post is not successful");
        }
      });
  };

  return (
    <div>
      <h1>Add a new student</h1>

      <form
        className="student-form"
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <label>Name: </label>
        <input
          type="text"
          name="name"
          onChange={handleName}
          value={name}
        ></input>
        <label>Age: </label>
        <input
          type="number"
          name="age"
          onChange={handleAge}
          value={age}
        ></input>
        <label>Profession: </label>
        <input
          type="text"
          name="profession"
          onChange={handleProfession}
          value={profession}
        ></input>
        <label>Code: </label>
        <input
          type="text"
          name="code"
          onChange={handleCode}
          value={code}
        ></input>

        <input type="submit"></input>
      </form>

      {/* <p>
        {name}, {age}, {profession}, {code}
      </p> */}
    </div>
  );
}

export default NewStudentForm;
