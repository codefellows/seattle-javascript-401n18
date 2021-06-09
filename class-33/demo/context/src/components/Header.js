import {useContext} from 'react';
import {SiteContext} from '../context/Site.js';

function Header(props) {

  const siteInformation = useContext(SiteContext);

  return (
    <header>{siteInformation.title}</header>
  )
}

export default Header;
