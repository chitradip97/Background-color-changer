import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [color, setcolor] = useState("olive");
  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 px-2">
        <button
          onClick={() => {
            setcolor("red");
          }}
          className="bg-white text-black px-4 rounded-full"
        >
          Red
        </button>
        <button
          onClick={() => {
            setcolor("blue");
          }}
          className="bg-white text-blue px-4 rounded-full"
        >
          blue
        </button>
        <button
          onClick={() => {
            setcolor("yellow");
          }}
          className="bg-white text-yellow px-4 rounded-full"
        >
          yellow
        </button>
        <button
          onClick={() => {
            setcolor("green");
          }}
          className="bg-white text-green px-4 rounded-full"
        >
          green
        </button>
        <button
          onClick={() => {
            setcolor("white");
          }}
          className="bg-white text-black px-4 rounded-full"
        >
          White
        </button>
      </div>
    </div>
  );
}

export default App;
