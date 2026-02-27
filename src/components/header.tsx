'use client';

import Link from 'next/link';
import { MdMenu } from 'react-icons/md';

export default function Header({ onToggle }: { onToggle: () => void }) {
  return (
    <header className='bg-purple md:hidden px-6 py-4 flex flex-row justify-between text-center'>
      <Link href='#' className='font-bold'>
        Miguel Ribeiro
      </Link>
      <button onClick={onToggle}>
        <MdMenu className='self-center size-7' />
      </button>
    </header>
  );
}
