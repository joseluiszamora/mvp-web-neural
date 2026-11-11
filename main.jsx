import React from 'react';
import { createRoot } from 'react-dom/client';
import { Plus } from 'lucide-react';
import { motion } from 'motion/react';
import './styles.css';

const EASE = [0.16, 1, 0.3, 1];

function BrandMark() {
  return (
    <svg
      className="brand-mark"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      aria-hidden="true"
    >
      <rect x="5.1" y="1.3" width="8.1" height="23.4" rx="4.05" transform="rotate(-35 5.1 1.3)" fill="currentColor" />
      <rect x="13.7" y="7.1" width="8.1" height="17.8" rx="4.05" transform="rotate(-35 13.7 7.1)" fill="currentColor" />
    </svg>
  );
}

function GridMark() {
  return (
    <svg className="grid-mark" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <circle cx="4" cy="4" r="1.55" />
      <circle cx="12" cy="4" r="1.55" />
      <circle cx="4" cy="12" r="1.55" />
      <circle cx="12" cy="12" r="1.55" />
    </svg>
  );
}

function Navbar() {
  return (
    <motion.nav
      className="navbar"
      aria-label="Main navigation"
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      <div className="nav-left">
        <a className="brand" href="#top" aria-label="NeuralKinetics home">
          <BrandMark />
          <span className="brand-name">NeuralKinetics</span>
        </a>

        <button className="menu-button" type="button">
          <span className="menu-icon"><Plus size={12} strokeWidth={3} /></span>
          <span>Menu</span>
        </button>

        <div className="nav-tags" aria-label="Areas of focus">
          <span>Advanced Bionics</span>
          <span>Cognitive AI</span>
        </div>
      </div>

      <div className="nav-right">
        <div className="adaptive-pill">
          <span className="adaptive-icon"><GridMark /></span>
          <span className="adaptive-label">Adaptive Systems</span>
        </div>
      </div>
    </motion.nav>
  );
}

function BackgroundVideo() {
  return (
    <div className="video-stage">
      <motion.div
        className="video-frame"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: EASE }}
      >
        <video
          className="background-video"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4"
          autoPlay
          muted
          playsInline
          loop
          aria-hidden="true"
        />
      </motion.div>
    </div>
  );
}

const footerTags = ['Neuromorphic', 'AGI', 'Cybernetics'];

function Footer() {
  return (
    <motion.footer
      className="hero-footer"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 1, ease: EASE }}
    >
      <div className="footer-layout">
        <div className="footer-copy">
          <motion.div
            className="eyebrow"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: EASE }}
          >
            <span className="eyebrow-dot" />
            <span>Best digital banking card 2026</span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: EASE }}
          >
            One Card, Zero<br />
            Limits. Worldwide.
          </motion.h1>

          <motion.div
            className="hero-actions"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8, ease: EASE }}
          >
            <a className="action-primary" href="#features">See Features</a>
            <a className="action-secondary" href="#how-it-works">How It Works</a>
          </motion.div>
        </div>

        <div className="footer-tags" aria-label="Technology areas">
          {footerTags.map((tag) => <span className="footer-tag" key={tag}>{tag}</span>)}
        </div>
      </div>
    </motion.footer>
  );
}

function App() {
  return (
    <main className="hero" id="top">
      <BackgroundVideo />
      <Navbar />
      <Footer />
    </main>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
