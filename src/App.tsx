import { useState } from 'react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'light-mode' : 'dark-mode'}>
      <h1>Tamika's Portfolio</h1>

      <button onClick={() => setDarkMode((prevMode) => !prevMode)}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <div>
        <h2>About Me</h2>
        <p>
          I am an alumni from 2021A class at Resilient Coders. Now joining
          Resilliant Ascend to up my skills in software engineering and furthur
          my career.
        </p>
      </div>
      <div className="project-section">
        {' '}
        <h2>Projects</h2>
        <div className="project-cards">
          <div className="card">
            <h3>Project 1</h3>
            <p>Details coming soon</p>
          </div>
          <div className="card">
            <h3>Project 2</h3>
            <p>Details coming soon</p>
          </div>
          <div className="card">
            <h3>Project 3</h3>
            <p>Details coming soon</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
