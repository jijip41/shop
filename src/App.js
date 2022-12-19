import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthContextProvider } from './context/AuthContext';
import Header from './components/Header';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 1000,
    },
  },
});

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <Header />
          <Outlet />
        </QueryClientProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
