
import './assets/styles/App.css';
import Home from "./pages/Home";
import {SocketProvider} from "./services/context/context";

function App() {
  return (
    <div className="App">
        <SocketProvider>
            <Home />
        </SocketProvider>
    </div>
  );
}

export default App;
