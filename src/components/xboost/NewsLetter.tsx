import React from 'react';

type Props = {};

export default function NewsLetter({ }: Props) {
	return (
		<section className="pt sm:mt-0 bg-slate-100 relative">
			<div className="bg-neutral-800 w-full h-[80%] bottom-0 left-0 absolute z-10"></div>
			<div className="container-centered relative z-20">
				<div className="md:flex w-full">
					<div className="w-full md:w-1/2 relative">
						<img src="./xboost/img/girl2.png" className="md:absolute mx-auto w-1/2 sm:w-3/5 md:w-full lg:w-4/5 xl:w-1/2 bottom-0 left-0 xl:left-[30%]" />
					</div>
					<div className="w-full md:w-1/3">
						<div className="md:pt-20 pb-20">
							<h2 className="text-5xl text-white font-bold">Being first has its perks</h2>
							<p className="my-5 text-white">Sign up to get more information about Bose, exclusive first looks at promotions, new products and more.</p>
							<div className="lg:flex items-center gap-x-5">
								<input type="text" className="rounded-full mb-3 flex-1 lg:mb-0 w-full lg:w-auto py-2 px-4" placeholder="amanda@mymail.com" />
								<button className="w-full btn rounded-full bg-white flex-1 radar-button">SIGN UP</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}	