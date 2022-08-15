import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Slide from '@mui/material/Slide';
// import { Box } from '@mui/material';
// import { useTheme } from '@mui/material/styles';

const Footer = () => {
  //   const theme = useTheme();
  return (
    <Slide appear={false} direction="down" in>
      <AppBar
        sx={{
          boxShadow: 'none',
          top: 'auto',
          bottom: 0,
        }}
        color="primary"
        position="fixed"
      >
        <Toolbar sx={{ justifyContent: 'center' }}>
          Made with ❤️ using remix
        </Toolbar>
      </AppBar>
    </Slide>
  );
};
export default Footer;
