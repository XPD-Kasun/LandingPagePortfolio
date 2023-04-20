import React from 'react';
import Logo from './Logo';

type Props = {
	isCompact?: boolean
};

function Header({ isCompact = false }: Props) {

	let paddingCls = isCompact ? 'py-3' : 'py-5';

	return (
		<header>
			<div className="fixed z-20 bg-white w-full shadow-lg">
				<div className={"container-centered flex justify-between items-center " + paddingCls}>
					<Logo></Logo>
					<ul className="hidden md:flex items-center gap-10">
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
			</div>
		</header>
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