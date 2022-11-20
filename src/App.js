import './App.css';
import Content from './components/Content';
import Header from './components/Header.jsx';
import Nav from './components/Nav';

const App = () => {  //стрелочная функция, содержащая разметку JSX.
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <Content />
    </div>  
  );
}

export default App;
