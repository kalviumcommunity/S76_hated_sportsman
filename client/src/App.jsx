import React from 'react';
import './index.css';
import athleteImage from '../src/assets/King.webp'; // Replace with your image

function App() {
  return (
    <div className="bg-[#222222] text-white min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4">
        <div className="text-xl font-bold">Logo</div>
        <nav className="space-x-6">
          <a href="#" className="text-sm hover:text-gray-300">Home page</a>
          <a href="#" className="text-sm hover:text-gray-300">About us</a>
          <a href="#" className="text-sm hover:text-gray-300">Offer</a>
          <a href="#" className="text-sm hover:text-gray-300">Price list</a>
          <a href="#" className="text-sm hover:text-gray-300">Gallery</a>
          <a href="#" className="text-sm hover:text-gray-300">Projects</a>
          <a href="#" className="text-sm hover:text-gray-300">Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-16 py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-left mb-12 md:mb-0">
          <h1 className="text-4xl font-bold mb-8 tracking-wide">Celebrate Controversy:<br />Hate Sports Icons!</h1>
          <p className="text-lg leading-7 mb-10">
            Discover the intriguing world of sports at HateSportsMan.com, where we explore
            the stories behind the athletes who face public disdain. Engage in lively
            discussions, interactive animations, and uncover the narratives that shape sports
            rivalries.
          </p>
          <button className="border border-white py-3 px-8 rounded-sm hover:bg-white hover:text-gray-900 transition duration-300 text-sm tracking-wide">
            SEE MORE
          </button>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <img src={athleteImage} alt="Athlete" className="rounded-lg shadow-2xl max-w-full h-auto" />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#292929] p-6 absolute bottom-0 w-full text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-white rounded-full w-10 h-10"></div>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} HateSportsMan.com</p>
      </footer>
    </div>
  );
}

export default App;