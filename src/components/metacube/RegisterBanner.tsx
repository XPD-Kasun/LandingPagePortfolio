import React from 'react';
import { DotGraphic } from "../../components/metacube/Logos";

type Props = {};

export default function RegisterBanner({ }: Props) {
	return (
		<section className="pb-sm pt-sm bg-neutral-700">
			<div className="container-centered snug">
				<div className="lg:flex flex-row-reverse justify-center items-stretch bg-neutral-900">
					<div className="lg:w-3/4 min-h-[300px] md:min-h-[500px] p-10 flex flex-col">
						<iframe className="w-full flex-1" src="https://www.youtube.com/embed/NWONeJKn6kc" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
					</div>
					<div className="lg:w-1/4 bg-neutral-800 p-10">
						<DotGraphic className="w-20 h-20"></DotGraphic>
						<h2 className="text-5xl font-bold mb-3 text-neutral-200 font-inter">Get early access</h2>
						<div className="text-sm text-neutral-400">A seamless way to integrate AI</div>
						<div className="py-10">
							<div className="mb-3">
								<label className="text-neutral-400 text-sm">User Name*</label>
								<input type="text" className="textbox text-white rounded-md w-full px-4 py-2 bg-neutral-500" placeholder="Type a username" />
							</div>
							<div className="mb-8">
								<label className="text-neutral-400 text-sm">Email*</label>
								<input type="email" className="textbox rounded-md w-full px-4 py-2 bg-neutral-500" placeholder="Type an email" />
							</div>
							<button className="btn bg-metaalt font-inter">Get Access Now</button>
						</div>
						<div>
							<p className="text-neutral-400 text-sm">
								By clicking the submit button below, you agree to our <a href="#" className="underline">Terms and conditions</a> and <a className="underline" href="#">privacy policy</a>. We might send you occational emails using the above email address.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}