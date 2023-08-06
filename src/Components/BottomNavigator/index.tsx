
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {LocationCity, Favorite, Wallet} from '@mui/icons-material';
import { Sections } from '../../App';

interface Props {
  page: number,
  setPage: (page: number) => void
}

const   BottomNavigator = ({
  page = Sections.Auth,
  setPage,
}: Props)=>{
  
  return (
    <BottomNavigation
        style={{
          position: 'absolute',
          bottom: 0,
        }}
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
  );
}

export default BottomNavigator;
