import React from 'react';

import {SiteContext} from '../context/Site.js';

// This is FYI ... better to use a Function Component

class Footer extends React.Component {

  render() {
    return (
      <SiteContext.Consumer>
        {
          (siteInformation) => (
            <footer>
              <div>{siteInformation.title} --- {siteInformation.type}</div>
            </footer>
          )
        }
      </SiteContext.Consumer>
    )
  }

}

export default Footer;
