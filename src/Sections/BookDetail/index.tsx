import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import './styles.css';
import { addDoc, collection} from "firebase/firestore"; 
import { db } from '../../firebase';

interface Props {
  id?: string
}

const BookDetail = ({id}: Props)=>{
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [currentPage, setCurrentPage] = useState('');
  const [totalPages, setTotalPages] = useState('');

const createBook = async () => {
  const docRef = await addDoc(collection(db, "books"), {
    name,
    author,
    currentPage: Number(currentPage),
    totalPages: Number(totalPages),
  });
  console.log("Document written with ID: ", docRef.id);
}

  const handleSubmit = () =>{
    if (
      name && name !== '' &&
      author && author !== '' &&
      currentPage && currentPage !== '' &&
      totalPages && totalPages !== ''
    ){
      createBook();
    }
  }

  return (
    <div style={{
      display:'flexbox',
      padding:10,
      flexDirection:'row',
    }}>
       <TextField 
        value={name}
        onChange={(e) =>setName(e.target.value)}
       label="Nombre" color="secondary"  margin="dense"  sx={{ width: 1 }} />
       <TextField
        value={author}
        onChange={(e) =>setAuthor(e.target.value)}
       label="Autor" color="secondary"  margin="dense"  sx={{ width: 1 }} />
       <TextField 
        value={currentPage}
        onChange={(e) =>setCurrentPage(e.target.value)}
       label="Pagina Actual" color="secondary"  margin="dense"  sx={{ width: 1 }} />
       <TextField
        value={totalPages}
        onChange={(e) =>setTotalPages(e.target.value)}
       label="Total de Paginas" color="secondary"  margin="dense"  sx={{ width: 1 }} />
       <Button variant="contained"
       sx={{ width: 1 }}
       color='secondary'
       onClick={handleSubmit}
       
       >{id ? 'Editar': 'Crear'}</Button>
    </div>
  );
}

export default BookDetail;