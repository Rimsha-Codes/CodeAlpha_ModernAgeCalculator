import React from "react";

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
      <div
        className="text-2xl font-bold cursor-pointer"
        onClick={() => scrollToSection("hero")}
      >
        <span className="text-blue-500 animate-bounce inline-block">Age</span>
        <span className="text-gray-800">Calculator</span>
      </div>
      <div className="flex items-center space-x-6 text-gray-600">
        <button onClick={() => scrollToSection("calculator")}>Calculator</button>
        <button onClick={() => scrollToSection("features")}>Features</button>
        <button onClick={() => scrollToSection("faq")}>FAQ</button>
        <button onClick={() => scrollToSection("feedback")}>Feedback</button>
      </div>
    </nav>
  );
};

export default Header;
