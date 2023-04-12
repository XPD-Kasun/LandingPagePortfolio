import React from 'react';

type Props = {};

export default function Footer({ }: Props) {
	return (
		<footer className="py-10 bg-black">
			<div className="mx-auto">
				<div className="md:flex items-center justify-center">
					<div className="pt-5 py-3">
						<img className="mx-auto max-h-5 md:mr-10" src="./xboost/img/logo-white.png" />
					</div>
					<ul className="flex items-center gap-x-10 flex-wrap px-10">
						{
							footerItems.map((item, i) => {
								return (
									<li key={i} className="w-1/5 md:1/4 lg:w-auto my-2 text-sm md:text-normal font-bold text-white footer-link">{item}</li>
								)
							})
						}
					</ul>
				</div>
			</div>
		</footer>
	)
}

const footerItems = [
	'Headphones',
	'Speakers',
	'Audio sunglasses',
	'Support',
	'Contact'
];