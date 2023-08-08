import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import SheepList from './Sections/SheepList';
import Auth from './Sections/Auth';
import BottomNavigator from './Components/BottomNavigator';
import BookDetail from './Sections/BookDetail';
import { Route, Routes } from "react-router-dom";

const App = () => {
 
  return (
    <div style={{
      height:'100%',
      width:'100%'
    }}>
      <div
       style={{
        height:'80vh',
      }}
      >
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/sheeplist" element={<SheepList />} />
        <Route path="/bookdetail" element={<BookDetail />} />
      </Routes>
      </div>
      <div style={{
        position:'absolute',
        bottom:0
      }}>
      <BottomNavigator
      />
      </div>
    </div>
  );
}

export default App;
