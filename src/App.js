import logo from './logo.svg';
import './App.css';
import * as React from 'react';

let x = [];

function App() {
  const [arrayLength, setArrayLength] = React.useState(x.length);
  React.useEffect(
    () => {
      setTimeout(
        () => {
          x.push(new Array(200000).fill('x'));
          setArrayLength(x.length);
        },
        500,
      )
    },
    [arrayLength],
  );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Global array length: {arrayLength}
        </p>
      </header>
    </div>
  );
}

export default App;