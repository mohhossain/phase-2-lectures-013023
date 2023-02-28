import "./App.css";
import Body from "./Body";
import { useState, useEffect } from "react";
import NewStudentForm from "./NewStudentForm";

function App() {
  const [count, setCount] = useState(0);
  console.log(count, "this is the state");
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, [isLoggedin]);

  const handleSignIn = () => {
    setIsLoggedin(true);
    setCount(count + 1);
  };

  const handleSignOut = () => {
    setStudents([]);
  };

  const onStudentListChange = (student) => {
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
      <Body students={students}></Body>
    </div>
  );
}

export default App;
