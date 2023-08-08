import { Box, Button, Modal, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import './styles.css';
import { addDoc, collection, deleteDoc, setDoc} from "firebase/firestore"; 
import { db } from '../../firebase';
import { BookState, useBookStore } from '../../App';
import { doc, getDoc } from "firebase/firestore";
import { useFormik } from 'formik';
import { useLocation } from 'react-router-dom';
import Lottie from "lottie-react";
import airplane from "./airplane.json";


const BookDetail = ()=>{

  const {state} = useLocation();
  const id =  state?.bookId || '';
  const [loading, setLoading] = useState(false);


  const formik = useFormik({
    initialValues: {
      name: '',
      author: '',
      currentPage: '',
      totalPages: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const edit = useBookStore((state: BookState) => state.edit)

const createBook = async () => {
  const docRef = await addDoc(collection(db, "books"), {
    name: formik.values.name,
    author: formik.values.author,
    currentPage: Number(formik.values.currentPage),
    totalPages: Number(formik.values.totalPages),
  });
  console.log("Document written with ID: ", docRef.id);
  setLoading(false)
}

const editBook = async (id: string) => {
  await setDoc(doc(db, "books", id), {
    name: formik.values.name,
    author: formik.values.author,
    currentPage: Number(formik.values.currentPage),
    totalPages: Number(formik.values.totalPages),
  });
  setLoading(false)

}

const deleteBook = async (id: string) => {
  await deleteDoc(doc(db, "books", id));
}


const getBook  = async (id: string) => {
  const docRef = doc(db, "books", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    formik.setFieldValue('name',data?.name )
    formik.setFieldValue('author',data?.author )
    formik.setFieldValue('currentPage',data?.currentPage )
    formik.setFieldValue('totalPages',data?.totalPages )
    console.log("Document data:", docSnap.data());
    
  } else {
    console.log("No such document!");
  }
}

  const handleSubmit = () =>{
    if (
      formik.values.name !== '' &&
      formik.values.author !== '' &&
      formik.values.currentPage !== '' &&
      formik.values.totalPages !== ''
    ){
      setLoading(true)
      id && id !== '' ? editBook(id) : createBook();
      edit('')
    }
  }
  const handleDelete = () => {
    deleteBook(id)
  }

  useEffect(()=>{
    if (id && id !== '') getBook(id)
  }, [id])

  return (
   <div style={{
        display:'flexbox',
        padding:10,
        flexDirection:'row',
      }}>
         <TextField 
          value={formik.values.name}
          onChange={(e) =>formik.setFieldValue('name',e.target.value)}
         label="Nombre" color="secondary"  margin="dense"  sx={{ width: 1 }} />
         <TextField
          value={formik.values.author}
          onChange={(e) =>formik.setFieldValue('author',e.target.value)}
         label="Autor" color="secondary"  margin="dense"  sx={{ width: 1 }} />
         <TextField 
          value={formik.values.currentPage}
          onChange={(e) =>formik.setFieldValue('currentPage',e.target.value)}
         label="Pagina Actual" color="secondary"  margin="dense"  sx={{ width: 1 }} />
         <TextField
          value={formik.values.totalPages}
          onChange={(e) =>formik.setFieldValue('totalPages',e.target.value)}
         label="Total de Paginas" color="secondary"  margin="dense"  sx={{ width: 1 }} />
         <Box sx={{ mb: 1, mt:1 }}><Button variant="contained"
         sx={{ width: 1 }}
         color='secondary'
         onClick={handleSubmit}
         
         >{id && id !== '' ? 'Editar': 'Crear'}</Button></Box>
         {
          id && id !== '' && 
          <Box sx={{ mb: 1, mt:1  }}> <Button variant="contained"
          sx={{ width: 1 }}
          color='secondary'
          onClick={handleDelete}
        
          >{'Eliminar'}</Button></Box>
         }
         {
          <Modal
          open={loading}
        >
          <Box sx={{
            width:1,
            height:1
          }}>
          <Lottie animationData={airplane} loop={true} />
          </Box>
        </Modal>
          
         }
      </div>
  );
}

export default BookDetail;