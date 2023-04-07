import React from 'react';
import { SoftArrowSpiral } from './Shapes';

type Props = {};

export default function BackgroundLayer({ }: Props) {
	return (
		<SoftArrowSpiral className="absolute -top-12 right-0 -z-1 w-1/3 text-[#191919]" />
	)
}