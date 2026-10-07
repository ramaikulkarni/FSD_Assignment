import React from "react";
import "./App.css";

function ProfileCard({ name, imageUrl, description }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1>React Profile Card</h1>

      <ProfileCard
        name="Ramai Kulkarni"
        imageUrl="https://via.placeholder.com/150"
        description="MCA student learning Full Stack Development."
      />
    </div>
  );
}

export default App;