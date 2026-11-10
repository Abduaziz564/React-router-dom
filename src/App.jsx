
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="hero">
      <div className="hero-text">
        <span className="tag">WELCOME TO AUTOWORLD</span>
        <h1>Find Your <span>Perfect</span> Car</h1>
        <p>
          Discover amazing cars, explore different models
          and find the car that matches your lifestyle.
        </p>
        <Link to="/cars" className="main-btn">Explore Cars</Link>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1000"
          alt="Luxury car"
        />
      </div>
    </div>
  );
}

function Cars() {
  const cars = [
    {
      name: "Mercedes-Benz",
      price: "$65,000",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=700"
    },
    {
      name: "BMW M4",
      price: "$78,000",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=700"
    },
    {
      name: "Porsche 911",
      price: "$120,000",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=700"
    }
  ];

  return (
    <div className="page">
      <div className="page-heading">
        <span className="tag">OUR COLLECTION</span>
        <h1>Popular Cars</h1>
        <p>Choose your favorite car from our collection.</p>
      </div>

      <div className="car-list">
        {cars.map((car, index) => (
          <div className="car-card" key={index}>
            <img src={car.image} alt={car.name} />
            <div className="car-info">
              <h2>{car.name}</h2>
              <p>Starting from</p>
              <h3>{car.price}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="about">
      <span className="tag">ABOUT US</span>
      <h1>Welcome to AutoWorld</h1>
      <p>
        AutoWorld is a website for people who love cars.
        Our goal is to make it easier to discover different
        car models and learn more about the automotive world.
      </p>

      <div className="about-boxes">
        <div>
          <h2>100+</h2>
          <p>Car Models</p>
        </div>
        <div>
          <h2>50+</h2>
          <p>Brands</p>
        </div>
        <div>
          <h2>24/7</h2>
          <p>Information</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <header className="navbar">
        <Link to="/" className="logo">AUTO<span>WORLD.</span></Link>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/cars">Cars</Link>
          <Link to="/about">About</Link>
        </nav>

        <Link to="/cars" className="nav-btn">Explore</Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <footer>
        <p>© 2026 AutoWorld. All rights reserved.</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
