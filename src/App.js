import './App.css';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {

  const {auth, setAuth} = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    setAuth(prev => {return { ...prev, accessCode: Math.random()}} )
  }
  return (
    <div className="App">

      <h1>This is a demo application to learn the implementation of the context api.</h1>
      
        <h2>{auth.email}</h2>
        <h2>{auth.accessCode}</h2>
      
        <button onClick={handleClick}>
          Click me
        </button>
 
    </div>
  );
}

export default App;
