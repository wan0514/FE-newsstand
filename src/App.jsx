/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import DarkModeToggle from './components/Theme/DarkModeToggle';
import ThemeProvider from './components/Theme/ThemeProvider';
import Header from './components/Header';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider isDarkMode={isDarkMode}>
      <DarkModeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
      <Header />
    </ThemeProvider>
  );
}

export default App;
