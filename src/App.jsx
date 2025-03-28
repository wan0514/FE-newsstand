/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import DarkModeToggle from './components/Theme/DarkModeToggle';
import ThemeProvider from './components/Theme/ThemeProvider';
import StackLayout from './components/common/layout';
import Header from './components/Header';
import NewsRolling from './components/NewsRolling';
import Media from './components/Media';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider isDarkMode={isDarkMode}>
      <StackLayout>
        <DarkModeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
        <Header />
        <NewsRolling />
        <Media />
      </StackLayout>
    </ThemeProvider>
  );
}

export default App;
