import { Container, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import { useMemo, useState } from 'react';
import { Header } from '~/components';
import { ColorModeContext } from '~/context';
import type { PalletMode } from '~/interfaces';
import { createMuiTheme } from '~/theme';

export default function Index() {
  const [mode, setMode] = useState<PalletMode>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = useMemo(() => createMuiTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container sx={{ mt: theme.spacing(10), mx: theme.spacing(12) }}>
          <Typography variant="h1" color="primary">
            hello remix
          </Typography>
        </Container>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
