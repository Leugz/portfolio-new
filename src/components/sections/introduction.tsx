import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdDownload, MdEmail } from 'react-icons/md';

export default function Introduction() {
  return (
    <section
      id='intro'
      className='w-full min-h-screen flex flex-col justify-center p-12'
    >
      <div className='flex flex-col gap-3'>
        <h1
          className='text-7xl font-bold uppercase'
          // style={{ fontSize: 'calc(1.725rem + 5.7vw)' }}
        >
          Miguel <span className='text-purple'>Ribeiro</span>
        </h1>
        <h2 className='text-xl uppercase text-gray-400'>
          Recife · Pernambuco ·{' '}
          <a
            href='mailto:miguelribeiro2509@proton.me'
            className='underline text-purple font-semibold hover:text-indigo transition-colors duration-150'
          >
            miguelribeiro2509@proton.me
          </a>
        </h2>
      </div>

      <div className='flex flex-col gap-12 py-12 max-w-250'>
        <p>
          Desenvolvedor Júnior atualmente especializado em front-end. Possuo
          experiência no desenvolvimento de aplicações web e modelagem de
          sistemas, com maior expertise na construção de aplicações utilizando
          NextJs, Docker e Axios para integração de API. Também costumo me
          atentar à aplicação de boas práticas de organização, versionamento e
          estruturação de projetos.
        </p>
        <p>
          Tenho experiência na modelagem e construção de bancos de dados
          utilizando MySQL e PostgreSQL, além da elaboração de diagramas
          técnicos para sistemas e estruturas de dados. Possuo familiaridade com
          Python, C#, Javascript e Typescript, sendo Typescript minha principal
          linguagem atualmente.
        </p>
      </div>

      <div className='flex flex-row gap-10'>
        {[
          {
            name: 'Github',
            link: 'https://github.com/Leugz',
            icon: <FaGithub className='size-10' />,
          },
          {
            name: 'Linkedin',
            link: 'https://www.linkedin.com/in/lmiguelcribeirofs/',
            icon: <FaLinkedin className='size-10' />,
          },
          {
            name: 'email',
            link: 'mailto:miguelribeiro2509@proton.me',
            icon: <MdEmail className='size-10' />,
          },
          {
            name: 'curriculo',
            icon: <MdDownload className='size-10' />,
            isDownload: true,
          },
        ].map((icon) => (
          <a
            key={icon.name}
            href={icon.link}
            download={icon.isDownload ? 'curriculum.pdf' : undefined}
            target='_blank'
            className='transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:drop-shadow-[0_0_10px_rgb(79,70,229)]'
          >
            <div className='w-10'>{icon.icon}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
