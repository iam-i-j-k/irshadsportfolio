import React from "react";

const Resume = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Embed the Resume PDF */}
      <iframe 
        src="/resume.pdf" 
        className="w-full md:w-3/4 h-[500px] border shadow-lg"
        title="Resume"
      ></iframe>
      {/* Download Button */}
      <a 
        href="/resume.pdf" 
        download="Irshad_Khan_Resume.pdf"
        className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;