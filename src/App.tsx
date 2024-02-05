import { useState } from "react";
import "./App.css";
import bananas from "./Bananas.svg";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

function App() {
  const [count, setCount] = useState(0);

  const addTodo = async (e) => {
    e.preventDefault();
    try {
        const docRef = await addDoc(collection(db, "form-id"), {
          email: "willzxone@gmail.com",
          name: "Willz",    
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  }
  return (
    <div className="App">
      <div>
        <a href="#">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="#">
          <img src={bananas} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={addTodo}>
          count is {count}
        </button>
        <h3>
          PWA Boilerplate
        </h3>
        <p>Cache all the things!!</p>
      </div>
    </div>
  )
}

export default App
