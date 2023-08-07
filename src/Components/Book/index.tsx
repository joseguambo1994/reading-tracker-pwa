import { Typography } from '@mui/material';
import { colors } from '../../Constants/colors';
import { IBook } from '../../Sections/SheepList';
import './styles.css';

export const Book = ({
  name,
  currentPage,
  totalPages
}: IBook) => {

  const completionPercentage: number = (currentPage / totalPages) * 100 || 0;
  return (

    <div
      style={{
        backgroundColor: colors.white,
        padding: 2,
      //  marginTop: 6,
        marginBottom:6,
        marginLeft:6,
        borderTopLeftRadius: 80,
        borderBottomLeftRadius: 80,

      }}
    >
      <div
        style={{
          background: `linear-gradient(to right,  ${colors.purpleDark} 0%,  ${colors.purpleLight} ${completionPercentage}%, ${colors.white} 100%)`,
         
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
    </div>
  );
}

export default Book;
