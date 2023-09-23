import { styled } from '@mui/system';
import Carousel from 'react-multi-carousel';
import type { FC, PropsWithChildren } from 'react';

const StyledCarousel = styled(Carousel)(({ theme }) => ({
  '.react-multi-carousel-track': {
    columnGap: theme.spacing(5),
  },
}));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 2, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ProjectCarousel: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledCarousel
      centerMode={false}
      ssr
      partialVisible
      infinite
      responsive={responsive}
    >
      {children}
    </StyledCarousel>
  );
};

export default ProjectCarousel;
