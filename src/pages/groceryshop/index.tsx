import React from 'react';
import Header from '../../components/groceryshop/Header';
import HeroSection from '../../components/groceryshop/HeroSection';

type Props = {}

export default function GroceryShopIndex({ }: Props) {
	return (
		<div>
			<Header></Header>
			<HeroSection></HeroSection>
			<div>Test</div>
		</div>
	);
}