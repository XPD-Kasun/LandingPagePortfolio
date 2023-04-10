import React from 'react';

type Props = {};

export default function RelatedProducts({ }: Props) {
	return (
		<section className="pb pt bg-slate-100">
			<div className="container-centered">
				<div className="flex justify-between items-center">
					<h2 className="text-4xl font-bold">Related Products</h2>
					<button className="btn rounded-full uppercase border border-1 border-black text-sm font-bold">Show All</button>
				</div>

			</div>
		</section>
	)
}