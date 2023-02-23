import logo from "./logo.svg";
import "./App.css";
import Body from "./Body";

const student1 = {
  name: "John",
  age: 20,
  professon: "student",
  code: "JS",
};

const student2 = {
  name: "Jane",
  age: 21,
  professon: "developer",
  code: "JS",
};

const student3 = {
  name: "Jack",
  age: 22,
  professon: "photographer",
  code: "HTML",
};

function App() {
  const students = [student1, student2, student3];
  return (
    <div className="App">
      <nav>
        <h1>Welcome to my application</h1>
        <button>Sign in</button>
        <button>Sign out</button>
      </nav>
      <Body students={students}></Body>
    </div>
  );
}

export default App;
