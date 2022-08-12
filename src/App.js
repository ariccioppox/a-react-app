import './App.scss';
import Also from './components/Also';
import Fireflies from './components/Fireflies';
import Professional from './components/Professional';
import Title from './components/Title';

function App() {
  return (
    <div className='containerApp'>
      <div className="App">
        <Title />
        <Professional />
        <Also />
      </div>
      <Fireflies />
    </div>
  );
}

export default App;
