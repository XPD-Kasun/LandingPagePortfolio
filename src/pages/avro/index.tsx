import React from "react";
import Header from "../../components/avro/Header";
import HeroSection from "../../components/avro/HeroSection";
import Clientale from "../../components/avro/Clientale";
import FeatureOverview from "../../components/avro/FeatureOverview";
import { IoArrowForward } from "react-icons/io5";

export default function Avro() {

       return (
              <div className="text-avrosub ">
                     <section className="bg-gradient-to-b from-white  to-blue-100 pb">
                            <div className="container-centered">
                                   <Header></Header>
                                   <HeroSection></HeroSection>
                                   <Clientale></Clientale>
                            </div>
                     </section>
                     <FeatureOverview></FeatureOverview>
                     <section className="pt bg-neutral-100">
                            <div className="container-centered">
                                   <div className="flex divide-y divide-y-slate-400/20 flex-row-reverse py-10 items-center">
                                          <div className="w-1/2">
                                                 <img src="./avro/data-img11.png" />
                                          </div>
                                          <div className="w-1/2 px-10 p-5">
                                                 <h3 className="font-bold text-md">The best analytics</h3>
                                                 <h2 className="text-4xl mb-10 font-bold text-avro font-clarendon">Digital Analysis</h2>
                                                 <p className="leading-tight mb-10 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus totam et voluptatem aliquam quam aut necessitatibus vero vitae, facere eligendi architecto aspernatur, alias quibusdam aliquid. Voluptas, inventore. Quasi, pariatur ipsa!</p>
                                                 <p className="leading-tight mb-10 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus totam et voluptatem aliquam quam aut necessitatibus vero vitae, facere eligendi architecto aspernatur, alias quibusdam aliquid. Voluptas, inventore. Quasi, pariatur ipsa!</p>
                                                 <p className="leading-tight mb-10 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus totam et voluptatem aliquam quam aut necessitatibus vero vitae, facere eligendi architecto aspernatur, alias quibusdam aliquid. Voluptas, inventore. Quasi, pariatur ipsa!</p>
                                                 <button className="rounded-l-full rounded-r-full px-6 py-3 min-w-[100px] text-white font-bold bg-avroalt hover:min-w-[200px] transition-[min-width]">Test <IoArrowForward className="inline-block ml-4" size={20}></IoArrowForward></button>
                                          </div>
                                   </div>
                                   <div className="flex flex-row py-10 items-center border-b border-b-slate-400/20">
                                          <div className="w-1/2">
                                                 <img src="./avro/data-img4.png" className="-scale-x-100" />
                                          </div>
                                          <div className="w-1/2 px-10 p-5">
                                                 <h3 className="font-bold text-md">The best analytics</h3>
                                                 <h2 className="text-4xl mb-10 font-bold text-avro font-clarendon">Digital Analysis</h2>
                                                 <p className="leading-tight mb-10 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus totam et voluptatem aliquam quam aut necessitatibus vero vitae, facere eligendi architecto aspernatur, alias quibusdam aliquid. Voluptas, inventore. Quasi, pariatur ipsa!</p>
                                                 <p className="leading-tight mb-10 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus totam et voluptatem aliquam quam aut necessitatibus vero vitae, facere eligendi architecto aspernatur, alias quibusdam aliquid. Voluptas, inventore. Quasi, pariatur ipsa!</p>
                                                 <p className="leading-tight mb-10 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus totam et voluptatem aliquam quam aut necessitatibus vero vitae, facere eligendi architecto aspernatur, alias quibusdam aliquid. Voluptas, inventore. Quasi, pariatur ipsa!</p>
                                                 <button className="rounded-l-full rounded-r-full px-6 py-3 min-w-[100px] text-white font-bold bg-avroalt hover:min-w-[200px] transition-[min-width]">Test <IoArrowForward className="inline-block ml-4" size={20}></IoArrowForward></button>
                                          </div>
                                   </div>
                                   <div className="flex flex-row-reverse py-10 items-center border-b border-b-slate-400/20">
                                          <div className="w-1/2">
                                                 <img src="./avro/data-img1.png" className="-scale-x-100" />
                                          </div>
                                          <div className="w-1/2 px-10 p-5">
                                                 <h3 className="font-bold text-md">The best analytics</h3>
                                                 <h2 className="text-4xl mb-10 font-bold text-avro font-clarendon">Digital Analysis</h2>
                                                 <p className="leading-tight mb-10 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus totam et voluptatem aliquam quam aut necessitatibus vero vitae, facere eligendi architecto aspernatur, alias quibusdam aliquid. Voluptas, inventore. Quasi, pariatur ipsa!</p>
                                                 <p className="leading-tight mb-10 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus totam et voluptatem aliquam quam aut necessitatibus vero vitae, facere eligendi architecto aspernatur, alias quibusdam aliquid. Voluptas, inventore. Quasi, pariatur ipsa!</p>
                                                 <p className="leading-tight mb-10 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus totam et voluptatem aliquam quam aut necessitatibus vero vitae, facere eligendi architecto aspernatur, alias quibusdam aliquid. Voluptas, inventore. Quasi, pariatur ipsa!</p>
                                                 <button className="rounded-l-full rounded-r-full px-6 py-3 min-w-[100px] text-white font-bold bg-avroalt hover:min-w-[200px] transition-[min-width]">Test <IoArrowForward className="inline-block ml-4" size={20}></IoArrowForward></button>
                                          </div>
                                   </div>
                            </div>
                     </section>
                     <section className="pt bg-[#3a5ba2]">SDf</section>
              </div>
       );
}