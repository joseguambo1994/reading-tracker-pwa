
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {LocationCity, Favorite, Wallet} from '@mui/icons-material';
import { Sections } from '../../App';
import { Paper } from '@mui/material';

interface Props {
  page: number,
  setPage: (page: number) => void
}

const   BottomNavigator = ({
  page = Sections.Auth,
  setPage,
}: Props)=>{
  
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>

    <BottomNavigation
        sx={{width: 1}}
        showLabels
        value={page}
        onChange={(_event: any, currentPage: number) => {
          console.log('currentPage', currentPage, _event)
          setPage(currentPage);
        }}
      >
        <BottomNavigationAction label={'Auth'} icon={<LocationCity />} />
        <BottomNavigationAction label={'Sheep List'} icon={<Favorite />} />
        <BottomNavigationAction label={'Sheep Detail'} icon={<Wallet />} />
      </BottomNavigation>
      </Paper>
  );
}

export default BottomNavigator;
