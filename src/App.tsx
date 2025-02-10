import { useState } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'light-mode' : 'dark-mode'}>
      <h1>Tamika's Portfolio</h1>

      <button onClick={() => setDarkMode((prevMode) => !prevMode)}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <AboutMe></AboutMe>
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
