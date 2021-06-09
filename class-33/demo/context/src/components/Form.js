import {useState, useContext} from 'react';
import {SiteContext} from '../context/Site.js';
import {ThemeContext} from '../context/Theme.js';

function Form() {

  const [newTitle, setNewTitle] = useState('');

  // this "opts into" the context, "grabbing it" from the blob
  const siteInformation = useContext(SiteContext);
  const themeStuff = useContext(ThemeContext);

  const handleChange = (e) => {
    // what they typed is: e.target.value
    setNewTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    siteInformation.changeTitleTo(newTitle);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="New Title?" onChange={handleChange} />
      </form>
      <hr />
      <button onClick={themeStuff.toggleMode}>Change Theme</button>
    </>
  )

}

export default Form;
