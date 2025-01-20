import './App.css';
import LoginPage from './components/LoginPage';
import { AuthProvider } from './context/AuthContext';
// import BasicTypes from './typescript/BasicTypes';

function App() {

  return (
    <AuthProvider>
      <div className="flex justify-center items-center h-svh flex-col">
        <h1 className="text-3xl mb-5">React + TS</h1>
        {/* <BasicTypes /> */}
        <LoginPage />
      </div>
    </AuthProvider>
  )
}

export default App
