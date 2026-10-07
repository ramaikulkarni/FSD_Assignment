import "./App.css";

function ProfileCard({ name, imageUrl, description }) {
  return (
    <div className="card">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>

      <h2>{name}</h2>

      <p>{description}</p>

      <button>View Profile</button>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1>React Profile Card</h1>
      <p className="subtitle">Profile Card using React Props</p>

      <ProfileCard
        name="Sofia Williams"
        imageUrl="https://randomuser.me/api/portraits/women/44.jpg"
        description="Software Developer and technology enthusiast passionate about building modern web applications."
      />
    </div>
  );
}

export default App;