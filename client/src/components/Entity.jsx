import React from "react";
import image from "../assets/King.webp";

function PlayerDetails() {
  const player = {
    
    name: "Virat Kohli",
    age: 35,
    sport: "Cricket",
  };

  return (
    <div className="min-h-screen flex flex-col items-start justify-start bg-gray-900 text-white">
      <img className="rounded-3xl px-2 py-2  mt-20 mb-6 mx-2 "src={image} alt=""  />  
      <h1 className="text-4xl font-bold">Name: {player.name}</h1>
      <p className="text-xl mt-2 font-semibold">Age: {player.age}</p>
      <p className="text-xl font-semibold">Sport: {player.sport}</p>
      <h1 className="text-xl font-semibold">Why Hate ?</h1>
      <div>
      <p className="text-xl mx-3"> one thing everyone knows is that </p>
      <p className="text-xl mx-3"> Kohli is relentless on the field and has dominated, has spirit in  </p>
      <p className="text-xl mx-3">the international cricket scene with his outstanding performances.</p>
      <p className="text-xl mx-3">Becuase of his aggressive style, Most of the cricket fans hate him !</p>
      </div>
    </div>
  );
}

export default PlayerDetails;
