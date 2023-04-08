import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { mainSpeaker3dColorAtom } from '../../recoil/xboost';

type Props = {
	className: string,
	colors: string[]
};

export default function ColorPallet({ className = "", colors }: Props) {

	let colorCircleCls = 'rounded-full w-7 h-7 cursor-pointer';
	let colorKeyAr = colors.map((color, i) => ({ id: i, 'color': color }));

	const [color, setColor] = useRecoilState(mainSpeaker3dColorAtom);
	const [selectedColor, setSelectedColor] = useState(4);

	const onColorClick = (colorObj) => {
		setSelectedColor(colorObj.id);
		setColor(colorObj.color);
	};

	return (
		<div className={className}>
			<ul className="flex gap-5 items-center justify-center md:justify-start">
				{
					colorKeyAr.map((colorObj, i) => {

						let cls = colorCircleCls;

						if (colorObj.id == selectedColor) {
							cls += ' ring ring-2 ring-black ring-offset-2';
						}

						return (
							<li key={i}>
								<div className={cls} style={{ background: colorObj.color }} onClick={e => onColorClick(colorObj)}></div>
							</li>
						);
					})
				}
			</ul>
		</div>
	)
}