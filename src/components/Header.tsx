import Link from 'next/link';
import menu_icon from '../../public/menu_icon.svg'
import Image from 'next/image';
import { useState } from 'react';
export default function Header() {
  const [show, setShow] = useState(false);
  function showMenu() {
    setShow(!show)
  }
  return (
    <div className='nav bg-black text-white py-4 px-6 md:px-12'>
      <div className='px-0 md:px-16'>

        <div className='flex items-center justify-between'>
          <div className='logo'>
            <h1 className='text-xl md:text-2xl'><b>Fuvay Dev. Tech.</b></h1>
          </div>
          <Image src={menu_icon} alt="" className='lg:hidden block' onClick={() => showMenu()} />
          <div className={`link lg:flex items-center lg:flex-row flex-col hidden`}>
            <ul className='links flex gap-1  md:gap-8 lg:flex-row flex-col'>
              <li><Link href="/">Home</Link></li>
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
            <div className='bot-btn ml-4 md:ml-8'>
              <button className='bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded max-w-5/4 md:max-w-[150px] '>
                <Link href="/chatbot">Chat with Bot</Link>
              </button>
            </div>
          </div>
        </div>
        <div className={`link  items-center  flex-col mt-[20px] ${show ? 'flex' : 'hidden'}`}>
          <ul className='links flex gap-1  md:gap-8  flex-col'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
          <div className='bot-btn ml-4 md:ml-8'>
            <button className='bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded max-w-5/4 md:max-w-[150px] '>
              <Link href="/chatbot">Chat with Bot</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
