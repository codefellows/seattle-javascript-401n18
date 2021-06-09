
import ThemeContext from './context/Theme.js';
import SiteContext from './context/Site.js';
import Main from './Main.js';

function App() {
  return (
    <ThemeContext>
      <SiteContext>
        <Main />
      </SiteContext>
    </ThemeContext>
  );
}

export default App;
