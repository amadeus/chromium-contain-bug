import React, { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [contain, setContain] = useState("paint");
  const handleClick = () => setContain(contain === "paint" ? "none" : "paint");
  return (
    <>
      <div className={styles.container} style={{ contain: contain }}>
        <button onClick={handleClick}>Toggle Container Paint</button>
        <div className={styles.transformed}>
          The element has `transform: translate3d(0,0,0)` on it
        </div>
        <div>
          Look closely at this text on Windows, on a monitor that is set to the
          default 100% zoom, while clicking Toggle Paint. When contain: paint is
          set on the container, the 3d transform affects all text rendering in
          the container
        </div>
      </div>
      <a
        href="https://github.com/amadeus/chromium-contain-bug"
        // eslint-disable-next-line
        target="_blank"
      >
        Source Code
      </a>
    </>
  );
}

export default App;
