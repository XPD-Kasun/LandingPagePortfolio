import React, { useState } from 'react';

type Props = {};

type XY = [number, number]

export default function SpeakerShowcase({ }: Props) {

	const [showPopover, setShowPopover] = useState(false);
	const [currentXY, setCurrentXY] = useState<XY>([-100, 0]);

	const onTapPointClick = (xy) => {
		setShowPopover(true);
		setCurrentXY(xy);
	};

	const onOuterClick = () => {
		setShowPopover(false);
	};

	return (
		<div className="relative z-10">
			<div className="mx-auto w-full lg:w-1/2 xl:w-1/3 relative" onClick={onOuterClick}>
				<img className="mx-auto" src="./xboost/img/xboost_showcase.png" alt="" />
				<TapPoint onClick={onTapPointClick} xy={[33, 17]} />
				<TapPoint onClick={onTapPointClick} xy={[73, 32]} />
				<TapPoint onClick={onTapPointClick} xy={[20, 72]} />
				<TapPoint onClick={onTapPointClick} xy={[30, 73]} />
				<TapPoint onClick={onTapPointClick} xy={[71, 75]} />
				<Popover xy={currentXY} show={showPopover} />
			</div>
		</div>
	)
}

type TapPointProps = {
	xy: XY,
	onClick?: (xy: XY) => void
};

function TapPoint({ xy, onClick }: TapPointProps) {

	const onTapPointClick = (evt: React.MouseEvent) => {
		onClick && onClick(xy);
		evt.stopPropagation();
	};

	return (
		<div onClick={onTapPointClick} className="showcase-point" style={{
			top: xy[1] + '%',
			left: xy[0] + '%'
		}}>
			+
			<div className="ping"></div>
		</div>
	);
}

type PopoverProps = {
	xy: XY,
	show: boolean
};

function Popover({ xy, show }: PopoverProps) {
	if(!show) {
		return null;
	}

	return (
		<div className="transition-[top,left] absolute rounded-lg shadow p-3 bg-white/80" style={{
			top: (xy[1] + 5) + '%',
			left: (xy[0] - 2) + '%'
		}}>
			<h3 className="my-1 font-bold">Impact Resistant</h3>
			<p className="text-sm">This is a good text. Designed to handle life on the go.</p>
		</div>
	)

}