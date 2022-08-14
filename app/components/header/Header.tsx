import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useTheme } from '@mui/material/styles';
import { useContext } from 'react';
import { ColorModeContext } from '~/context';
import { ColorModeSwitch } from '../atoms';

const Header = () => {
  const colorModeContext = useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <AppBar sx={{ mb: theme.spacing(5) }} color="transparent">
      <Toolbar sx={{ justifyContent: 'flex-end' }}>
        <FormControlLabel
          control={
            <ColorModeSwitch
              sx={{ m: 1 }}
              defaultChecked
              onChange={colorModeContext.toggleColorMode}
            />
          }
          label=""
        />
      </Toolbar>
    </AppBar>
  );
};
export default Header;
