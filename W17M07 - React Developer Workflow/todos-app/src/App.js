import './App.css';
import Navigation from './components/navigation/Navigation';
import TodosList from './components/todoslist/TodosList';

function App() {
  return (
    <div>
      <nav>
        <Navigation />
      </nav>
      <main>
        <section className='profileSection'>
           <div className="Profile"> Profile Component will load soon </div>
        </section>
        <section className='todosSection'>
          <TodosList />
          <div className="AddTodo"> AddTodo Component will load soon </div>
        </section>
      </main>
    </div>
  );
}

export default App;
