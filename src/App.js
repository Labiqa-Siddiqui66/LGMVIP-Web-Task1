
import './App.css';
import Taskform from './components/Taskform';
import Todolist from './components/Todolist';
import Date from './components/Date'
//import Main from '/components/Main';
function App() {
  return (
    <div className='App'>
      <h1 className="heading">Todolist</h1>
      <div className="list-container">
        <Todolist />
      </div>
    </div>


  )
}

export default App;
