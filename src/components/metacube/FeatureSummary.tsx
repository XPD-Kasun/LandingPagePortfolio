import React from 'react';

type Props = {};

export default function FeatureSummary({ }: Props) {
	return (
		<section className="pb">
			<div className="container-centered snug">
				<div className="md:flex max-md:space-y-10">
					<div className="md:w-1/3 pr-3">
						<img />
						<div className="font-barlow font-bold text-lg mb-10">Faster Than OWIN</div>
						<p className="text-neutral-400 leading-snug">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat provident illo praesentium, blanditiis possimus optio dicta. Alias facere blanditiis, perspiciatis ipsum cumque commodi iure expedita suscipit temporibus sunt adipisci quis.
						</p>
					</div>
					<div className="md:w-1/3 pr-3">
						<img />
						<div className="font-barlow font-bold text-lg mb-10">Faster Than OWIN</div>
						<p className="text-neutral-400 leading-snug">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat provident illo praesentium, blanditiis possimus optio dicta. Alias facere blanditiis, perspiciatis ipsum cumque commodi iure expedita suscipit temporibus sunt adipisci quis.
						</p>
					</div>
					<div className="md:w-1/3 pr-3">
						<img />
						<div className="font-barlow font-bold text-lg mb-10">Faster Than OWIN</div>
						<p className="text-neutral-400 leading-snug">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat provident illo praesentium, blanditiis possimus optio dicta. Alias facere blanditiis, perspiciatis ipsum cumque commodi iure expedita suscipit temporibus sunt adipisci quis.
						</p>
					</div>
				</div>
			</div>
		</section>

	)
}