import './App.css';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Login from './Components/Login';
import Welcome from './Components/Welcome';
import ListTodo from './Components/ListTodo';
import Navbarr from './Components/Navbarr';
import Logout from './Components/Logout';
import AuthProvider from './security/AuthContext';

function App() {
  return (
    <div className="App">

      <AuthProvider>
      <Router>
      <Navbarr />
       <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/login" element={<Login />} />
       <Route path="/welcome/:username" element={<Welcome />}></Route>
       <Route path="/todos" element={<ListTodo />} /> 
       <Route path="/logout" element={<Logout />} /> 
       </Routes>
      </Router>
      </AuthProvider>  
    </div>
  );
}

export default App;