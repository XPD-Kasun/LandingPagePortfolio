import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

type Props = {};

export default function RelatedProducts({ }: Props) {
	return (
		<section className="pb-10 pt mt-10 bg-slate-100">
			<div className="container-centered">
				<div className="flex justify-between items-center">
					<h2 className="text-4xl font-bold">Related Products</h2>
					<button className="btn shrink-0 rounded-full uppercase border border-2 border-black text-normal font-bold radar-button">Show All</button>
				</div>
				<Swiper className="mt-10 justify-center" breakpoints={{
					640: {
						slidesPerView: 2
					},
					768: {
						slidesPerView: 3
					},
					1024: {
						slidesPerView: 5
					}
				}}>
					{
						relatedProducts.map((product, i) => {
							return (
								<SwiperSlide key={product.id}>
									<div className="card mr-3 my-3 px-8 py-8 bg-white relative">
										<div className="h-[334px]">
											<div className="absolute top-0 right-0 px-5 px-3 bg-green-400 before-skew" style={{'--beforeskew-height':'23px', '--beforeskew-left':'-12px'} as React.CSSProperties}>{availability(product.availability)}</div>
											<img src={"./xboost/img/" + product.img} className="x-3/4 mx-auto" />
											<h2 className="my-6 font-bold text-xl">{product.title}</h2>
											<span>
												{product.price && product.price.currency + ' ' + product.price.amount }
												{
													!product.price && availability(product.availability)
												}
											</span>
										</div>
									</div>
								</SwiperSlide>
							);
						})
					}
				</Swiper>

			</div>
		</section>
	)
}

const availability = (availabilityCode) => {

	switch (availabilityCode) {
		case 1:
			return "In Stock";
		case 2:
			return "Limited";
		case 3:
			return "Coming Soon";
	}
};

const relatedProducts = [
	{
		id: 1,
		img: 'xboost10210.png',
		title: 'QuietComfort 35 wireless headphones II',
		availability: 1,
		price: {
			currency: '$',
			amount: 449.99
		}
	},
	{
		id: 2,
		img: 'xboost10211.png',
		title: 'SoundLink® aroundear wireless headphones',
		availability: 1,
		price: {
			currency: '$',
			amount: 269.99
		}
	},
	{
		id: 3,
		img: 'xboost10212.png',
		title: 'Bose on-ear wireless headphones',
		availability: 1,
		price: {
			currency: '$',
			amount: 209.99
		}
	},
	{
		id: 4,
		img: 'xboost10211.png',
		title: 'Bose Noise Cancelling Headphones 700',
		availability: 3
	},
	{
		id: 5,
		img: 'xboost10210.png',
		title: 'QuietComfort 35 wireless headphones II',
		availability: 1,
		price: {
			currency: '$',
			amount: 449.99
		}
	},
	{
		id: 6,
		img: 'xboost10211.png',
		title: 'SoundLink® aroundear wireless headphones',
		availability: 1,
		price: {
			currency: '$',
			amount: 269.99
		}
	},
	{
		id: 7,
		img: 'xboost10212.png',
		title: 'Bose on-ear wireless headphones',
		availability: 1,
		price: {
			currency: '$',
			amount: 209.99
		}
	},
	{
		id: 8,
		img: 'xboost10211.png',
		title: 'Bose Noise Cancelling Headphones 700',
		availability: 3
	}
];