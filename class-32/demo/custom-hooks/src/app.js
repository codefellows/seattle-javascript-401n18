import React from 'react';
import FoodFromClass from './components/food-with-class.js';
import FoodFromFunction from './components/food-with-function.js';
import FoodFromHook from './components/food-with-hooks.js';
import './app.scss';

function App() {
  return (
    <main>
      <section>
        <FoodFromClass />
        <FoodFromFunction />
        <FoodFromHook />
      </section>
    </main>
  );
}

export default App;
