import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Roulette Game',
    description: 'A simple roulette game you can play right in the Gitpod terminal. Pick numbers, spin, and see if you win.',
    image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Python'],
    repoUrl: 'https://github.com/InfernoHK/APSCP-CT',
    featured: true
  },
  {
    id: '2',
    title: 'First Person Video Game',
    description: 'A fast-paced 5v5 FPS set in sunny, summer-themed maps. Think water guns, beaches, and backyard battles.',
    image: 'https://images.pexels.com/photos/7567467/pexels-photo-7567467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Git', 'Python', "UI/UX"],
    repoUrl: 'https://github.com/romanlorentzen49/hydro-war',
    featured: true
  },
  {
    id: '3',
    title: 'Battle Ship',
    description: 'A quick, head-to-head version of the classic Battleship game. Easy to play, hard to master.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['JavasScript'],
    repoUrl: 'https://editor.p5js.org/Kool_Kid/sketches/O-9V-VZ2F',
    featured: true
  },
  {
    id: '4',
    title: 'Start of Building an App',
    description: "An app in progress that shows how patio furniture and grills would look in your space using your phone's camera.",
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['JavaScript', 'HTML/CSS', 'p5.js'],
    repoUrl: 'https://editor.p5js.org/Kool_Kid/sketches/HFHxbx2gb',
    featured: true
  }
];