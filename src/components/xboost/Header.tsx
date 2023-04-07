import React from 'react';
import Logo from './Logo';
import { IoCart, IoSearch, IoChevronDown } from 'react-icons/io5';

type Props = {};

function Header({ }: Props) {
       return (
              <section className="relative z-8">
                     <header className="flex justify-between items-center py-5 container-centered">
                            <nav className="flex items-center">
                                   <Logo></Logo>
                                   <ul className="flex items-center gap-10 ml-12">
                                          {
                                                 menus.map((item, i) => (
                                                        <li className="font-bold tracking-wide" key={i}>{item}</li>
                                                 ))
                                          }
                                   </ul>
                            </nav>
                            <nav className="flex items-center space-x-4 text-white">
                                   <div><IoCart size={30} /></div>
                                   <div><IoSearch size={30} /></div>
                                   <div className="flex items-center space-x-2">
                                          <div className="rounded-full w-10 h-10 overflow-hidden">
                                                 <img src="./groceryshop/img/avatar-1.jpeg" />
                                          </div>
                                          <div><IoChevronDown size={24}/></div>
                                   </div>
                            </nav>
                     </header>
              </section>
       )
}

const menus = [
       "Headphones",
       "Speakers",
       "Audio Sunglasses",
       "Support",
       "About Us"
];

export default Header