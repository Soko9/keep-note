import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';
import NotePlate from './components/NotePlate';
import NoteContainer from './components/NoteContainer';
import { GlobalProvider } from './global/GlobalStore';

function App() {
  return (
    <GlobalProvider>
      <div className="app">
        <Header />
        <Counter />
        <NotePlate />
        <NoteContainer />
      </div>
    </GlobalProvider>
  );
}

export default App;