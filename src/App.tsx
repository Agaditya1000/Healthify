import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Layout } from './components/Layout';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import BookAppointment from './pages/BookAppointment';
import Register from './pages/Register'; // Import the Register component

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> {/* Add the register route */}
            <Route path="/appointments/book" element={<BookAppointment />} />
          </Routes>
        </Layout>
        <Toaster position="top-right" />
      </AuthProvider>
    </Router>
  );
}

export default App;
