import React from 'react';
import { MenuItem } from '../../types';
import { LongArrow } from '../../../shared/commonGraphics';
import { IoCardOutline as IoCard, IoDownloadOutline as IoDownload, IoPaperPlaneOutline as IoPaperPlane } from 'react-icons/io5';
import {TbAlignBoxLeftTop, TbDownload} from 'react-icons/tb';

type Props = { productMenu: MenuItem };

export default function ProductSubMenu({ productMenu }: Props) {
	return (
		<div className="absolute">
			<div className="rounded-lg shadow overflow-hidden text-black">
				<div className="flex">
					<div className="p-5 bg-slate-100 w-[300px] spacer">
						<div className="flex items-center">
							<div className="overflow-hidden w-10 h-10 shrink-0">
								<img className="object-cover object-left h-full ml-[3px]" src="./swisscard/logo.png" alt="Swisscard logo" />
							</div>
							<div className="font-barlow font-bold text-xl">SwissCard Platform</div>
						</div>
						<h2 className="font-bold font-barlow text-2xl">Worlds most trusted Card Platform</h2>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, nesciunt?</p>
						<a className='my-5 text-swisssub font-bold flex items-center group' href="#">
							<span>Learn More</span>
							<span className="inline-block w-7 ml-3 rotate-180 transition-transform group-hover:translate-x-1">
								<LongArrow />
							</span>
						</a>
						<div className="border-t pt-3 font-bold text-zinc-500 tracking-widest uppercase text-sm">Additional Resources</div>
						<ul className="text-swisssub font-bold">
							<li className=" align-text-bottom mb-2">
								<a href="#"><IoCard size={24} className="inline mr-1" /> View Pricing</a>
							</li>
							<li className=" align-text-bottom mb-2">
								<a href="#"><TbDownload size={24} className="inline mr-1" /> Downloads</a>
							</li>
							<li className=" align-text-bottom mb-2">
								<a href="#"><TbAlignBoxLeftTop size={24} className="inline mr-1" /> Read Whitepapers</a>
							</li>
						</ul>

					</div>
					<div className="p-5 bg-white">{productMenu.name}</div>
					<div className="p-5 bg-white">{productMenu.name}</div>
				</div>
			</div>
		</div>

	);
}