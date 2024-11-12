import Header from './components/Header/Header';
import { useTheme } from './context/ThemeContext';
import Main from './pages/Main/Main';

function App() {
  const {isDark, toggleTheme} = useTheme();

  return (
      <div className={`app ${isDark ? 'dark' : 'light'}`}>
        <Header />
        <div className="container">
          <Main isDark={isDark} />
        </div>
      </div>
  );
}

export default App;
