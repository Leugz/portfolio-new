'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ReactNode, useState } from 'react';
import {
  MdCode,
  MdMenu,
  MdPerson,
  MdSchool,
  MdStar,
  MdWork,
  MdWorkspacePremium,
} from 'react-icons/md';

const NavList = () => {
  const buttons = [
    {
      title: 'Apresentação',
      ref: '#intro',
      icon: <MdPerson className='self-center size-5' />,
    },
    {
      title: 'Experiência',
      ref: '#exp',
      icon: <MdWork className='self-center size-5' />,
    },
    {
      title: 'Formação',
      ref: '#formation',
      icon: <MdSchool className='self-center size-5' />,
    },
    {
      title: 'Skills',
      ref: '#skills',
      icon: <MdCode className='self-center size-5' />,
    },
    {
      title: 'Hobbies',
      ref: '#hobbies',
      icon: <MdStar className='self-center size-5' />,
    },
    // {
    //   title: 'Certificações',
    //   ref: '#certifications',
    //   icon: <MdWorkspacePremium className='self-center size-5' />,
    // },
  ];

  return (
    <ul className='flex flex-col gap-6 md:gap-4'>
      {buttons.map((button, idx) => (
        <li key={idx}>
          <Link
            href={button.ref}
            className='flex flex-row gap-1 text-center text-white/50 hover:text-white/75 focus:text-white transition-colors'
          >
            {button.icon}
            <p>{button.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default function Layout({ children }: { children?: ReactNode }) {
  const [toggleSide, setToggleSide] = useState(false);

  return (
    <>
      <header className='bg-purple md:hidden p-4 flex flex-row justify-between text-center'>
        <Link href='#' className='font-bold'>
          Miguel Ribeiro
        </Link>
        <button onClick={() => setToggleSide(!toggleSide)}>
          <MdMenu className='self-center size-7' />
        </button>
      </header>
      <div className='w-screen min-h-screen flex flex-row'>
        <aside className='fixed bg-purple w-3xs h-screen hidden md:flex flex-col px-6 py-12 gap-8'>
          <Link href='#' className='self-center'>
            <Image
              src={'/profile.jpg'}
              width={160}
              height={160}
              className='rounded-full border-8 border-white/20'
              alt='profile picture'
            />
          </Link>
          <NavList />
        </aside>

        <div className='flex flex-col w-full h-full md:ml-64'>{children}</div>

        {/* modal */}
        <div
          className={`fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-black/40 transition-opacity duration-300 ${toggleSide ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setToggleSide(!toggleSide)}
        >
          <aside
            className={`absolute z-20 right-0 bg-[#1a1a1a] h-full px-6 py-12 gap-12 w-2/3 rounded-l-3xl flex flex-col transform transition-transform duration-300 ease-in-out ${toggleSide ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <Image
              src={'/profile.jpg'}
              width={160}
              height={160}
              className='rounded-full border-8 border-white/20 self-center'
              alt='profile picture'
            />
            <NavList />
          </aside>
        </div>
      </div>
    </>
  );
}
