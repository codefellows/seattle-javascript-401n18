import AgeWithClass from './age-class';
import AgeWithFunction from './age-function';
import Family from './family';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Family people={['John', 'Cathy', 'Zach', 'Allie']} />
      <AgeWithClass age={50} />
      <AgeWithFunction age={34} />
    </div>
  );
}

export default App;
