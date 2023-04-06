import React from 'react';
import Logo from './Logo';

type Props = {};

function Header({ }: Props) {
	return (
		<div className="flex justify-between items-center py-5 ">
			<Logo></Logo>
			<ul className="flex items-center gap-10">
				{
					menus.map((item, i) => (
						<li className="font-bold tracking-wide" key={i}>{item}</li>
					))
				}
				<li>
					<button className="tracking-wide rounded text-white font-bold py-3 px-6 bg-avroalt">Apply</button>
				</li>
			</ul>
		</div>
	)
}

const menus = [
       "Home",
       "Services",
       "Avro University",
       "About Us",
       "Contact Us"
];

export default Header