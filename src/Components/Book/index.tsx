import { IBook } from '../../Sections/SheepList';
import './styles.css';

export const Book = ({
  id,
  name,
  currentPage,
  totalPages,
  author,
}: IBook)=>{
  return (
   
      <div>
      <p>{name}</p>
      <p>{currentPage} '/' {totalPages} </p>
      </div>
  );
}

export default Book;
