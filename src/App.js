import React from "react";
import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Counter from "./components/Counter.js";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
