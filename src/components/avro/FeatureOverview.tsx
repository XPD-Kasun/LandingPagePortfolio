import React from 'react';
import {IoChevronForwardOutline as ArrowRight } from 'react-icons/io5';

type Props = {};

function FeatureOverview({ }: Props) {
	return (
		<section className="">
			<div className="bg-avro py-10">
				<div className="container-centered">
					<div className="sm:flex rounded-lg bg-slate-100/90 overflow-hidden p-3 space-x-3">
						<ul className="shadow-lg cursor-pointer w-1/3 rounded-lg overflow-hidden h-full bg-slate-100">
							{
								Array(5).fill(0).map((_, i) => (
									<li className="group p-3 border-t border-slate-400/20 text-black p-3 text-avrosub hover:bg-white">
										<span>Software Engineering</span>
										<ArrowRight className="ml-3 inline-block group-hover:inline-block hidden"></ArrowRight>
									</li>
								))
							}
						</ul>
						<div className="">
							<div className="">
								<img src="./avro/data-img2.jpg" />
								<p className="my-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quasi accusantium? Dolor aut ea, aperiam, sint nulla cumque dolores obcaecati, dolorem eum laudantium veritatis similique consequatur itaque animi incidunt! Delectus!</p>
								<button className="text-white block rounded-l-full rounded-r-full outline outline-1 outline-white btn bg-avroalt rounded-none my-6">Open Data Organizer</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default FeatureOverview