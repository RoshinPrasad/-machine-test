import React, { useState } from "react";

const ColorChangeComponent = () => {
  const colors = ["bg-red-500", "bg-blue-500", "bg-black-500", "bg-green-500", "bg-yellow-500", "bg-purple-500", "bg-orange-500"];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const handleColorChange = () => {
    if (currentColorIndex === colors.length - 1) {
        setCurrentColorIndex(0);
      } else {
        setCurrentColorIndex(currentColorIndex + 1);
      }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${colors[currentColorIndex]}`}>
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Background Color Changer</h1>
        <button
          onClick={handleColorChange}
          className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-600"
        >
          Change Color
        </button>
      </div>
    </div>
  );
};

export default ColorChangeComponent;
