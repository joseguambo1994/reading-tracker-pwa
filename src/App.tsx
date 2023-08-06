import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import SheepList from './Sections/SheepList';
import Auth from './Sections/Auth';
import BottomNavigator from './Components/BottomNavigator';
import SheepDetail from './Sections/SheepDetail';
// Import the functions you need from the SDKs you need

export const Sections = {
  Auth: 0,
  SheepList: 1,
  SheepDetail: 2,
  Error: 3,
}


const App = () => {
  const [page,setPage] = useState<number>(Sections.Auth);
  
  console.log('page', page)
  return (
    <div className="container">
      {
        page === Sections.Auth && <Auth />
      }
      {
        page === Sections.SheepList && <SheepList />
      }
      {
        page === Sections.SheepDetail && <SheepDetail />
      }
      <BottomNavigator
      page={page}
      setPage={setPage}
      />
    </div>
  );
}

export default App;
