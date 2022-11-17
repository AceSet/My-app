import './App.css';
import Header from './components/Header.jsx';
import Nav from './components/Nav';

const App = () => {  //стрелочная функция, содержащая разметку JSX.
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='content'>
      </div>
    </div>  
  );
}

export default App;
