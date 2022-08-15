import { Box, Typography, useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React, { useLayoutEffect, useMemo, useState, useRef } from 'react';
import { Header, ProjectCarousel } from '~/components';
import { Social } from '~/components/atoms';
import { ColorModeContext } from '~/context';
import type { PalletMode } from '~/interfaces';
import { createMuiTheme } from '~/theme';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { skills } from '~/data';
import Stack from '@mui/material/Stack';
import { json } from '@remix-run/node';
import { getProjects } from '~/models';
import { useLoaderData } from '@remix-run/react';
import TypewriterComponent from 'typewriter-effect';
import {
  WaveHandImageBox,
  StyledHeaderBox,
  StyledDownloadCvBox,
  StyledCodeImageBox,
  StyledChip,
  StyledContainer,
  StyledNiceToMeetYouBox,
} from '~/styles';

// suppress server-side warning
if (typeof window === 'undefined') React.useLayoutEffect = () => {};

// Social Icons array
const socialIcons = [
  {
    link: 'https://www.linkedin.com/in/alabi-akintunde/',
    icon: <LinkedInIcon />,
  },
  { link: 'https://github.com/tundealabi', icon: <GitHubIcon /> },
  { link: 'https://twitter.com/tunde_grey', icon: <TwitterIcon /> },
];

type LoaderData = {
  projects: Awaited<ReturnType<typeof getProjects>>;
};

export const loader = async () => {
  return json<LoaderData>({
    projects: await getProjects(),
  });
};

export default function Index() {
  const { projects } = useLoaderData() as LoaderData;
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
        <StyledContainer>
          <WaveHandImageBox>
            <img
              src="../assets/wave_hand.png"
              alt="wave"
              // style={waveHandStyle}
            />
          </WaveHandImageBox>
          {/* INTRODUCTION SECTION - START */}
          <StyledHeaderBox>
            <Typography
              variant="h1"
              color="secondary"
              sx={{ mb: theme.spacing(1) }}
            >
              <TypewriterComponent
                options={{
                  strings: "I'm Tunde Alabi",
                  autoStart: true,
                  loop: true,
                }}
              />
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
              <StyledDownloadCvBox onClick={handleDownloadCv}>
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
              </StyledDownloadCvBox>
            </Box>
          </StyledHeaderBox>
          {/* INTRODUCTION SECTION - END */}
          {/* PROJECTS SECTION - START */}
          <Box>
            {projects.map((project) => (
              <Box sx={{ mb: theme.spacing(16) }} key={project.category}>
                <Typography
                  variant="h2"
                  color="primary.dark"
                  sx={{ mb: theme.spacing(2) }}
                >
                  {project.category} Projects
                </Typography>
                <ProjectCarousel projects={project.projects} />
              </Box>
            ))}
          </Box>
          {/* PROJECTS SECTION - END */}
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
            <StyledCodeImageBox>
              <img
                src="../assets/code1.png"
                alt="wave"
                // width="100%"
                // style={codeImageStyle}
              />
            </StyledCodeImageBox>
            <StyledNiceToMeetYouBox>
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
            </StyledNiceToMeetYouBox>
          </Box>
          <Box
            sx={{
              mb: theme.spacing(14),
            }}
          >
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
        </StyledContainer>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
