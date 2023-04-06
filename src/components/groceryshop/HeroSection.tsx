export default function HeroSection() {
       return (
              <div className="min-h-screen bg-gradient-to-b from-white to-[#f3ffe0]">
                     <div className="relative z-10">
                            <div className="container-centered snug lg:flex flex-row-reverse">
                                   <div className="flex justify-center relative">
                                          <img className="sm:w-2/3 lg:w-full drop-shadow-2xl self-start" src="./groceryshop/img/dish.png" />
                                          <div className="absolute top-44 right-0">
                                                 <div className="popcard">
                                                        <div className="flex -space-x-4">
                                                               {
                                                                      Array(3).fill(0).map((_, i) => (
                                                                             <img className="rounded-full w-16 h-16 border-2 border-white" src={`./groceryshop/img/avatar-${i + 1}.jpeg`} />
                                                                      ))
                                                               }
                                                        </div>
                                                        <div className="font-bold text-center text-sm mt-4">Happy Customers</div>
                                                        <div className="text-sm text-slate-700 text-center flex">
                                                               <span className="relative -top-1">
                                                                      <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                                                                             <path fill="#F8D64E" d="m48,234 73-226 73,226-192-140h238z" />
                                                                      </svg>
                                                               </span>
                                                               <span className="mx-2">4.9</span>
                                                               <span>(+2.5k Ratings)</span>
                                                        </div>
                                                 </div>
                                          </div>
                                          <div className="absolute sm:bottom-20 sm:left-20 ">
                                                 <div className="popcard flex pl-0 py-0 items-center">
                                                        <img className="h-20 mr-3 -ml-1" src="./groceryshop/img/driver.png"></img>
                                                        <div>
                                                               <div className="font-bold text-lg">Fast Delivery</div>
                                                               <div className="text-slate-700">30mins delivery 🚀</div>
                                                        </div>
                                                 </div>
                                          </div>
                                   </div>
                                   <div className="">
                                          <div className="py-10">
                                                 <div className="py-7">
                                                        <div className="font-bold text-leaf text-lg tracking-wide relative">
                                                               100% Organic food
                                                               <img className="inline w-10" src="./groceryshop/img/vegetable.png" />
                                                               <img className="absolute top-[20px] right-0 w-28" src="./groceryshop/img/leaf.png" />
                                                        </div>
                                                        <h1 className="text-4xl font-bold pt-3 sm:6 pb-7 2xl:leading-[5rem] md:text-5xl 2xl:text-7xl">Healthy Lifestyle<br />is your only <span className="whitespace-nowrap text-leaf">Unfair Advantage</span></h1>
                                                        <p className="text-normal text-slate-500 text-lg max-w-sm">Choose healthy habits with Organo daily meal prepared by our expert nutrionist and chef</p>
                                                 </div>
                                                 <div className="flex space-x-5">
                                                        <button className="btn px-6 py-3 border border-leaf border-2 bg-leaf text-white shadow-lg shadow-leaf/50">Get Started</button>
                                                        <button className="btn border border-2 border-black shadow-lg shadow-zinc/5">Explore Menu</button>
                                                 </div>
                                          </div>
                                          <div className="flex max-w-md items-center">
                                                 <img className="w-24	drop-shadow-md" src="./groceryshop/img/chef.png" />
                                                 <div className="">
                                                        <div className="font-bold text-lg self-start">Chef of the month</div>
                                                        <div className="text-slate-500 text-sm -mt-1">People loved his 🍳</div>
                                                        <div className="self-end text-leaf font-bold text-sm">80+ famous dishes</div>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </div>
                     <div className="z-0 absolute top-0 left-0 w-full h-screen">
                            <svg width="100%" height="100vh" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M 0,0 L 100,0 L 0,45 L 0,0" fill="#fff"></path>
                            </svg>
                     </div>
              </div>
       );

}