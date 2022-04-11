import { Hero } from './hero/hero';
import { NavMenu } from './navbar/nav';
import './style/style.css';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Hero />
    </div>
  );
}

export default App;
