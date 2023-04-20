import React from 'react';
import { IoArrowForward } from "react-icons/io5";

type Props = {};

export default function FeatureDetails({ }: Props) {
	return (
		<section className="pt bg-neutral-100">
			<div className="container-centered divide-y divide-y-slate-400/20 ">
				{
					featureDetails.map((feature, i) => {

						return (
							<div className="md:flex flex-row-reverse py-10 items-center">
								<div className="md:w-1/2">
									<img className="w-3/4 mx-auto" src={feature.img} />
								</div>
								<div className="md:w-1/2 px-10 p-5">
									<h3 className="font-bold text-md">{feature.subTitle}</h3>
									<h2 className="text-4xl mb-10 font-bold text-avro font-clarendon">{feature.title}</h2>
									<p className="leading-tight mb-10 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus totam et voluptatem aliquam quam aut necessitatibus vero vitae, facere eligendi architecto aspernatur, alias quibusdam aliquid. Voluptas, inventore. Quasi, pariatur ipsa!</p>
									<p className="leading-tight mb-10 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus totam et voluptatem aliquam quam aut necessitatibus vero vitae, facere eligendi architecto aspernatur, alias quibusdam aliquid. Voluptas, inventore. Quasi, pariatur ipsa!</p>
									<p className="leading-tight mb-10 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus totam et voluptatem aliquam quam aut necessitatibus vero vitae, facere eligendi architecto aspernatur, alias quibusdam aliquid. Voluptas, inventore. Quasi, pariatur ipsa!</p>
									<button className="rounded-l-full rounded-r-full px-6 py-3 w-[100%] min-w-[100px] text-white font-bold bg-avroalt flex justify-between hover:w-[200px] transition-[width]">Know More <IoArrowForward className="inline-block ml-4" size={20}></IoArrowForward></button>
								</div>
							</div>
						);

					})
				}
			</div>
		</section>
	)
}

const featureDetails = [
	{
		id: 1,
		img: './avro/data-img11.png',
		subTitle: 'The best analytics',
		title: 'Digital Analysis',
		p: [
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus totam et voluptatem aliquam quam aut necessitatibus vero vitae, facere eligendi architecto aspernatur, alias quibusdam aliquid. Voluptas, inventore. Quasi, pariatur ipsa!'

		]
	},
	{
		id: 1,
		img: './avro/data-img4.png',
		subTitle: 'The best analytics',
		title: 'Digital Analysis',
		p: [
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus totam et voluptatem aliquam quam aut necessitatibus vero vitae, facere eligendi architecto aspernatur, alias quibusdam aliquid. Voluptas, inventore. Quasi, pariatur ipsa!'

		]
	},
	{
		id: 1,
		img: './avro/data-img1.png',
		subTitle: 'The best analytics',
		title: 'Digital Analysis',
		p: [
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus totam et voluptatem aliquam quam aut necessitatibus vero vitae, facere eligendi architecto aspernatur, alias quibusdam aliquid. Voluptas, inventore. Quasi, pariatur ipsa!'

		]
	},
]