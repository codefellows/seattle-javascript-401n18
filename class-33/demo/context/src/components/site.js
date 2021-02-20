import React, { useContext } from 'react';
import { SettingsContext } from '../context/site.js';

function SettingsEditor(props) {

  // In function components, use useContext() to specify a context and use any state or methods exposed
  // You can use any number of contexts in this way, each with their own reference
  const context = useContext(SettingsContext);

  return (
    <>
      <h2>Site Settings</h2>
      <label>
        <span>Site Title</span>
        <input
          placeholder="Site Title"
          name="title"
          onChange={e => context.changeTitleTo(e.target.value)}
        />
      </label>

      <label>
        <span>Twitter Handle</span>
        <input
          placeholder="Twitter Handle"
          name="twitter"
          onChange={e => context.changeTwitterTo(e.target.value)}
        />
      </label>
    </>
  );
}

export default SettingsEditor;
