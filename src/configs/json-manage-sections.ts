import { icons } from '../helpers/icons';
import { images } from '../helpers/images';

export const jsonManageSections = {
  arraySkills: [
    { id: 0, icon: icons.javascript, name: 'JavaScript_S' },
    { id: 1, icon: icons.typescript, name: 'TypeScript_S' },
    { id: 2, icon: icons.react, name: 'React_S' },
    { id: 3, icon: icons.tailwind, name: 'Taildwind_S' },
  ],
  arrayLearning: [
    { id: 0, icon: icons.vue, name: 'Vue_L' },
    { id: 1, icon: icons.cube, name: 'S.O.L.I.D_L' },
    { id: 2, icon: icons.docker, name: 'Docker_L' },
    { id: 3, icon: icons.flutter, name: 'Flutter_L' },
  ],
  arrayProjects: [
    {
      id: 'project-0',
      name: 'label-portfolio',
      description: 'text-porfolio',
      color: '#002448',
      technologies: [icons.react, icons.typescript, icons.tailwind],
      image: images.laptop,
      href: '/',
    },
    {
      id: 'project-1',
      name: 'label-prospector',
      description: 'text-prospector',
      color: '#002448',
      technologies: [icons.react, icons.javascript],
      image: images.laptop,
      href: 'https://www.youtube.com/watch?v=v84SUp02U3c',
    },
    {
      id: 'project-2',
      name: 'label-portfolio',
      description: 'text-porfolio',
      color: '#002448',
      technologies: [icons.react, icons.typescript, icons.tailwind],
      image: images.laptop,
      href: '/',
    },
    {
      id: 'project-3',
      name: 'label-prospector',
      description: 'text-prospector',
      color: '#002448',
      technologies: [icons.react, icons.javascript],
      image: images.laptop,
      href: 'https://www.youtube.com/watch?v=v84SUp02U3c',
    },
  ],
  arrayExperience: [
    {
      id: 0,
      date: 'text-date-pe',
      role: 'text-role-pe',
      projects: 'text-projects-pe',
      technologies: 'text-technologies-pe',
      tasks: 'text-tasks-pe',
    },
    {
      id: 1,
      date: 'text-date-chibuleo',
      role: 'text-role-chibuleo',
      projects: 'text-projects-chibuleo',
      technologies: 'text-technologies-chibuleo',
      tasks: 'text-tasks-chibuleo',
    },
    {
      id: 2,
      date: 'text-date-pa',
      role: 'text-role-pa',
      projects: 'text-projects-pa',
      technologies: 'text-technologies-pa',
      tasks: 'text-tasks-pa',
    },
    {
      id: 3,
      date: 'text-date-cato',
      role: 'text-role-cato',
      projects: 'text-projects-cato',
      technologies: 'text-technologies-cato',
      tasks: 'text-tasks-cato',
    },
  ],
};
