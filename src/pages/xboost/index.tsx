import React from "react";
import { RecoilRoot } from "recoil";
import Header from '../../components/xboost/Header';
import BackgroundLayer from '../../components/xboost/BackgroundLayer';
import HeroSection from '../../components/xboost/HeroSection';

type Props = {};

export default function XBoost({ }: Props) {
	return (
		<RecoilRoot>
			<div className="xboost-app">
				<BackgroundLayer />
				<Header />
				<HeroSection />
			</div>
		</RecoilRoot>
	);
}