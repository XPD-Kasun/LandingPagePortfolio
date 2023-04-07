import React from 'react';
import Header from '../../components/xboost/Header';
import BackgroundLayer from '../../components/xboost/BackgroundLayer';

type Props = {};

export default function XBoost({ }: Props) {
	return (
		<div className="xboost-app">
			<BackgroundLayer />
			<Header />
		</div>
	);
}