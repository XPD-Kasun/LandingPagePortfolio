import React, { useState } from 'react';
import Logo from './Logo';
import { IoCart, IoSearch, IoChevronDown, IoMenu, IoClose, IoLogInOutline as IoLogIn, IoAdd } from 'react-icons/io5';
import { useRecoilState } from 'recoil';
import { isMobileMenuOpenAtom } from '../../recoil/xboost';
import { useTransition, animated } from '@react-spring/web';
import backArrow from '../../../public/xboost/img/long-backarrow.svg';

console.log(backArrow)

type Props = {};

function Header({ }: Props) {

       const [isMobileMenuOpen, setIsMobileMenuOpen] = useRecoilState(isMobileMenuOpenAtom);
       const [subMenu, setSubMenu] = useState('');
       const transition = useTransition(subMenu, {
              from: { x: '-100%' },
              enter: { x: '0%' },
              leave: { x: '-100%' }
       });

       const onMobileMenu = (evt) => {

              setIsMobileMenuOpen(isMobileMenuOpen => !isMobileMenuOpen);
       };

       const onMobileSubGoBack = () => {
              setSubMenu('');
       };

       const onMobileMenuClick = (item) => {
              if(item[0] == 'S') {
                     return;
              }
              setSubMenu(item);
       }

       return (
              <section className="fixed w-full z-30">
                     <header className="top-header">
                            <nav className="flex items-center">
                                   <Logo></Logo>
                                   <ul className="hidden md:flex items-center gap-10 ml-12">
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
                            <nav className="">
                                   <div className="hidden md:flex items-center space-x-4 text-white">
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
                                          {
                                                 isMobileMenuOpen ? <IoClose size={30}></IoClose> : <IoMenu size={30} />
                                          }
                                   </div>
                            </nav>
                     </header>
                     <header className="mobile-header backdrop-blur-md" style={{
                            display: isMobileMenuOpen ? 'block' : 'none'
                     }}>
                            <div className="flex flex-col justify-center items-center h-full">
                                   <ul className="p-6">
                                          {
                                                 menus.map((item, i) => (
                                                        <li className="select-none font-inter text-center text-xl mb-10 cursor-pointer font-bold tracking-wide group relative hover-text-effect" key={i} onClick={evt => onMobileMenuClick(item)}>
                                                               <div className="font-bolder inline-flex inline justify-enter relative">{item}</div>
                                                        </li>
                                                 ))
                                          }
                                   </ul>
                                   <div className="mx-auto w-full">
                                          <div className="pt-5 flex space-x-5 justify-center">
                                                 <button className="btn rounded-full bg-green-400 min-w-[130px] flex justify-between items-center active:bg-green-600"><IoLogIn size={20} /> Log In</button>
                                                 <button className="btn rounded-full bg-green-400 min-w-[130px] flex justify-between items-center active:bg-green-600"><IoAdd size={20} /> Register</button>
                                          </div>
                                   </div>
                            </div>
                     </header>
                     {
                            transition((style, item) => {

                                   if (item == '' || !isMobileMenuOpen) {
                                          return null;
                                   }

                                   return (
                                          <animated.header style={style} className="mobile-header !bg-teal-100">
                                                 <div className="m-6 select-none flex items-center cursor-pointer" onClick={onMobileSubGoBack}>
                                                        <div className="mr-5">
                                                               <img className="h-3 object-contain" src={backArrow.src} alt="Go back" />
                                                        </div>
                                                        <div className="">Go Back</div>
                                                 </div>
                                                 <div className="m-6">
                                                        <h2 className="text-xl font-bold mb-3">Browse Headphone Categories</h2>
                                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates inventore odio amet magni.</p>
                                                        <ul className="mt-10">
                                                               {
                                                                      Array(3).fill(0).map((_, i) => (
                                                                             <li className="flex items-center justify-center space-x-5 mb-5 transition-transform active:translate-y-[10px]">
                                                                                    <div className="w-72">
                                                                                           <img src={`./avro/data-img${i + 2}.jpg`}></img>
                                                                                    </div>
                                                                                    <div>
                                                                                           <h3 className="text-md font-bold font-inter">Personal Headphones</h3>
                                                                                           <p className="text-sm leading-tight">Headphones for your personal use. Enjoy music and movies with emmersive experience.</p>

                                                                                    </div>
                                                                             </li>
                                                                      ))
                                                               }
                                                        </ul>
                                                 </div>
                                          </animated.header>
                                   );

                            })
                     }
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