import { useState } from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import SheepList from './Sections/SheepList';
import Auth from './Sections/Auth';
import BottomNavigator from './Components/BottomNavigator';
import BookDetail from './Sections/BookDetail';


export const Sections = {
  Auth: 0,
  SheepList: 1,
  BookDetail: 2,
  Error: 3,
}


const App = () => {
  const [page,setPage] = useState<number>(Sections.Auth);  
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
      {
        page === Sections.Auth && <Auth />
      }
      {
        page === Sections.SheepList && <SheepList />
      }
      {
        page === Sections.BookDetail && <BookDetail />
      }
      </div>
      <div style={{
        position:'absolute',
        bottom:0
      }}>
      <BottomNavigator
      page={page}
      setPage={setPage}
      />
      </div>
    </div>
  );
}

export default App;
