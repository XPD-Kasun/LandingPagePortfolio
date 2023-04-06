import Head from "next/head";
import React from "react";
import Clientale from "../../components/metacube/Clientale";
import FeatureSection from "../../components/metacube/FeatureSection";
import FeatureSummary from "../../components/metacube/FeatureSummary";
import Footer from "../../components/metacube/Footer";
import Header from "../../components/metacube/Header";
import HeroSection from "../../components/metacube/HeroSection";
import { DotGraphic } from "../../components/metacube/Logos";
import RegisterBanner from "../../components/metacube/RegisterBanner";
import Tour from "../../components/metacube/Tour";

export default function MetaCube() {

	return (
		<div className="page bg-stone-900 text-graybg min-h-screen">
			<Header></Header>
			<HeroSection></HeroSection>
			<FeatureSection></FeatureSection>
			<FeatureSummary></FeatureSummary>
			<RegisterBanner></RegisterBanner>
			<Clientale></Clientale>
			<Tour></Tour>
			<Footer></Footer>
		</div>
	)
}