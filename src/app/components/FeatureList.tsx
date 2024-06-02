import React from "react";
import {
  FaTasks,
  FaBookOpen,
  FaLightbulb,
  FaLink,
  FaChartLine,
  FaCog,
} from "react-icons/fa";

const FeatureList = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-8">
      <li className="flex items-center space-x-4 rounded-lg bg-gray-100 p-4 shadow-md">
        <FaTasks className="h-8 w-8 text-blue-500" />
        <span className="text-lg font-semibold text-gray-800">
          Organize Your Ideas & Projects
        </span>
      </li>
      <li className="flex items-center space-x-4 rounded-lg bg-gray-100 p-4 shadow-md">
        <FaBookOpen className="h-8 w-8 text-green-500" />
        <span className="text-lg font-semibold text-gray-800">
          Boost Your Knowledge & Learning
        </span>
      </li>
      <li className="flex items-center space-x-4 rounded-lg bg-gray-100 p-4 shadow-md">
        <FaLightbulb className="h-8 w-8 text-purple-500" />
        <span className="text-lg font-semibold text-gray-800">
          Think Creatively & Achieve More
        </span>
      </li>
      <li className="flex items-center space-x-4 rounded-lg bg-gray-100 p-4 shadow-md">
        <FaLink className="h-8 w-8 text-orange-500" />
        <span className="text-lg font-semibold text-gray-800">
          Connect & Organize Your Resources
        </span>
      </li>
      <li className="flex items-center space-x-4 rounded-lg bg-gray-100 p-4 shadow-md">
        <FaChartLine className="h-8 w-8 text-teal-500" />
        <span className="text-lg font-semibold text-gray-800">
          Track Your Progress & Insights
        </span>
      </li>
      <li className="flex items-center space-x-4 rounded-lg bg-gray-100 p-4 shadow-md">
        <FaCog className="h-8 w-8 text-gray-500" />
        <span className="text-lg font-semibold text-gray-800">
          Customize Your Workflow
        </span>
      </li>
    </ul>
  );
};

export default FeatureList;
