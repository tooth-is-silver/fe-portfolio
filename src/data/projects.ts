import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'dating-dilemma',
    title: '이런 애인 어때?',
    description: '연애 딜레마 밸런싱 게임',
    techStack: ['React', 'TypeScript', 'Supabase', 'Vite'],
    githubUrl: 'https://github.com/tooth-is-silver/dating-dilemma',
    liveUrl: null,
    thumbnail: null,
  },
  {
    id: 'resumate-ai',
    title: 'Resumate AI',
    description: 'AI 기반 이력서 생성 서비스',
    techStack: ['Next.js', 'TypeScript'],
    githubUrl: 'https://github.com/tooth-is-silver/resumate-ai',
    liveUrl: null,
    thumbnail: null,
  },
  {
    id: 'airsupply-homepage',
    title: '에어서플라이',
    description: '서비스 소개 랜딩페이지',
    techStack: ['React', 'CSS'],
    githubUrl: 'https://github.com/tooth-is-silver/airsupply-homepage',
    liveUrl: null,
    thumbnail: null,
  },
];
