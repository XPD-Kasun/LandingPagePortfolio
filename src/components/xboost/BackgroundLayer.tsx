import React, { useEffect, useState } from 'react';
import { SoftArrowSpiral } from './Shapes';
import { useRecoilState } from 'recoil';
import { mainSpeaker3dColorAtom } from '../../recoil/xboost';

type Props = {};

export default function BackgroundLayer({ }: Props) {

	const [color, _] = useRecoilState(mainSpeaker3dColorAtom);
	const [show, setShow] = useState(true);

	useEffect(() => {

		const resize = () => {
			if (window.innerWidth > window.outerWidth) {
				setShow(x => false);
			}else{ 
				setShow(true);
			}

		};

		window.addEventListener('resize', resize);

		() => {
			window.removeEventListener('resize', resize);
		}

	}, []);

	return (
		<div className="" style={{ display: show ? 'block' : 'none' }}>
			<SoftArrowSpiral className="absolute -top-0 right-0 -z-10 hidden xl:block h-screen w-1/3 text-[#191919]" />
			<svg preserveAspectRatio="xMinYMin meet" className="absolute top-0 left-0 -z-10 h-screen w-full" version="1.0" viewBox="0 0 10 10">
				<path d="M 0 0 L 10 0 L 0 10 L 0 0 z" fill={color} opacity={0.1}></path>
			</svg>
		</div>
	)
}