import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, [])


  const onClose = () => {
    tg.close();
  };


  return (
    <div className="App">
      <h1>
        It is mini App
      </h1>
    </div>
  );
}

export default App;
