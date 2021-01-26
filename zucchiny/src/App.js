import Footer from './components/Footer'
import Countdown from './components/Countdown'

function App() {
  return (
    <div className="App">
      <span className="App__Title"><i>It's beginning to look a lot like</i> <strong>cocktails</strong></span>
      <Countdown />
      <Footer />
    </div>
  );
}

export default App;
