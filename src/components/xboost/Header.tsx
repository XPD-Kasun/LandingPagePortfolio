import React from 'react';
import Logo from './Logo';
import { IoCart, IoSearch, IoChevronDown, IoMenu } from 'react-icons/io5';
import { useRecoilState } from 'recoil';
import { isMobileMenuOpenAtom } from '../../recoil/xboost';

type Props = {};

function Header({ }: Props) {

       const [_, setIsMobileMenuOpen] = useRecoilState(isMobileMenuOpenAtom);

       const onMobileMenu = (evt) => {

              setIsMobileMenuOpen(isMobileMenuOpen => !isMobileMenuOpen);
       };

       return (
              <section className="relative z-8">
                     <header className="flex justify-between items-center py-5 container-centered">
                            <nav className="flex items-center">
                                   <Logo></Logo>
                                   <ul className="hidden md:display flex items-center gap-10 ml-12">
                                          {
                                                 menus.map((item, i) => (
                                                        <li className="cursor-pointer font-bold tracking-wide group relative" key={i}>
                                                               <div>{item}</div>
                                                               <span className="absolute bottom-0 -skew-x-12 left-0 w-0 h-2 bg-[#51df69] transition-[width] -z-10 group-hover:w-full"></span>
                                                        </li>
                                                 ))
                                          }
                                   </ul>
                            </nav>
                            <nav className="flex items-center space-x-4 text-white">
                                   <div className="hidden md:block">
                                          <div><IoCart size={30} /></div>
                                          <div><IoSearch size={30} /></div>
                                          <div className="flex items-center space-x-2">
                                                 <div className="rounded-full w-10 h-10 overflow-hidden">
                                                        <img src="./groceryshop/img/avatar-1.jpeg" />
                                                 </div>
                                                 <div><IoChevronDown size={24} /></div>
                                          </div>
                                   </div>
                                   <div className="cursor-pointer block md:hidden text-black" onClick={onMobileMenu}>
                                          <IoMenu size={30} />
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