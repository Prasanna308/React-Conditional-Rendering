import React, { useState } from "react";

// Child Component
function Message() {
  return (
    <div style={{ marginTop: "20px", fontSize: "20px", color: "green" }}>
      🎉 This is a toggled message!
    </div>
  );
}

function App() {
  // State to track visibility
  const [show, setShow] = useState(false);

  // Toggle function
  const toggleMessage = () => {
    setShow(!show);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Conditional Rendering </h1>

      {/* Toggle Button */}
      <button
        onClick={toggleMessage}
        style={{ marginTop: "20px", padding: "10px 20px" }}
      >
        {show ? "Hide Message" : "Show Message"}
      </button>

      {/* Conditional Rendering */}
      {show && <Message />}
    </div>
  );
}

export default App;
