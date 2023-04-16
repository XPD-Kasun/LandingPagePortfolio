import React from 'react';
import TypeWriter from 'typewriter-effect';
import { Auth2Logo, GraphLogo, StripeLogo, DotNetLogo } from './Logos';

type Props = {};

export default function HeroSection({ }: Props) {
	return (
		<section className="pb">
			<div className="container-centered snug text-center md:text-left">
				<div className="md:flex items-start flex-row-reverse lg:pt-32">
					<div className="w-1/2 mb-10 mx-auto md:w-2/5">
						<img src="./metacube/illustration-1.svg" />
					</div>
					<div className="md:w-3/5 ">
						<h1 className="font-bold text-5xl lg:text-7xl bg-gradient-to-r from-white to-yellow-200 text-transparent bg-clip-text min-h-[150px] md:min-h-[216px]">
							<TypeWriter onInit={(tw) => {
								for(let i = 0; i< headerLines.length; i++ ) {
									tw.typeString(headerLines[i]);
									tw.pauseFor(3000);
									tw.deleteAll();
								}
								tw.start();
							}} options={{delay:50, cursorClassName: 'Typewriter__cursor text-white', loop: true}}/>						
						</h1>
						<p className="my-8 max-md:text-sm md:max-w-[75%]">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit sed repudiandae possimus at commodi officiis dolor eligendi dolores, ex error ad. Aliquid odit nulla voluptatem maiores blanditiis ducimus, ipsa quis.
						</p>
						<div className="md:flex items-center sm:max-md:justify-center ">
							<input type="email" className="text-black rounded bg-white max-md:mb-2 w-80 py-2 px-4" placeholder="Type your email" />
							<button className="ml-3 max-md:text-sm btn bg-gradient-to-b from-green-600 to-metaalt">Get early access</button>
						</div>
						<div className="mt-8">
							<div className="md:flex gap-3 sm:max-md:justify-between items-center text-neutral-400">
								<div className="max-md:mb-2">Supported By</div>
								<div className="flex justify-center items-center gap-3">
									{
										logos.map((Logo, i) => (
											<Logo key={i} className="h-7" />
										))
									}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

const logos = [
	Auth2Logo,
	GraphLogo,
	StripeLogo,
	DotNetLogo
];

const headerLines = [
	'Create Your<br />NextGen AI<br />Powered Apps',
	'Developer Friendly<br/> APIs Are Ready',
	'Interconnect Your<br/>Workflow With<br/>MetaCube'
]