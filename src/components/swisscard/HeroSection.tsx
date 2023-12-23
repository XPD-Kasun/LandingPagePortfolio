import React from 'react';
import { IoArrowForward } from 'react-icons/io5';
import { Card } from './elements/Images/Card';

type Props = {};

export default function HeroSection({ }: Props) {
	return (
		<section className="pt-28 pb-32 bg-swiss">
			<div className="container-centered snug text-swisstext">
				<div className="md:flex flex-row-reverse items-center">
					<div className="md:w-1/2 relative">
						<Card className="perspective-1200 drop-shadow relative z-20 rotate-y-30"/>
						<Card className="perspective-1000 stub-card" />
					</div>
					<div className="md:w-1/2">
						<h1 className="font-bold font-inter text-7xl text-swisstext">The Only Card You Will Ever Need</h1>
						<p className="mt-10 text-lg font-barlow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia at explicabo laborum? Nesciunt eos sunt, saepe cum quam hic blanditiis perspiciatis laudantium omnis molestias possimus at, dicta pariatur nulla sapiente?</p>
						<div className="flex mt-10 items-center">
							<button className="btn rounded-full bg-swisssub font-inter text-lg py-3 px-10 active:bg-swisssub/50">Own SwissCard</button>
							<div className="ml-10 font-inter text-swissalt">
								<a href="#" className="link flex items-center text-lg font-bold group">Or Explore SwissCard More <IoArrowForward className="ml-2 group-hover:translate-x-3 transition-transform" /></a>
							</div>
						</div>
						<div className="mt-10">
							<h2 className="font-bold text-lg tracking-widest">Trusted By Banks in Over 200 Countries</h2>
							<div className="flex items-center">

							</div>
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`

				div :global(.stub-card) {
					position: absolute;
					transform: translate(58%, -100%) scale(0.7) rotate(45deg);
					z-index: 1;
				}
				
			`}</style>
		</section>
	)
}