import { collection, getDocs } from 'firebase/firestore';
import './styles.css';
import { db } from '../../firebase';
import { useEffect, useState } from 'react';
import Book from '../../Components/Book';

export interface IBook {
  id: string,
  name: string,
  currentPage: number,
  totalPages: number,
  author: string,
}

const SheepList = ()=>{
  const [books, setBooks] = useState<IBook[]>([])
  const [selected, setSelected] = useState<string>('')

  const fetchPost = async () => {
      
    await getDocs(collection(db, "books"))
        .then((querySnapshot)=>{               
            const tempData: IBook[] = querySnapshot.docs
                .map((doc) => ({
                  id: doc.id,
                  name: doc.data()?.name ,
                  currentPage: doc.data()?.currentPage ,
                  totalPages: doc.data()?.totalPages ,
                  author: doc.data()?.author ,
                 }));            
            setBooks(tempData)
        })
   
}

const handleSelected = (id: string) =>{
  if (selected === id) return setSelected('')
  setSelected(id)
}

useEffect(()=>{
    fetchPost();
}, [])

  return (
    <div style={{
      backgroundColor:'yellow',
      height:'100%'
    }}>
      <div style={{
      backgroundColor: 'purple',
      position: 'relative',
      overflowY: 'scroll',
      height: '90vh',
    }}>
      {
        books.map(item => <Book 
          book={item}
          open={selected === item.id}
          setSelected={handleSelected}
        />)
      }
      </div>
      </div>

  );
}

export default SheepList;
