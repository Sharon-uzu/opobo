import './App.css';
import SignUp from './Screens/SignUp';
import { Route, Routes } from 'react-router-dom';
import UsersData from './Screens/UsersData';

function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<SignUp/>} />
        <Route path='/users' element={<UsersData/>} />
      </Routes>
       
    </div>
  );
}

export default App;
