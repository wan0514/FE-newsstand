/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import DarkModeToggle from './components/Theme/DarkModeToggle';
import ThemeProvider from './components/Theme/ThemeProvider';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider isDarkMode={isDarkMode}>
      <DarkModeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
      <h1>Hello Vite</h1>
    </ThemeProvider>
  );
}

export default App;
