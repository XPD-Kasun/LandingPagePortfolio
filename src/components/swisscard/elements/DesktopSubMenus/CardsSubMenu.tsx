import React from 'react';
import { MenuItem } from '../../types';
import { LongArrow } from '../../../shared/commonGraphics';
import { IoCardOutline as IoCard, IoDownloadOutline as IoDownload, IoPaperPlaneOutline as IoPaperPlane } from 'react-icons/io5';
import { TbAlignBoxLeftTop, TbDownload } from 'react-icons/tb';

type Props = { cardMenu: MenuItem };

export default function CardsSubMenu({ cardMenu }: Props) {
	return (
		<div className="flex">
			{/* <div className="p-5 bg-slate-100 w-[300px] spacer">
				<div className="flex items-center">
					<div className="overflow-hidden w-10 h-10 shrink-0">
						<img className="object-cover object-left h-full ml-[3px]" src="./swisscard/logo.png" alt="Swisscard logo" />
					</div>
					<div className="font-barlow font-bold text-xl">SwissCard Platform</div>
				</div>
				<h2 className="font-bold font-barlow text-2xl">Worlds most trusted Card Platform</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, nesciunt?</p>
				<a className='link my-5 text-swisssub font-bold flex items-center group' href="#">
					<span>Learn More</span>
					<span className="inline-block w-7 ml-3 rotate-180 transition-transform group-hover:translate-x-1">
						<LongArrow />
					</span>
				</a>
				<div className="border-t pt-5 !mb-5 font-bold text-zinc-500 tracking-widest uppercase text-sm">Additional Resources</div>
				<ul className="text-swisssub font-bold">
					<li className=" align-text-bottom mb-2">
						<a className="link" href="#"><IoCard size={24} className="inline mr-1" /> View Pricing</a>
					</li>
					<li className=" align-text-bottom mb-2">
						<a className="link" href="#"><TbDownload size={24} className="inline mr-1" /> Downloads</a>
					</li>
					<li className=" align-text-bottom mb-2">
						<a className="link" href="#"><TbAlignBoxLeftTop size={24} className="inline mr-1" /> Read Whitepapers</a>
					</li>
				</ul>

			</div> */}
			<div className="p-5 bg-white w-[280px] border-l flex flex-col justify-between">
				<div className="pt-3 px-5 mb-3 font-bold text-zinc-500 tracking-widest uppercase text-sm">Additional Resources</div>
				<ul className="flex-1">
					{
						cardMenu.subMenus.map((subMenu) => {

							if (subMenu.category !== 'features') {
								return null;
							}

							return (
								<li key={subMenu.id} className="mb-3 group">
									<a href="#" target="_blank" className="px-5 py-2 transition-[background] hover:bg-neutral-200 cursor-pointer rounded block">
										<h2 className="font-bold font-barlow group-hover:text-swisssub">
											{subMenu.name}
										</h2>
										<p>{subMenu.subtitle}</p>
									</a>
								</li>
							)
						})
					}
				</ul>
				<a href="#" className="link px-5 font-bold text-neutral-500 text-center">View Platform Overview</a>
			</div>
		</div>
	);
}