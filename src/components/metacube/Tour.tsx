import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import { IoCopy } from 'react-icons/io5';

type Props = {};

export default function Tour({ }: Props) {

	const [hasCopied, setHasCopied] = useState(false);
	const [referalLink, setReferalLink] = useState('')

	const onCopyCodeClick = (evt: MouseEvent) => {

		window.navigator.clipboard.writeText(referalLink);

		setHasCopied(true);
		setTimeout(() => {
			setHasCopied(false);
		}, 5000);

	};

	useEffect(() => {
		setReferalLink(`https://fakeaddress.com/referal/${Math.random().toString().substring(2, 10)}`);
	}, []);

	return (
		<section className="pt pb bg-neutral-900">
			<div className="container-centered snug">
				<h2 className="lg:px-20 font-bold font-barlow text-5xl text-center mb-10">Refer Your Friend And Earn Your Free Credits</h2>
				<div className="flex justify-center">
					<img src="./metacube/sendmail.png" />
				</div>
				<p className="text-center my-10 text-lg md:px-32">Tell your friends about MetaCube AI. For every completed referal, we will award you credits worth 50 (Non transferable). Win more credits and experience MetaCube AI more!.</p>
				<p className="text-neutral-400 text-center">Copy your referal link below</p>
				<div className="flex justify-center items-center mt-4">
					<code className="rounded py-2 px-7 bg-slate-800 relative group wrap max-md:text-sm">
						{referalLink}
						<IoCopy className="inline-block cursor-pointer active:text-slate-500 hidden group-hover:block ml-5 absolute right-2 bottom-3" onClick={onCopyCodeClick}/>
						{
							hasCopied && (
								<div className="ml-3 text-slate-500 md:absolute -right-20 bottom-3">Copied !</div>
							)
						}
					</code>

				</div>
			</div>
		</section>
	)
}