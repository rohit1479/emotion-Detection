import React from 'react';
import FaceEmotionDetection from './components/FaceEmotionDetection.jsx';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Face Emotion Recognition</h1>
        <p className="app-subtitle">Detect emotions in real-time using TensorFlow.js</p>
      </header>
      
      <main className="app-main">
        <FaceEmotionDetection />
      </main>
    </div>
  );
}

export default App;