import { Typography } from '@mui/material';
import { colors } from '../../Constants/colors';
import { IBook } from '../../Sections/SheepList';
import styles from './styles.module.css'
import { animated, useSpring } from '@react-spring/web'


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

  const completionPercentage: number = (currentPage / totalPages) * 100 || 0;

  const animation = useSpring({
    opacity: open ? 1 : 0,

    x: open ? 60 : 100,
    backgroundColor: open ? 'white':'rgb(255, 175, 216)' 
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
        //  style={resizeAnimation}
        //  className={styles.containerName}
          style={resizeAnimation}
        // style={{
        //   backgroundColor: colors.white,
        //   padding: 2,
        //   //  marginTop: 6,
        //   marginBottom: 6,
        //   marginLeft: 6,
        //   borderTopLeftRadius: 80,
        //   borderBottomLeftRadius: 80,

        // }}
        onClick={() => setSelected(id)}
      >
        <div
          style={{
           // background: `linear-gradient(to right,  ${colors.purpleDark} 0%,  ${colors.purpleLight} ${completionPercentage}%, ${colors.white} 100%)`,
            background: `linear-gradient(to right, ${colors.purpleLight} ${completionPercentage}%, ${colors.white} ${completionPercentage}% 100%)`,

            padding: 2,
            paddingLeft: 20,
            paddingRight: 10,
            borderTopLeftRadius: 60,
            borderBottomLeftRadius: 60,
          }}

        >
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
