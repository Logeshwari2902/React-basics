import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import MainLayout from './pages/MainLayout';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './Context/AuthContext';
import store from './redux/Store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <AuthProvider>
        <MainLayout/>  
      {/* <LoginPage/> */}
      </AuthProvider>
    </BrowserRouter>
    </Provider>
    
  );
}

export default App;
