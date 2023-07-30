// constants.ts
import {
  PiInstagramLogoDuotone,
  PiLinkedinLogoDuotone,
  PiWhatsappLogoDuotone,
  PiGithubLogoDuotone,
  PiTiktokLogoDuotone,
} from 'react-icons/pi';
import Link from 'next/link';
import { Skill } from '@/types/Skill';
import {DiJavascript1, DiReact, DiHtml5, DiCss3, DiNodejs, DiGit, DiDocker, } from 'react-icons/di';
import {TbBrandTypescript, TbBrandNextjs} from 'react-icons/tb';
import {SiExpress, SiTailwindcss, SiStyledcomponents,SiRedux, SiSequelize} from 'react-icons/si';
import {GrMysql} from 'react-icons/gr';
import {BsBootstrap} from 'react-icons/bs';
import { SkillCertification } from '@/types/certification';
import { Work } from '@/types/workTypes';


export const headerProps = {
  Hello: "Hello",
  services: "Services",
  work: "Work",
};
export const MainProps = {
  Hello: "Hello",
  Services: "Services",
  Work: "Work",
  Skills: "Skills",
  Contact: "Contact",
  Certificates: "Certificates",
};

export const icons = [
  <PiTiktokLogoDuotone key="tiktok" className='w-8 h-8 hover:animate-pulse hover:cursor-pointer hover:text-[#21D19F]' />,
  <Link href='https://github.com/andersonjhonatan' target='_blank' key="github">
    <PiGithubLogoDuotone className='w-8 h-8 hover:animate-pulse hover:text-[#21D19F]' />
  </Link>,
  <PiWhatsappLogoDuotone key="whatsapp" className='w-8 h-8 hover:text-[#21D19F] hover:cursor-pointer hover:animate-pulse' />,
  <Link href='https://www.linkedin.com/in/anderson-jhonatan/' key="linkedin">
    <PiLinkedinLogoDuotone className='w-8 h-8 hover:text-[#21D19F] hover:animate-pulse' />
  </Link>,
  <PiInstagramLogoDuotone key="instagram" className='w-8 h-8 hover:text-[#21D19F] hover:cursor-pointer hover:animate-pulse' />,
];


export const sections = [
  { name: 'Hello', state: 'hello', active: true },
  { name: 'Services', state: 'services', active: false },
  { name: 'Work', state: 'work', active: false },
  { name: 'Skills', state: 'skills', active: false },
  { name: 'Contact', state: 'contact', active: false },
  { name: 'Certificates', state: 'certificates', active: false },
];

export const sectionsSkills: Skill[] = [
  { id: 0, name: <DiJavascript1 />, state: 'O JavaScript é uma linguagem de programação que permite implementar elementos dinâmicos', active: false },
  { id: 1, name: <DiJavascript1 />, state: 'O JavaScript é uma linguagem de programação que permite implementar elementos dinâmicos', active: true },
  { id: 2, name: <DiReact />, state: 'O React é uma biblioteca JavaScript de código aberto com foco em componentização', active: true },
  { id: 3, name: <DiHtml5 />, state: 'O Html é uma linguagem de marcação', active: true },
  { id: 4, name: <DiCss3 />, state: 'Uma linguagem de estilo utilizada para definir a aparência e o layout de documentos', active: true },
  { id: 5, name: <DiNodejs />, state: 'Um ambiente de execução JavaScript que permite rodar código JavaScript.', active: true },
  { id: 6,  name: <DiGit />, state: 'Um sistema de controle de versão amplamente utilizado para gerenciar.', active: true },
  { id: 7, name: <DiDocker />, state: 'Uma plataforma que permite empacotar, distribuir e executar aplicativos em contêineres.', active: true },
  { id: 8, name: <TbBrandTypescript />, state: 'É uma linguagem de programação, que é um superset tipado do JavaScript.', active: true },
  { id: 9, name: <TbBrandNextjs />, state: 'É uma estrutura de desenvolvimento web Next.js, baseada em React.', active: true },
  { id: 10, name: <SiExpress />, state: 'Um framework web para Node.js que simplifica a criação de aplicativos web e APIs.', active: true },
  { id: 11, name: <SiTailwindcss />, state: 'Um framework CSS utilitário que permite criar interfaces de usuário com rapidez.', active: true },
  { id: 12, name: <GrMysql />, state: 'Um sistema de gerenciamento de banco de dados relacional amplamente utilizado.', active: true },
  { id: 13, name: <SiStyledcomponents />, state: 'Uma biblioteca para estilizar componentes React usando estilos CSS no JavaScript.', active: true },
  { id: 14, name: <SiSequelize />, state: 'Um ORM (Object-Relational Mapping) para Node.js que facilita a interação com bancos de dados.', active: true },
  { id: 15, name: <SiRedux />, state: 'Uma biblioteca de gerenciamento de estado para aplicações JavaScript.', active: true },
  { id: 16, name: <BsBootstrap />, state: 'Um framework CSS popular para o desenvolvimento responsivo de sites e aplicativos web.', active: true },
];


export const certifications: SkillCertification[] = [
  { id: 1, photo: 'certificados/faculdade2.png', active: true },
  { id: 2, photo: 'certificados/faculdade1.png', active: true },
  { id: 3, photo: 'certificados/fundamentos.png', active: true },
  { id: 4, photo: 'certificados/Front.png', active: true },
  { id: 5, photo: 'certificados/UC-2fdbb2be-e8e2-4969-9d9f-5ba8056150cc.jpg', active: true },
  { id: 6, photo: 'certificados/codesh.png', active: true },
]

export const work: Work[] = [
  { id: 1, name: 'projects/tarefas.png', Title: 'Tarefas+', subtitle: 'subtitle', github: 'View Github', deploy: 'Live Preview', linkDeploy: 'https://tasks-p26e.vercel.app/', hastags: ['#ReactJS', '#JavaScript', '#NextJS', '#Typescript', '#Firebase']},
  { id: 2, name: './oi.png', Title: 'titulo', subtitle: 'subtitle', github: 'View Github', deploy: 'Live Preview', linkDeploy: 'https://tasks-p26e.vercel.app/', hastags: ['#ReactJS', '#JavaScript']},
  { id: 3, name: './oi.png', Title: 'titulo', subtitle: 'subtitle', github: 'View Github', deploy: 'Live Preview', linkDeploy: 'https://tasks-p26e.vercel.app/', hastags: ['#ReactJS', '#JavaScript', '#NextJS']},
  { id: 4, name: './oi.png', Title: 'titulo', subtitle: 'subtitle', github: 'View Github', deploy: 'Live Preview', linkDeploy: 'https://tasks-p26e.vercel.app/', hastags: ['#ReactJS', '#JavaScript']},
]