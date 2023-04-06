import React from 'react';
import { IoCaretForwardSharp as PlayIcon } from 'react-icons/io5';

type Props = {};

export default function HeroSection({ }: Props) {
       return (
              <div className="md:flex flex-row-reverse items-center mb-12">
                     <div className="md:w-1/2">
                            <img src="./avro/data-img6.png" />
                     </div>
                     <div className="md:w-1/2 py-10 sm:py-24">
                            <h2 className="font-bold">Trusted Data Analytics Provider</h2>
                            <h1 className="mt-5 mb-8 leading tracking-wide font-clarendon text-6xl lg:text-7xl font-bold"
                                   style={{
                                          background: 'url(./avro/square.webp) right top no-repeat',
                                          backgroundSize: 200
                                   }}>
                                   Unlock<br />the Power of<br />
                                   <span className="text-avro">Your Finances</span>
                            </h1>
                            <main className="tracking-tight w-10/12">
                                   Avro unifies the best of data warehouses and data lakes in one simple platform to handle all your data, analytics and AI use cases. It’s built on an open and reliable data foundation that efficiently handles all data types and applies one common security and governance approach across all your data and cloud platforms.
                            </main>
                            <div className="mt-8 flex items-center cursor-pointer">
                                   <div className="text-white rounded-full border-avroalt border shadow-[0px_0px_10px_1px_#f78484] bg-avroalt inline-block p-3 active:bg-avroalt-600">
                                          <PlayIcon size={20}></PlayIcon>
                                   </div>
                                   <div className="font-bold ml-3 hover:underline decoration-2 underline-offset-2">Learn More</div>
                            </div>
                     </div>
              </div>
       )
}