import { DiMysql, DiPostgresql } from 'react-icons/di';
import {
  FaCheck,
  FaCss3Alt,
  FaDocker,
  FaGit,
  FaHtml5,
  FaLinux,
  FaPython,
  FaReact,
  FaYarn,
} from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiTypescript } from 'react-icons/si';

const SKILLS = [
  { Icon: SiTypescript, name: 'TypeScript' },
  { Icon: FaHtml5, name: 'HTML5' },
  { Icon: FaCss3Alt, name: 'CSS3' },
  { Icon: RiTailwindCssFill, name: 'Tailwind CSS' },
  { Icon: RiNextjsFill, name: 'Next.js' },
  { Icon: FaReact, name: 'React' },
  { Icon: DiMysql, name: 'MySQL' },
  { Icon: DiPostgresql, name: 'PostgreSQL' },
  { Icon: FaLinux, name: 'Linux' },
  { Icon: FaDocker, name: 'Docker' },
  { Icon: FaGit, name: 'Git' },
  { Icon: FaYarn, name: 'Yarn' },
  { Icon: FaPython, name: 'Python' },
];

const WORKFLOWS = [
  'Design Responsivo ',
  'Definição de arquitetura e estrutura de pastas (modular)',
  'Desenvolvimento de componentes reutilizáveis',
  'Integração com APIs REST utilizando Axios',
  'Tipagem e segurança de dados com TypeScript',
  'Modelagem de banco de dados (MySQL/PostgreSQL)',
  'Versionamento de código com Git',
];

export default function Skills() {
  return (
    <section id='skills' className='section-style gap-12'>
      <div className='flex flex-col gap-8'>
        <h2 className='text-4xl uppercase font-bold text-indigo'>Skills</h2>

        <div className='mb-12'>
          <h3 className='text-2xl font-semibold uppercase text-purple'>
            Linguagens e Ferramentas de Programação
          </h3>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-4'>
            {SKILLS.map(({ Icon, name }) => (
              <div
                key={name}
                className='flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
              >
                <Icon className='size-12 text-gray-700 dark:text-gray-300' />
                <span className='text-sm font-medium text-center'>{name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <h3 className='text-2xl font-semibold uppercase text-purple'>
            workflow
          </h3>
          <ul className='flex flex-col gap-4'>
            {WORKFLOWS.map((workflow) => (
              <li key={workflow} className='flex flex-row gap-2'>
                <FaCheck color='green' />
                {workflow}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
