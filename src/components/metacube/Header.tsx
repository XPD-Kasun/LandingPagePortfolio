import React from 'react';

type Props = {};

export default function Header({ }: Props) {
	return (
		<section className="font-barlow font-bold">
			<div className="container-centered">
				<div className="flex justify-between items-center py-8">
					<div className="flex items-center">
						<div className="">
							<a href="#" className="flex items-center mr-20">
								<img className="w-12 h-12 backdrop-invert mr-2" src="./metacube/logo.png" />
								<div className="font-inter font-bold text-xl">MetaCube</div>
							</a>
						</div>
						<div className="hidden md:block">
							<ul className="flex gap-6 text-zinc-400">
								{
									menuItems.map((item, i) => (
										<li key={i} className="transition-[color] cursor-pointer hover:text-neutral-200">
											{item}
										</li>
									))
								}
							</ul>
						</div>
					</div>
					<div className="">
						<button className="btn bg-white text-black active:bg-neutral-400">Get early access</button>
					</div>
				</div>
			</div>
		</section>
	);
}

const menuItems = [
	'Documentation',
	'Pricing',
	'Resources',
	'Blog'
];