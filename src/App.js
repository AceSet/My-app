import './App.css';
import Content from './components/Content/Content.jsx';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';

const App = () => {  //стрелочная функция, содержащая разметку JSX.
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <Content message='Всем Привет Меня зовут Асет, я хотел продемонстрировать вам свои навыки' />
    </div>  
  );
}

export default App;
