import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './Default/components/HomePage';
import FindDonations from './Default/components/FindDonations';
import AboutUs from './Default/components/AboutUs';
import Auth from './Default/components/Auth';
import ManageDonations from './Default/components/ManageDonations'; // Import the new ManageDonations component
import './Admin/styles/dashboard.css';
import Login from './Default/components/Login';
import AdminNavBar from './Admin/components/AdminNavBar';
import Categories from './Admin/pages/Categories';
import DonationRequest from './Admin/pages/DonationRequest';
import DefaultNavbar from './Default/components/DefaultNavbar';
import AdminDashboard from './Admin/pages/AdminDashboard';

const App = () => {
  const [role, setRole] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setRole('admin')
    setIsAuthenticated(true)
  }, []);

  const renderNavbar = () => {
    if(isAuthenticated) {
      switch (role) {
        case 'admin':
          return <AdminNavBar />;
        default:
          return <DefaultNavbar />
      }
    }
  }
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

        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/request" element={<DonationRequest />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/find-donations" element={<FindDonations />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Auth />} />
          <Route path="/login" element={<Login />} />
          <Route path="/manage-donations" element={<ManageDonations />} />{" "}
          {/* New route */}
        </Routes>
      </div>
    </Router>
    // </div>
  );

};

export default App;

