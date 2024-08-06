import { useState } from 'react';
import './App.css';
import FavIcon from './components/favicon/Favicon';
import UserDashboard from './pages/userDashBoard/UserDashBoard';

function App() {
  const [icon,seticon] = useState('https://tse4.mm.bing.net/th?id=OIP.myJMmITCuwgdSskrI2dcLgHaHa&pid=Api&P=0&h=180');
  return (
    <div className="App">
      <FavIcon href={icon}/>
      <UserDashboard />
    </div>
  );
}

export default App;
