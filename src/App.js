import { Outlet } from 'react-router-dom';
import { AuthContextProvider } from './components/context/AuthContext';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Header />
        <Outlet />
      </AuthContextProvider>
    </div>
  );
}

export default App;
