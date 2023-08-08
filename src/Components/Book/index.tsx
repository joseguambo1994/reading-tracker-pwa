import { Button, Typography } from '@mui/material';
import { colors } from '../../Constants/colors';
import { IBook } from '../../Sections/SheepList';
import styles from './styles.module.css'
import { animated, useSpring } from '@react-spring/web'
import { Edit } from '@mui/icons-material';
import { BookState, useBookStore } from '../../App';
import { useNavigate  } from "react-router-dom";



interface Props {
  book: IBook,
  open: boolean,
  setSelected: (id: string) => void,
}

export const Book = ({
  book,
  open,
  setSelected
}: Props) => {

  const {
    id,
    name,
    currentPage,
    totalPages,
    author,
  } = book;
  const edit = useBookStore((state: BookState) => state.edit)


  const completionPercentage: number = (currentPage / totalPages) * 100 || 0;
  const navigate = useNavigate();
  const animation = useSpring({
    opacity: open ? 1 : 0,

    x: open ? 60 : 100,
    backgroundColor: open ? 'white':'rgb(255, 175, 216)' 
  })

  const editAnimation = useSpring({
    opacity: open ? 1 : 0,
  })

  const resizeAnimation = useSpring({
        backgroundColor: colors.white,
          padding: 2,
          marginBottom: 6,
          marginLeft: 6,
          borderTopLeftRadius: 80,
          borderBottomLeftRadius: 80,
    x: open ? 30: 0,
  });

  return (
    <>
      <animated.div
          style={resizeAnimation}
        onClick={() => setSelected(id)}
      >
        <div
          style={{
            background: open ?  `linear-gradient(to right, ${colors.purpleDark} ${completionPercentage}%, ${colors.white} ${completionPercentage}% 100%)`:
            `linear-gradient(to right, ${colors.purpleLight} ${completionPercentage}%, ${colors.white} ${completionPercentage}% 100%)`,
            display: 'flex',
            flexDirection:'row-reverse',
            padding: 2,
            paddingLeft: 20,
            paddingRight: 10,
            borderTopLeftRadius: 60,
            borderBottomLeftRadius: 60,
       
          }}

        >
          <animated.div
          style={editAnimation}
        onClick={() => console.log('edittt',)}
      >
            <Button onClick={()=>{
              edit(id);
              navigate('/bookdetail', { state: { bookId: id} });
            }} >
         <Edit color='secondary'/>
         </Button>
         </animated.div>

          <Typography variant="body1" component="body"

          >
            {name}
          </Typography>
       
        </div>

      </animated.div>



      {
        open && <animated.div
          style={animation}
          className={styles.fill}
        >
          <Typography variant="body1" component="body"

          >
            {'Autor: ' + author}
          </Typography>
          <Typography variant="body1" component="body"

          >
            {'Paginas: ' + currentPage + '/' + totalPages}
          </Typography>
          
        </animated.div>
      }
    </>
  );
}

export default Book;
