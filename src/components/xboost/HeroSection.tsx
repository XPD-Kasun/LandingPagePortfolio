import React, { Suspense } from 'react';
import {useRecoilState} from 'recoil';
import dynamic from 'next/dynamic';
import ColorPallet from './ColorPallet';
import ErrorBoundary from '../shared/ErrorBoundary';
import { mainSpeaker3dColorAtom } from '../../recoil/xboost';

const WobbleSpeaker = dynamic(() => import('./WobbleSpeaker'), {
	ssr: false
});

type Props = {};

export default function HeroSection({ }: Props) {

	let [color, _] = useRecoilState(mainSpeaker3dColorAtom);

	return (
		<section className="pb">
			<main className="container-centered">
				<div className="md:flex justify-stretch flex-row-reverse">
					<div className="md:w-3/5 h-[calc(100vh*0.6)] md:h-[calc(100vh-80px)]">
						{/* <ErrorBoundary>
							<Suspense fallback={<div></div>}>
							<WobbleSpeaker color={color}/>
							</Suspense>
						</ErrorBoundary> */}
					</div>
					<div className="md:w-2/5 max-lg:text-center">
						<h1 className="text-6xl lg:text-7xl font-inter font-black md:pt-20">Introducing <br /><span className="whitespace-nobreak text-green-600" style={{color}}>Cozy Orbit Natural</span><br /> Bass II</h1>
						<p className="my-5 md:pr-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quos dolores, vel ea possimus modi hic similique maxime facere magni corporis itaque sunt maiores autem, magnam dolorum ducimus saepe ullam!</p>
						<div>
							<div className="text-xl font-bold font-inter my-5">Select Your Color</div>
							<ColorPallet className="my-3" colors={['#666666', '#feb554', '#edab7b', '#c56a72', '#51df69']} />
						</div>
						<div className="my-10">
							<button className="min-w-[200px] text-lg font-inter btn bg-stone-900 text-white rounded-l-full rounded-r-full active:bg-stone-700">Buy Now</button>
						</div>
					</div>

				</div>
			</main>
		</section>
	)
}