import React, { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [contain, setContain] = useState("paint");
  const handleClick = () => setContain(contain === "paint" ? "none" : "paint");
  return (
    <div className={styles.container} style={{ contain: contain }}>
      <button onClick={handleClick}>Toggle Paint</button>
      <div className={styles.transformed} />
      <div className={styles.content}>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the release of Letraset
        sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </div>
    </div>
  );
}

export default App;
