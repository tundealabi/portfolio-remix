import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import { ThemeProvider, type SxProps } from '@mui/system';
import { styled, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React, {
  type CSSProperties,
  useLayoutEffect,
  useMemo,
  useState,
  useRef,
} from 'react';
import { Header } from '~/components';
import { Social } from '~/components/atoms';
import { ColorModeContext } from '~/context';
import type { PalletMode } from '~/interfaces';
import { createMuiTheme } from '~/theme';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { skills } from '~/data';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

// suppress server-side warning
if (typeof window === 'undefined') React.useLayoutEffect = () => {};

const HeaderBoxStyle: SxProps = {
  width: '45%',
  margin: '4rem auto 6rem',
};

const waveHandStyle: CSSProperties = {
  position: 'absolute',
  top: '-10%',
  left: '-8%',
};

// const pointHandStyle: CSSProperties = {
//   position: 'absolute',
//   top: '43%',
//   right: '-35%',
// };
const DownloadCvBox = styled(Box)(({ theme }) => ({
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

const codeImageStyle: CSSProperties = {
  borderRadius: '20px',
};

const StyledChip = styled(Chip)(({ theme }) => ({
  borderRadius: '4px',
  border: `1px solid ${theme.palette.primary.dark}`,
}));
// Social Icons array
const socialIcons = [
  {
    link: 'https://www.linkedin.com/in/alabi-akintunde/',
    icon: <LinkedInIcon />,
  },
  { link: 'https://github.com/tundealabi', icon: <GitHubIcon /> },
  { link: 'https://twitter.com/tunde_grey', icon: <TwitterIcon /> },
];
export default function Index() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<PalletMode>('light');
  const cvDownloadAnchorRef = useRef<HTMLAnchorElement>(null);

  useLayoutEffect(() => {
    if (prefersDarkMode) {
      setMode('dark');
    } else {
      setMode('light');
    }
  }, [prefersDarkMode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = useMemo(
    () => responsiveFontSizes(createMuiTheme(mode)),
    [mode]
  );

  const handleDownloadCv = () => {
    cvDownloadAnchorRef.current?.click();
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container
          sx={{
            mt: theme.spacing(10),
            mx: theme.spacing(12),
            position: 'absolute',
          }}
        >
          <img src="../assets/wave_hand.png" alt="wave" style={waveHandStyle} />
          {/* INTRODUCTION SECTION - START */}
          <Box sx={HeaderBoxStyle}>
            <Typography
              variant="h1"
              color="secondary"
              sx={{ mb: theme.spacing(1) }}
            >
              I'm Tunde Alabi
            </Typography>
            <Box
              sx={{
                mb: theme.spacing(4),
              }}
            >
              <Typography variant="h3" color="secondary">
                <Typography variant="h3" color="primary.dark" component="span">
                  Frontend Developer and Designer.
                </Typography>{' '}
                I learn and teach everything about Web Technologies and Product
                Design.
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Box
                sx={{
                  columnGap: theme.spacing(4),
                  display: 'flex',
                }}
              >
                {socialIcons.map(({ icon, link }) => (
                  <Social key={link} link={link}>
                    {icon}
                  </Social>
                ))}
              </Box>
              <DownloadCvBox onClick={handleDownloadCv}>
                <AttachFileIcon />
                Download CV
                <a
                  href="../assets/t-resume.pdf"
                  download
                  hidden
                  ref={cvDownloadAnchorRef}
                >
                  cv download link
                </a>
              </DownloadCvBox>
            </Box>
          </Box>
          {/* INTRODUCTION SECTION - END */}
          {/* NICE TO MEET YOU SECTION - START */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              columnGap: theme.spacing(4),
              mb: theme.spacing(6),
            }}
          >
            <Box
              sx={{
                flexBasis: '38%',
              }}
            >
              <img
                src="../assets/code1.png"
                alt="wave"
                width="100%"
                // height="40%"
                style={codeImageStyle}
              />
            </Box>
            <Box
              sx={{
                flexBasis: '50%',
              }}
            >
              <Typography variant="h3" color="secondary">
                Nice to meet you,
              </Typography>
              <Typography
                variant="h2"
                color="primary.dark"
                sx={{ mb: theme.spacing(2) }}
              >
                I am Tunde Alabi
              </Typography>
              <Typography variant="body1" color="secondary">
                Working full time in Angular, Typescript and SCSS, leading the
                team for revamping DotCMS administration system.
              </Typography>
              <Typography
                variant="h2"
                color="primary.light"
                sx={{ mb: theme.spacing(2), mt: theme.spacing(2) }}
              >
                Code, Design, Learn and Teach.
              </Typography>
              <Typography variant="body1" color="secondary">
                Frontend is my true passion and I really enjoy the whole process
                of creating UIs, from the first brainstorming, wireframes,
                mockups, design, all the way until the final product.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              mb: theme.spacing(14),
              position: 'relative',
              // overflow: 'hidden',
            }}
          >
            {/* <img
              src="../assets/point_hand.png"
              alt="point_hand"
              style={pointHandStyle}
            /> */}
            <Typography
              variant="h3"
              color="secondary"
              sx={{ mb: theme.spacing(2) }}
            >
              My Skills include but are not limited to
            </Typography>
            <Stack
              direction="row"
              flexWrap="wrap"
              columnGap={theme.spacing(1)}
              rowGap={theme.spacing(1)}
            >
              {skills()
                .sort()
                .map((skill) => (
                  <StyledChip key={skill} variant="outlined" label={skill} />
                ))}
            </Stack>
          </Box>
          {/* NICE TO MEET YOU SECTION - END */}
        </Container>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
