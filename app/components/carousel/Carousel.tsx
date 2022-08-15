import { styled } from '@mui/system';
import Carousel from 'react-multi-carousel';
import type { IProject } from '~/models';
import Card from '../card/Card';

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

interface IProjectCarousel {
  projects: IProject[];
}

const ProjectCarousel = ({ projects }: IProjectCarousel) => {
  return (
    <StyledCarousel
      centerMode={false}
      ssr
      partialVisible
      infinite
      responsive={responsive}
    >
      {projects.map((project) => (
        <Card key={project.title} project={project} />
      ))}
    </StyledCarousel>
  );
};

export default ProjectCarousel;
