import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import image from './assets/image.jpg';

function App() {
  const [id, setId] = React.useState(0);
  React.useEffect(
    () => {
      setTimeout(
        () => {
          setId((prev) => prev + 1);
          const newImageEl = document.createElement('img');
          newImageEl.classList.add(`image-${id}`);
          // newImageEl.setAttribute('style', `position:fixed;top:${Math.round(Math.random()*100)}%;left:${Math.round(Math.random()*100)}%`)
          newImageEl.src = image;
          newImageEl.addEventListener('click', () => console.log('clicked'));
          const root = document.getElementById('root');
          root.appendChild(newImageEl);
        },
        10,
      )
    },
    [id],
  )
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;