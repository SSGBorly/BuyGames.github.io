import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import TopGames from './Components/TopGames';
export const ToggleContainer = React.createContext();

function App() {

  const [themeSwitch, setThemeSwitch] = useState(false);

  return (
    <ToggleContainer.Provider value={{ themeSwitch, setThemeSwitch }}>
      <div className={themeSwitch ? "Light" : "Dark"}>
        <Navbar />
        <Main />
        <TopGames />
      </div>
    </ToggleContainer.Provider>
  );
}

export default App;
