import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import FindDonations from './components/FindDonations';
import AboutUs from './components/AboutUs';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard'; // Import the new Dashboard component
import ManageDonations from './components/ManageDonations'; // Import the new ManageDonations component
import './Admin/styles/dashboard.css';
import AdminDashboard from './Admin/pages/AdminDashboard'

const App = () => {
    const [count, setCount] = useState(0);
  const [donationRequests, setDonationRequests] = useState([]);

  useEffect(() => {
    const fetchedRequests = [
      { id: 1, category: 'Food', description: 'Urgent need for food donations' },
      { id: 2, category: 'Clothing', description: 'Clothing donations for refugees' },
      { id: 3, category: 'Medical', description: 'Medical supplies urgently needed' },
    ];
    setDonationRequests(fetchedRequests);
  }, []);
  
  
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particlesArray = [];
    let animationId;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 10 + 5;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
      }

      draw() {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function init() {
      particlesArray = [];
      for (let i = 0; i < 100; i++) {
        particlesArray.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((particle, i) => {
        particle.update();
        particle.draw();
        if (particle.size <= 0.2) {
          particlesArray.splice(i, 1);
          particlesArray.push(new Particle());
        }
      });
      animationId = requestAnimationFrame(animate);
    }

    init();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <canvas id="canvas" />

        <nav>
          <ul>
            <li><Link to="/" aria-label="Home"><i className="fas fa-home"></i> Home</Link></li>
            <li><Link to="/about" aria-label="About Us"><i className="fas fa-info-circle"></i> About Us</Link></li>
            <li><Link to="/register" aria-label="Register"><i className="fas fa-user-plus"></i> Register</Link></li>
            <li><Link to="/login" aria-label="Login"><i className="fas fa-sign-in-alt"></i> Login</Link></li>
            <li><Link to="/find-donations" aria-label="Find Donations"><i className="fas fa-search"></i> Find Donations</Link></li>
            <li><Link to="/dashboard" aria-label="Dashboard"><i className="fas fa-tachometer-alt"></i> Dashboard</Link></li>
            <li><Link to="/manage-donations" aria-label="Manage Donations"><i className="fas fa-cogs"></i> Manage Donations</Link></li> {/* New link */}
          </ul>
        </nav>

        <Routes>
      <Route path="/admin" element={<AdminDashboard />} />
          
          <Route path="/" element={<HomePage />} />
          <Route path="/find-donations" element={<FindDonations />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Auth />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/manage-donations" element={<ManageDonations />} /> {/* New route */}
        </Routes>
      </div>
    </Router>
  );

  return (
    <div className="App">
      <header>
        <h1>NGO Dashboard</h1>
      </header>
      <main>
        <section className="statistics">
          <div>
            <h2>Donors</h2>
            <p>Total Donors: {count}</p>
            <button onClick={() => setCount(count + 1)}>Add Donor</button>
          </div>
        </section>
        
        {/* Donation Requests Section */}
        <section className="donation-request">
          <h2>Donation Requests</h2>
          {donationRequests.length > 0 ? (
            <ul>
              {donationRequests.map((request) => (
                <li key={request.id}>
                  <h3>{request.category}</h3>
                  <p>{request.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No donation requests found.</p>
          )}
        </section>
      </main>
      <footer>
        <p>Click on logos to learn more about Vite and React!</p>
      </footer>
    </div>
  );
};

export default App;

