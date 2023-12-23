import React, { HTMLAttributes, StyleHTMLAttributes } from 'react';

type CardProps = {
	className?: string,
	style?: React.CSSProperties
};

export function Card({ className = "", style }: CardProps) {
	
	return (
		<div className={className}>
			<div className="swisscard background-cover rounded-lg p-10 overflow-hidden w-[480px] h-[320px]" style={{ background: 'url(./swisscard/card.png)', ...style }}>
				<div className="card__logo w-32">
					<img className="" src="./swisscard/logo.png" />
				</div>
				<div className="flex justify-between items-center">
					<div className="card__chip w-20 mt-5">
						{cardChip}
					</div>
					<div className="font-bold text-2xl translate-y-3 text-swiss tracking-wider">6162-9700-0045-7013</div>
				</div>
				<div className="mt-[4rem] font-barlow flex space-x-[4.5rem] align-center">
					<div className="">
						<div className="font-bold text-[#a6e4ff]">Valid Till</div>
						<div className="">20/32</div>
					</div>
					<div className="">
						<div className="font-bold text-[#a6e4ff]">Card Holder</div>
						<div className="">JOHN DOE</div>
					</div>
					<img className="h-10" src="./swisscard/twocircles.png" />
				</div>
			</div>
		</div>
	);
}

const cardChip = (
	<svg version="1.1" id="Credit_Card_Chip" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
		y="0px" viewBox="0 0 2048 2048" enableBackground="new 0 0 2048 2048" xmlSpace="preserve">
		<g id="Credit_Card_Chip_0000007">
			<path fill="#E0A338" d="M1713.702,1625.252H334.156c-59.177,0-107.149-47.972-107.149-107.148V530.036
		c0-59.177,47.972-107.149,107.149-107.149h1379.546c59.179,0,107.151,47.973,107.151,107.151v988.063
		C1820.854,1577.279,1772.881,1625.252,1713.702,1625.252z"/>
			<path fill="#EAAD49" d="M1277.901,1230.597H769.959c-10.939,0-19.808-8.868-19.808-19.808V837.331
		c0-10.939,8.868-19.807,19.808-19.807h507.94c10.94,0,19.81,8.869,19.81,19.809v373.457
		C1297.709,1221.729,1288.841,1230.597,1277.901,1230.597z"/>
			<path fill="#C28738" d="M1820.852,654.943v-59.72h-362.963l-173.311,192.892c-2.17-0.286-4.421-0.451-6.672-0.451h-224.118V422.9
		h-59.716v364.765H769.955c-2.252,0-4.505,0.164-6.676,0.451c-0.003,0-0.006,0.001-0.009,0.002L589.974,595.223H227.006v59.72
		h336.337l157.463,175.272c0,0.001,0,0.003-0.001,0.004c-0.368,2.334-0.532,4.71-0.532,7.126V994.21H227.006v59.722h493.267v156.861
		c0,2.417,0.164,4.793,0.532,7.127c0,0.002,0.001,0.004,0.001,0.006l-157.463,175.267H227.006v59.724h362.967l173.294-192.894
		c0.003,0,0.007,0.001,0.011,0.002c2.171,0.286,4.424,0.45,6.676,0.45h224.118v364.765h59.716v-364.765h224.118
		c2.251,0,4.502-0.164,6.671-0.45l173.312,192.892h362.963v-59.724h-336.333l-157.462-175.247c0.366-2.33,0.53-4.74,0.53-7.152
		v-156.861h493.265V994.21h-493.265V837.346c0-2.412-0.164-4.823-0.531-7.153l157.463-175.25H1820.852z M994.072,1200.718H780.03
		V847.38h214.042h59.716h214.042v353.337h-214.042H994.072z"/>
		</g>
	</svg>
);