import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';
import NotePlate from './components/NotePlate';
import NoteContainer from './components/NoteContainer';

function App() {
  return (
    <div className="app">
      <Header />
      <Counter />
      <NotePlate />
      <NoteContainer />
    </div>
  );
}

export default App;