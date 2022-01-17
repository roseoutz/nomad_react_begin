import Button from "./Button/Button";
import styles from './App.module.css';
import { useState, useEffect } from "react";

function App() {
    const [counter, setValue] = useState(0)
    const [keyword, setKeyword] = useState("")
    const onClick = () => setValue((prev) => prev + 1)
    const onChange = (event) => setKeyword(event.target.value)
    useEffect(() => {
        console.log('Call the API');
    }, [])
    useEffect(() => {
        console.log("search for ", keyword)
    }, [keyword])
    useEffect(() => {
        console.log("counter for ", keyword)
    }, [counter])
    useEffect(() => {
        console.log(" i run counter & keyword changed")
    }, [keyword, counter])
  return (
      <div>
          <input type="text"
                 value={keyword}
                 onChange={onChange}
                 placeholder="seacrh here..."
          />
          <h1>{counter}</h1>
          <button onClick={onClick}>Click Me</button>
      </div>
  );
}

export default App;
