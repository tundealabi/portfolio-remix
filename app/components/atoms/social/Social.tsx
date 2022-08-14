import { useTheme } from '@mui/system';

type SocialProps = {
  link: string;
  children: React.ReactNode;
};

const Social = ({ link, children }: SocialProps) => {
  const theme = useTheme();
  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        style={{ color: theme.palette.primary.dark }}
      >
        {children}
      </a>
    </>
  );
};

export default Social;
