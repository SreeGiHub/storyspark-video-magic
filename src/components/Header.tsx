
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            StorySparkVR
          </h1>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <nav>
            <ul className="flex space-x-8">
              <li>
                <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600 transition duration-200">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#use-cases" className="text-gray-600 hover:text-indigo-600 transition duration-200">
                  Use Cases
                </a>
              </li>
              <li>
                <a href="#tech" className="text-gray-600 hover:text-indigo-600 transition duration-200">
                  Technology
                </a>
              </li>
            </ul>
          </nav>
          <Button 
            className="bg-indigo-600 hover:bg-indigo-700 text-white"
            onClick={() => navigate("/signup")}
          >
            Get Started
          </Button>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
