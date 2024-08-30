import logo from './logo.svg';
import './App.css';
import MainLayout from './pages/MainLayout';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <MainLayout/>
    </BrowserRouter>
    
  );
}

export default App;
