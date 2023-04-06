import React from 'react';

type Props = {}

export default function Footer({ }: Props) {
	return (
		<footer className="bg-slate-800">
			<div className="container-centered snug py-20">
				<div className="md:flex items-start gap-3 justify-between max-md:divide-y md:divide-x divide-slate-700">
					<div className="p-3 md:w-1/4">
						<img className="w-12 h-12 backdrop-invert" src="./metacube/logo.png" alt="MetaCube Logo" />
						<h2 className="py-3 font-barlow font-weight text-lg">MetaCube</h2>
						<p className="tracking-tight text-xs text-slate-400 font-inter w-3/4">MetaCube and Logo are registered trademarks of MetaCube limited.</p>
						<p className="tracking-tight text-xs text-slate-400 mt-3 font-inter">MetaCube &copy; 2023</p>
					</div>
					{
						footerLinks.map((footerLinkSet, i) => (
							<FooterBlock key={i} title={footerLinkSet.title} menus={footerLinkSet.menus} align={footerLinkSet.align} />
						))
					}
				</div>
			</div>
			<div className="bg-slate-900 text-slate-400 text-center py-2">MetaCube</div>
		</footer>
	)
}

enum Align {
	LEFT,
	RIGHT,
	CENTER
};

interface FooterBlockType {
	className?: string,
	title: string,
	menus: string[],
	align: Align
}

function FooterBlock({ className = '', title, menus, align }: FooterBlockType) {

	let alignClass = 'md:text-center';

	switch (align) {

		case Align.RIGHT:
			alignClass = 'md:text-right';
			break;

		case Align.CENTER:
			alignClass = 'md:text-center';
			break;

	}

	return (
		<div className={"p-3 md:w-1/4 " + className + ' ' + alignClass}>
			<h2 className="-mt-1 pb-3 font-barlow font-weight text-lg max-md:py-5">{title}</h2>
			<ul className="space-y-2">
				{
					menus.map((item, i) => (
						<li className="text-sm font-inter text-slate-300" key={i}>{item}</li>
					))
				}
			</ul>
		</div>
	);
}

const footerLinks = [
	{
		title: 'Developers',
		menus: [
			'Documentation',
			'Learn Machine Learning',
			'DELL 2 Engine',
			'Beta Access',
			'SDKs'
		],
		align: Align.LEFT

	},
	{
		title: 'Links',
		menus: [
			'About',
			'Careers',
			'Support',
			'Testimonials',
			'Contact Us'
		],
		align: Align.CENTER
	},
	{
		title: 'Research',
		menus: [
			'Text Mining',
			'Image Processing',
			'Model Training',
			'Cloud Integration',
			'Environment Sustainability'
		],
		align: Align.RIGHT
	}
]