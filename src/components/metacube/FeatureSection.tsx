import React, { useEffect, useRef, useState } from 'react';
import { DotGraphic } from "./Logos";
import { animated, useTransition } from '@react-spring/web';

type Props = {};

export default function FeatureSection({ }: Props) {

	return (
		<section className="pt pb">
			<div className="container-centered snug">
				<h2 className="font-bold font-barlow text-5xl text-center pb-20 relative after:absolute after:left-[50%] after:-top-[80px] after:w-[2px] md:after:w-1 after:h-20 after:bg-neutral-300">Built For Devs</h2>
				<div className="space-y-20">
					<Feature timeout={5000} />
					<Feature timeout={7000} />

				</div>
			</div>
		</section>
	);
}

function Feature({ timeout }) {

	const [activeId, setActiveId] = useState(0);
	const timerRef = useRef(null);

	const transitions = useTransition(activeId, {
		intial: { opacity: 1, scale: 1, y: '0%' },
		from: {
			opacity: 0,
			y: '50%'
		},
		enter: { opacity: 1, scale: 1, y: '0%' },
		leave: { opacity: 0, scale: 0.6, 'position': 'absolute' }
	});

	const onBarClick = (i) => {

		setActiveId(i);
		timerRef.current && clearTimeout(timerRef.current);

	};

	useEffect(() => {
		// timerRef.current = setTimeout(() => {
		// 	setActiveId(id => (id + 1) % 4);
		// }, timeout);
	}, [activeId]);

	return (
		<div className="md:flex justify-between flex-row-reverse lg:items-stretch items-center lg:items-stretch">
			<div className="md:w-1/2 hidden md:block relative">
				{
					transitions((styles, activeId) => (
						<animated.img style={styles} className="drop-shadow-lg" src="./metacube/coding.png" />
					))
				}
			</div>
			<div className="md:w-1/2 flex flex-col justify-between pr-10 relative">
				{
					transitions((styles, activeId) => {

						const item = <FeatureDetail id={activeId + 1}></FeatureDetail>;

						return (
							<animated.div style={styles} className="md:pr-20">
								{item}
							</animated.div>
						);
					})
				}
				<div className="flex gap-2 cursor-pointer outline-none md:pr-20">
					{
						Array(4).fill(0).map((_, i) => {

							let cls = "h-1 w-1/4";
							if (i == activeId) {
								cls += " bg-green-500";
							}
							else {
								cls += " bg-neutral-200 hover:bg-neutral-100";
							}


							return (
								<div key={i} onClick={() => onBarClick(i)} className={cls}>
								</div>
							);
						})
					}
				</div>
			</div>
		</div>
	);
}

function FeatureDetail({ id }: { id: number }) {

	return (

		<div>
			<div className="flex items-center relative max-md:mb-10">
				<DotGraphic className="h-20 w-20" />
				<div>
					<div className="font-bold text-sm text-neutral-500">Easy Integration</div>
					<h3 className="text-xl font-bold text-yellow-200">Simplified and Streamlined Dev experience</h3>
				</div>
				<div className="absolute left-2 -top-4 lg:-top-10 lg:right-0 lg:bottom-[20px] font-clarendon text-4xl text-neutral-600">{id.toString().padStart(2, '0')}</div>
			</div>
			<img className="drop-shadow-lg md:hidden" src="./metacube/coding.png" />
			<p className="my-10">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore ipsam aut recusandae quae nemo alias tempora odio velit! Sapiente, dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, esse quo unde possimus minima iure dicta amet voluptatibus tenetur quod voluptatem nesciunt provident culpa magnam architecto repudiandae expedita, beatae praesentium.
			</p>
		</div>

	);

}