import React from 'react';
import TabControl from '../shared/TabControl';
import { imgShowcaseStyleWave1, imgShowcaseStyleWave3 } from '../shared/styles';
import { useResize } from '@react-spring/web';
import SpeakerShowcase from './SpeakerShowcase';

type Props = {};

export default function LandingMain({ }: Props) {


	return (
		<section className="pt pb bg-white">
			<div className="container-centered">
				<div className="mb-3">
					<TabControl
						tabs={["Overview", "Specs", "Reviews", "Accessories", "Support"]}
						bgColor="#f1f5f9"
						borderColor="#aaa"></TabControl>
				</div>
				<div className="md:flex items-center mb-10">
					<div className="md:w-1/2 flex justify-center items-center" style={imgShowcaseStyleWave3}>
						<img className="w-1/2 overflow-hidden rounded-xl mx-32 my-20" src="./xboost/img/girl.png" />
					</div>
					<div className="md:w-1/2">
						<h2 className="w-3/4 text-5xl font-bold font-inter my-5">Perfect sound immersive world</h2>
						<p className="w-3/4 text-neutral-600">QuietComfort 35 wireless headphones II are engineered with renowned noise cancellation. With the Google Assistant and Amazon Alexa built-in, you have instant access to millions of songs, playlists and more—hands free.</p>
					</div>
				</div>
				<div className="text-left md:text-center">
					<h2 className="text-5xl font-bold font-inter my-5">Premium design</h2>
					<p className="lg:w-1/3 text-neutral-600 mx-auto">When you want to take your music anywhere, you need headphones built to keep up. With impact-resistant materials, glass-filled nylon, and corrosion-resistant stainless steel, they’re engineered to survive life on the go.</p>
				</div>
			</div>
			<div className="mt-10 mb-20 relative">
				<img className="absolute h-full top-0" src="./xboost/img/wave2.png" />
				<SpeakerShowcase></SpeakerShowcase>
				<img className="absolute h-full top-0 right-0 rotate-180" src="./xboost/img/wave2.png" />
			</div>
			<div className="container-centered">
				<div className="md:flex items-center mb-10 flex-row-reverse">
					<div className="md:w-1/2 flex justify-center items-center relative mb-10" style={imgShowcaseStyleWave1}>
						<div className="bg-yellow-500/70 scale-150 w-1/4 h-3/4 absolute rounded-xl"></div>
						<img className="h-full scale-150 overflow-hidden rounded-xl mx-16 lg:mx-32 my-8 lg:my-20 relative" src="./xboost/img/guy1.png" />
					</div>
					<div className="md:w-1/2">
						<h2 className="w-3/4 text-5xl font-bold font-inter my-5">Perfect sound immersive world</h2>
						<p className="w-3/4 text-neutral-600">QuietComfort 35 wireless headphones II are engineered with renowned noise cancellation. With the Google Assistant and Amazon Alexa built-in, you have instant access to millions of songs, playlists and more—hands free.</p>
					</div>
				</div>

			</div>
		</section >
	)
}