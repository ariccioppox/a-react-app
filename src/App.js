import './App.scss';
import Navbar from './components/Navbar'
import Also from './components/Also';
import Fireflies from './components/Fireflies';
import Professional from './components/Professional';
import Title from './components/Title';

function App() {
  return (
    <div className='containerApp'>
      <div className="App">
        <Navbar />
        <div className='main'>
          <Title />
          <Professional />
          <Also />
        </div>
      </div>
      <Fireflies />
    </div>
  );
}

export default App;
