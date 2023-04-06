import React from 'react';
import { IoArrowForwardOutline as ArrowRight } from 'react-icons/io5';

type Props = {};

export default function Clientale({ }: Props) {
	return (
		<div className="md:flex justify-between space-y-6 md:space-y-0 space-x-3">
			<div className="p-5 rounded shadow outline outline-1 outline-slate-200 bg-slate-100 hover:bg-white">
				<h2 className="font-bold mb-3 after-['asdf'] ">Data Analytics</h2>
				<img src="./avro/data-img3.jpg"></img>
				<p className="leading-tight tracking-tight mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt distinctio aliquid nisi esse rerum libero facere, dolorum quod excepturi iure eos voluptas ex maiores voluptates deleniti adipisci cumque. Molestiae, voluptates!</p>
				<div className="py-3">
					<a className="text-sm text-avroalt font-bold hover:underline" href="#">Goto Case Study <ArrowRight className="inline"></ArrowRight></a>
				</div>
			</div>
			<div className="p-5 rounded shadow outline outline-1 outline-slate-200 bg-slate-100 hover:bg-white">
				<h2 className="font-bold mb-3 after-['asdf'] ">Data Analytics</h2>
				<img src="./avro/data-img3.jpg"></img>
				<p className="leading-tight tracking-tight mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt distinctio aliquid nisi esse rerum libero facere, dolorum quod excepturi iure eos voluptas ex maiores voluptates deleniti adipisci cumque. Molestiae, voluptates!</p>
				<div className="py-3">
					<a className="text-sm text-avroalt font-bold hover:underline" href="#">Goto Case Study <ArrowRight className="inline"></ArrowRight></a>
				</div>
			</div>	
			<div className="p-5 rounded shadow outline outline-1 outline-slate-200 bg-slate-100 hover:bg-white">
				<h2 className="font-bold mb-3 after-['asdf'] ">Data Analytics</h2>
				<img src="./avro/data-img3.jpg"></img>
				<p className="leading-tight tracking-tight mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt distinctio aliquid nisi esse rerum libero facere, dolorum quod excepturi iure eos voluptas ex maiores voluptates deleniti adipisci cumque. Molestiae, voluptates!</p>
				<div className="py-3">
					<a className="text-sm text-avroalt font-bold hover:underline" href="#">Goto Case Study <ArrowRight className="inline"></ArrowRight></a>
				</div>
			</div>
		</div>

	);
}