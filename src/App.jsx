import React, { useState } from "react";
import FirstWebsite from "./Firstwebsite/FirstWebsite";
import SecondWebsite from "./Secondwebsite/SecondWebsite";

function App() {
  const [showFirstWebsite, setShowFirstWebsite] = useState(true);

  const toggleWebsite = () => {
    setShowFirstWebsite((prev) => !prev);
  };

  return (
    <div>
      <button
        onClick={toggleWebsite}
        className="fixed top-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        {showFirstWebsite ? "Switch to Second Website" : "Switch to First Website"}
      </button>

      {showFirstWebsite ? <FirstWebsite /> : <SecondWebsite />}
    </div>
  );
}

export default App;
