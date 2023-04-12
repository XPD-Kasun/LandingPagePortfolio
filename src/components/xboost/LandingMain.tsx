import React from 'react';
import TabControl from '../shared/TabControl';
import { imgShowcaseStyleWave1, imgShowcaseStyleWave3 } from '../shared/styles';
import { useResize } from '@react-spring/web';
import SpeakerShowcase from './SpeakerShowcase';

type Props = {};

export default function LandingMain({ }: Props) {


	return (
		<section className="pb bg-white">
			<div className="container-centered">
				<div className="md:mb-10 mb-20">
					<TabControl
						tabs={["Overview", "Specs", "Reviews", "Accessories", "Support"]}
						bgColor="#fff"
						borderColor="#aaa"></TabControl>
				</div>
				<div className="md:flex items-stretch lg:items-center mb-20">
					<div className="md:w-1/2 flex justify-start md:justify-center items-center" style={imgShowcaseStyleWave3}>
						<img className="w-1/2 lg:scale-100 overflow-hidden rounded-xl lg:mx-32 lg:my-20" src="./xboost/img/girl.png" />
					</div>
					<div className="md:w-1/2">
						<h2 className="md:w-3/4 text-4xl md:text-5xl font-bold font-inter my-5">Perfect sound immersive world</h2>
						<p className="md:w-3/4 text-neutral-600">QuietComfort 35 wireless headphones II are engineered with renowned noise cancellation. With the Google Assistant and Amazon Alexa built-in, you have instant access to millions of songs, playlists and more—hands free.</p>
					</div>
				</div>
			</div>
			<div className="pt-10 pb-10 relative bg-slate-100">
				<div className="container-centered text-left md:text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-bold font-inter my-5">Premium design</h2>
					<p className="lg:w-1/3 text-neutral-600 mx-auto">When you want to take your music anywhere, you need headphones built to keep up. With impact-resistant materials, glass-filled nylon, and corrosion-resistant stainless steel, they’re engineered to survive life on the go.</p>
				</div>
				<div className="relative">
					<img className="absolute h-full top-0" src="./xboost/img/wave2.png" />
					<SpeakerShowcase></SpeakerShowcase>
					<img className="absolute h-full top-0 right-0 rotate-180" src="./xboost/img/wave2.png" />
				</div>
			</div>
			<div className="container-centered">
				<div className="md:flex items-center flex-row-reverse">
					<div className="md:w-1/2 flex justify-start items-center relative mt-20" style={{...imgShowcaseStyleWave1, backgroundPosition: 'right'}}>
						<div className="bg-yellow-500/70 w-1/2 h-3/4 absolute rounded-xl"></div>
						<img className="w-1/2 md:h-full overflow-hidden rounded-xl relative" src="./xboost/img/guy1.png" />
					</div>
					<div className="md:w-1/2">
						<h2 className="md:w-3/4 text-4xl md:text-5xl font-bold font-inter my-5">Perfect sound immersive world</h2>
						<p className="md:w-3/4 text-neutral-600">QuietComfort 35 wireless headphones II are engineered with renowned noise cancellation. With the Google Assistant and Amazon Alexa built-in, you have instant access to millions of songs, playlists and more—hands free.</p>
					</div>
				</div>

			</div>
		</section >
	)
}