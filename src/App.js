import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/navigation.component';

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
