import { animated, useSpring } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import React, { useEffect, useRef } from 'react';

type Props = {};

export default function Clientale({ }: Props) {

	const previousPosition = useRef<number>(0);
	const ref = useRef<HTMLDivElement>();

	const [styles, api] = useSpring(() => {
		return {
			tr: 0,
			config: {
				mass: 1,
				tension: 100,
				friction: 16
			}
		};
	});

	const bind = useDrag((evt) => {

		if (evt.first && evt.down) {
			previousPosition.current = evt.xy[0] + (ref.current ? ref.current.scrollLeft : 0);
		}
		if (evt.last && !evt.down) {
			if (evt.velocity[0] > 0.5) {
				api.start({ tr: previousPosition.current - evt.xy[0] + (evt.direction[0] > 0 ? -evt.velocity[0] * 100 : evt.velocity[0] * 100) });
			}
		}
		else if (evt.down) {
			api.start({ tr: previousPosition.current - evt.xy[0], immediate: true })
		}
	}, {});

	return (
		<section className="py-10 select-none bg-neutral-800">
			<div className="container-centered snug">
				<h2 className="text-graybg font-bold font-barlow text-5xl text-center pb-20">Here is what our clients say,</h2>
				<AnimatedScrollContainer ref={ref} bind={bind} style={styles}>
					{
						clients.map((item, i) => (
							<Card key={i} name={item.name} company={item.company} description={item.description} img={item.img}></Card>
						))
					}
				</AnimatedScrollContainer>
				<blockquote className="lg:px-40 text-lg italic mt-10 flex justify-center font-semibold text-neutral-400 dark:text-neutral-200">
					<svg aria-hidden="true" className="w-10 h-10 text-gray-700 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
					<div className="text-center">
						<p className="text-neutral-500">"MetaCube is just awesome. We were pleasantly surprised by the number of possibilities MetaCube AI opens for us."</p>
						<small className="text-neutral-500">Jon Dave (Microsoft MVP)</small>
					</div>

				</blockquote>
			</div>
		</section>
	)
}


const AnimatedScrollContainer = React.forwardRef((props: any, ref: React.MutableRefObject<HTMLDivElement>) => {

	const ScrollContainer = (props: any) => {

		const { style, bind, children } = props;

		useEffect(() => {
			ref.current.scrollLeft = style.tr;
		}, [style, ref]);

		return (
			<div>
				<div {...bind()} ref={ref} className="flex items-center font-inter space-x-[11px] overflow-hidden touch-none">
					{
						children
					}
				</div>
				<div className="w-20 mx-auto mt-10">
					
				</div>
			</div>
		);

	};

	const Comp = animated(ScrollContainer);
	return <Comp ref={ref} {...props} />
});

function Card({ name, company, img, description }) {

	return (
		<div className="h-48 w-[calc(100%-10px)] md:w-[calc(100%/2-10px)] lg:w-[calc(100%/3-10px)] rounded-md overflow-hidden shrink-0 text-ellipsis shadow bg-neutral-900 flex items-stretch">
			<div className="w-1/3 min-w-[10rem]">
				<img draggable="false" src={"./groceryshop/img/" + img} alt="Client" className="h-full object-cover object-top select-none" />
			</div>
			<div className="w-2/3 p-3">
				<h3 className="text-sm font-bold text-neutral-600">{company}</h3>
				<h2 className="text-neutral-200 font-bold text-xl mb-3">
					{name}
				</h2>
				<p className="text-xs pb-3">
					{description}
				</p>
			</div>
		</div>
	);
}

let clients = [
	{
		name: 'Rodger Federrer',
		company: 'Microsoft',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptas nam. Eaque laudantium dolores, temporibus sequi blanditiis aliquam perferendis necessitatibus.',
		img: 'avatar-1.jpeg'
	},
	{
		name: 'Shelly Gibson',
		company: 'Google',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptas nam. Eaque laudantium dolores, temporibus sequi blanditiis aliquam perferendis necessitatibus.',
		img: 'avatar-2.jpeg'
	},
	{
		name: 'Evylin Taylor',
		company: 'Amazon AWS',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptas nam. Eaque laudantium dolores, temporibus sequi blanditiis aliquam perferendis necessitatibus.',
		img: 'avatar-3.jpeg'
	},
	{
		name: 'Rodger Federrer',
		company: 'Microsoft',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptas nam. Eaque laudantium dolores, temporibus sequi blanditiis aliquam perferendis necessitatibus.',
		img: 'avatar-1.jpeg'
	},
	{
		name: 'Shelly Gibson',
		company: 'Google',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptas nam. Eaque laudantium dolores, temporibus sequi blanditiis aliquam perferendis necessitatibus.',
		img: 'avatar-2.jpeg'
	},
	{
		name: 'Evylin Taylor',
		company: 'Amazon AWS',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptas nam. Eaque laudantium dolores, temporibus sequi blanditiis aliquam perferendis necessitatibus.',
		img: 'avatar-3.jpeg'
	}
]