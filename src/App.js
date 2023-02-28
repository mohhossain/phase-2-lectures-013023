import "./App.css";
import Body from "./Body";
import { useState } from "react";
import NewStudentForm from "./NewStudentForm";

const student1 = {
  name: "John",
  age: 20,
  profession: "student",
  code: "JS",
};

const student2 = {
  name: "Jane",
  age: 21,
  profession: "developer",
  code: "JS",
};

const student3 = {
  name: "Jack",
  age: 22,
  profession: "photographer",
  code: "HTML",
};

function App() {
  const [count, setCount] = useState(0);

  console.log(count, "this is the state");
  // const studentlist = [student1, student2, student3];

  const [studentlist, setStudentList] = useState([
    student1,
    student2,
    student3,
  ]);

  const [students, setStudents] = useState([student1, student2, student3]);

  const handleSignIn = () => {
    setCount(count + 1);
    setStudents(studentlist);
  };

  const handleSignOut = () => {
    setStudents([]);
  };

  const onStudentListChange = (student) => {
    // studentlist.push(student);
    setStudentList([...studentlist, student]);
    console.log(studentlist);
    setStudents([...students, student]);
  };
  return (
    <div className="App">
      <nav>
        <h1>Welcome to my application</h1>
        <button onClick={handleSignIn}>Sign in</button>
        <button onClick={handleSignOut}>Sign out</button>
      </nav>

      <h3>You signed in {count} times </h3>
      <NewStudentForm
        onStudentListChange={onStudentListChange}
      ></NewStudentForm>
      <Body students={setStudents}></Body>
    </div>
  );
}

export default App;
