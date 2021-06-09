import React from 'react';

export const ThemeContext = React.createContext();

class Theme extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'light',
      numberToShowAtATime: 3,
      sortBy: 'assignee',
      showCompleted: false,
      toggleMode: this.toggleMode
    };
  }

  toggleMode = () => {
    const mode = this.state.mode === "dark" ? 'light' : 'dark';
    console.log('New Mode', mode)
    this.setState({mode})
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }

}

export default Theme;
