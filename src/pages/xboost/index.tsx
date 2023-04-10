import React from "react";
import { RecoilRoot } from "recoil";
import Header from '../../components/xboost/Header';
import BackgroundLayer from '../../components/xboost/BackgroundLayer';
import HeroSection from '../../components/xboost/HeroSection';
import GalleryView from "../../components/xboost/GalleryView";
import LandingMain from "../../components/xboost/LandingMain";
import RelatedProducts from "../../components/xboost/RelatedProducts";

type Props = {};

export default function XBoost({ }: Props) {
	return (
		<RecoilRoot>
			<div className="xboost-app">
				<BackgroundLayer />
				<Header />
				<HeroSection />
				<GalleryView />
				<LandingMain></LandingMain>
				<RelatedProducts></RelatedProducts>
			</div>
		</RecoilRoot>
	);
}