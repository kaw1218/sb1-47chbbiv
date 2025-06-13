import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AIConsultingPage from './pages/AIConsultingPage';
import ManagementConsultingPage from './pages/ManagementConsultingPage';
import CompanyInfoPage from './pages/CompanyInfoPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CommercialTransactionPage from './pages/CommercialTransactionPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ai-consulting" element={<AIConsultingPage />} />
            <Route path="/management-consulting" element={<ManagementConsultingPage />} />
            <Route path="/company" element={<CompanyInfoPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/commercial-transaction" element={<CommercialTransactionPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;