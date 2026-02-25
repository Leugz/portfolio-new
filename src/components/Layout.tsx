'use client';

import { ReactNode, useState } from 'react';
import Header from './header';
import Sidebar from './sidebar';

export default function Layout({ children }: { children?: ReactNode }) {
  const [toggleSide, setToggleSide] = useState(false);

  return (
    <>
      <Header onToggle={() => setToggleSide(!toggleSide)} />
      <div className='w-screen min-h-screen flex flex-row'>
        <Sidebar isMobile={false} />
        <div className='flex flex-col w-full h-full md:ml-64'>{children}</div>

        {/* modal */}
        <div
          className={`fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-black/40 transition-opacity duration-300 ${toggleSide ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setToggleSide(!toggleSide)}
        >
          <Sidebar
            isMobile={true}
            isOpen={toggleSide}
            onClose={() => setToggleSide(false)}
          />
        </div>
      </div>
    </>
  );
}
