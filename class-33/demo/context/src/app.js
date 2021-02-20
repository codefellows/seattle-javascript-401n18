import React from 'react';

import SettingsContext from './context/site.js';
import ThemeContext from './context/theme.js';
import Main from './main.js';
import './app.scss';

export default class App extends React.Component {
  render() {
    return (
      <ThemeContext>
        <SettingsContext>
          <Main />
        </SettingsContext>
      </ThemeContext>
    );
  }
}
