import React from 'react';
import {Link} from 'react-router-dom';
import styles from './nav.module.css';

const myStyles = {
  backgroundColor: '#888'
}

class Nav extends React.Component {
  render() {
    return (
      <nav style={myStyles.background}>
        <ul>
          <li className={styles.menuItem}><Link to="/">Home</Link></li>
          <li className={styles.menuItem}><Link to="/pokemon">Creatures</Link></li>
        </ul>
      </nav>
    )
  }

}

export default Nav;
