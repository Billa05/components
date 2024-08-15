import React, { useState } from "react";
import ApiPricing from "./components/ApiPricing";
import Footer from "./components/Footer";
import NewsLetter from "./components/NewsLetter";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <button
        onClick={toggleTheme}
        className="fixed top-1 right-4 px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
      >
        {isDarkMode ? <IoSunny/> : <IoMoon/>}
      </button>
      
      <div className="bg-[#10142c] min-h-screen">
        <p className="text-xl font-bold text-white ml-4 underline">
          Pricing component
        </p>
        <div className="content-center p-7">
          <ApiPricing />
        </div>
      </div>
      
      <div className="bg-[#180c24]">
        <p className="text-xl font-bold text-white ml-4 underline">
          NewsLetter component
        </p>
        <div className="content-center p-7">
          <NewsLetter />
        </div>
        <p className="text-xl font-bold text-white ml-4 underline">
          Footer component
        </p>
        <div className="content-center p-7">
          <Footer />
        </div>
      </div>
    </div>
  );
}