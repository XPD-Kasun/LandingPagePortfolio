import React from 'react';

type Props = {};

export default function Header({ }: Props) {
	return (
		<header className="w-full relative z-20">
				<nav className="flex justify-between items-center container-centered snug">
					<div>
						<a className="text-4xl font-bold py-8 tracking-wide" href="#">
							Organ<span className="text-leaf">o</span>
						</a>
					</div>
					<div>
						<ul className="flex justify-between space-x-10 py-8 items-center">
							{
								menus.map((item, i) => (
									<li className="px-1 font-bold tracking-wide group">
										<a href="#">{item} </a>
										<div className="rounded -ml-1 h-1 w-[120%] scale-x-0 group-hover:scale-x-100 bg-leaf transition origin-left"></div>
									</li>
								))
							}
							<li>
								<button className="shadow-lg shadow-leaf/50 rounded-xl bg-leaf text-white font-bold px-6 py-3">Get Started</button>
							</li>
						</ul>
					</div>
				</nav>
			</header>
	);
}

const menus = [
	'Home',
	'Delivery',
	'Pricing',
	'FAQs',
	'Contact'
];