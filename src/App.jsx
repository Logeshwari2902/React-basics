import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import MainLayout from './pages/MainLayout';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './Context/AuthContext';
function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
        <MainLayout/>  
      {/* <LoginPage/> */}
      </AuthProvider>
    </BrowserRouter>
    
  );
}

export default App;
