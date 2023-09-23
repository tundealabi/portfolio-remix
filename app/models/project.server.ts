import projects from '../data/projects.json';

interface IProjectJson {
  category: string;
  items: IProject[];
}

export interface IProject {
  banner: string;
  title: string;
  description: string;
  repositoryLink?: string;
  hostedLink: string;
  tags: string[];
}

export const getProjects = async (): Promise<IProjectJson[]> => {
  return Promise.resolve(projects.data);
};
