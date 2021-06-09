import {useContext} from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Form from './components/Form.js';
import {ThemeContext} from './context/Theme.js';

const styles = {
  dark: {
    background: "#111",
    color: 'ivory'
  },
  light: {
    background: '#f5f5f5',
    color: '#525252'
  }
};

function Main(props) {

  const themeSettings = useContext(ThemeContext);

  return (
    <main style={styles[themeSettings.mode]}>
      <Header />
      <Form />
      <Footer />
    </main>
  )
}

export default Main;
