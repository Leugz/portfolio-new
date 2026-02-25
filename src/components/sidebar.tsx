import Link from 'next/link';
import ProfileImage from './profileImage';
import { MdCode, MdPerson, MdSchool, MdStar, MdWork } from 'react-icons/md';

interface sidebarProps {
  isMobile: boolean;
  isOpen?: boolean;
  onClose?: () => void;
}

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

export default function Sidebar({ isMobile, isOpen, onClose }: sidebarProps) {
  const baseClasses = 'flex-col px-6 py-12 gap-8';
  const desktopClasses = 'fixed bg-purple w-3xs h-screen hidden md:flex';
  const mobileClasses = `absolute z-20 right-0 bg-zinc-900 h-full w-2/3 rounded-l-3xl flex flex-col transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`;

  return (
    <aside
      className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses}`}
    >
      <Link
        href='#'
        className='self-center'
        onClick={isMobile ? onClose : undefined}
      >
        <ProfileImage src={'/profile.jpg'} alt='Profile Picture' />
      </Link>
      <NavList />
    </aside>
  );
}
