import Chip from '@mui/material/Chip';
import { Box, Container, styled } from '@mui/material';

export const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(10),
  paddingInline: theme.spacing(12),
  //   border: '1px solid red',
  //   position: 'absolute',
  [theme.breakpoints.down('sm')]: {
    paddingInline: theme.spacing(3),
  },
}));

export const StyledHeaderBox = styled(Box)(({ theme }) => ({
  width: '45%',
  margin: '4rem auto 6rem',
  [theme.breakpoints.down('md')]: {
    width: '95%',
  },
}));

// const pointHandStyle: CSSProperties = {
//   position: 'absolute',
//   top: '43%',
//   right: '-35%',
// };
export const StyledDownloadCvBox = styled(Box)(({ theme }) => ({
  alignItem: 'center',
  columnGap: theme.spacing(1),
  cursor: 'pointer',
  display: 'flex',
  px: theme.spacing(1),
  borderBottom: '2px solid transparent',
  transition: 'border-bottom 2s',
  '&:hover': {
    borderBottom: `2px solid ${theme.palette.divider}`,
  },
}));

export const WaveHandImageBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '5%',
  left: '-4%',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const StyledCodeImageBox = styled(Box)(({ theme }) => ({
  flexBasis: '38%',
  img: {
    borderRadius: '20px',
    width: '100%',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const StyledNiceToMeetYouBox = styled(Box)(({ theme }) => ({
  flexBasis: '50%',
  [theme.breakpoints.down('md')]: {
    flexBasis: '95%',
  },
}));

export const StyledChip = styled(Chip)(({ theme }) => ({
  borderRadius: '4px',
  border: `1px solid ${theme.palette.primary.dark}`,
}));
