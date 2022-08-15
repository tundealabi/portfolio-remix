import MuiCard from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import type { IProject } from '~/models';

const CardComponent = styled(MuiCard)(({ theme }) => ({
  '.MuiCardContent-root': {
    display: 'none',
  },
  '.MuiCardMedia-root': {
    transition: 'opacity 2s',
  },
  '&:hover': {
    '.MuiCardMedia-root': {
      opacity: '0.4',
    },
    '.MuiCardContent-root': {
      display: 'block',
      transition: 'display 2s',
      position: 'absolute',
      top: '15px',
      left: '15px',
    },
  },
}));
const StyledChip = styled(Chip)(({ theme }) => ({
  borderRadius: '4px',
  border: `1px solid ${theme.palette.primary.dark}`,
}));

interface ICardLinkBox {
  href: string;
  target: string;
  rel: string;
}

const CardLinkBox = styled(Box)<ICardLinkBox>(({ theme }) => ({
  alignItem: 'center',
  columnGap: theme.spacing(1),
  cursor: 'pointer',
  display: 'flex',
  px: theme.spacing(1),
  borderBottom: '2px solid transparent',
  transition: 'border-bottom 2s',
  color: theme.palette.primary.dark,
  textDecoration: 'none',
  '&:hover': {
    borderBottom: `2px solid ${theme.palette.divider}`,
    marginBottom: theme.spacing(7),
  },
}));

interface ICard {
  project: IProject;
}

const Card = ({ project }: ICard) => {
  const theme = useTheme();
  return (
    <CardComponent>
      <CardMedia
        component="img"
        height="300"
        image={project.banner}
        alt={project.title}
      />
      <CardContent>
        <Typography variant="h3" color="primary.dark">
          {project.title}
        </Typography>
        <Stack
          direction="row"
          flexWrap="wrap"
          columnGap={theme.spacing(1)}
          rowGap={theme.spacing(1)}
          sx={{ my: theme.spacing(2) }}
        >
          {project.tags.map((tag) => (
            <StyledChip key={tag} label={tag} variant="outlined" />
          ))}
        </Stack>
        <Typography variant="body1">{project.description}</Typography>
        <Box
          sx={{
            display: 'flex',
            columnGap: theme.spacing(5),
            mt: theme.spacing(2),
            marginBottom: theme.spacing(7),
          }}
        >
          <CardLinkBox
            component="a"
            href={project.repositoryLink}
            target={project.repositoryLink ? '_blank' : '_self'}
            rel="noreferrer"
          >
            <CodeIcon />
            Code
          </CardLinkBox>
          <CardLinkBox
            component="a"
            href={project.hostedLink}
            target={project.hostedLink ? '_blank' : '_self'}
            rel="noreferrer"
          >
            <WebIcon />
            Demo
          </CardLinkBox>
        </Box>
      </CardContent>
    </CardComponent>
  );
};

export default Card;
