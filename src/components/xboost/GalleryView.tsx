import React, { useState } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { imgShowcaseStyleWave1 } from '../shared/styles';

type Props = {};

export default function GalleryView({ }: Props) {

	const [selectedImage, setSelectedImage] = useState(imgs[0]);
	return (
		<section className="">
			<div className="container-centered flex items-center">
				<div className="w-10 h-40 flex items-center"><IoChevronBack size={40}></IoChevronBack></div>
				<div className="flex justify-center items-center overflow-hidden flex-1 gap-3">
					{
						imgs.map((img, i) => {

							let outline = 'outline-stone-200';
							if (img == selectedImage) {
								outline = 'outline-stone-500';
							}

							return (
								<div key={i} className="w-40 h-40 p-3">
									<div className={"rounded outline outline-1 w-full h-full overflow-hidden " + outline} onClick={e => setSelectedImage(img)}>
										<img src={`./xboost/img/${img}.png`} />
									</div>

								</div>

							);
						})
					}
				</div>
				<div className="w-10 h-40 flex items-center">
					<IoChevronForward size={40}></IoChevronForward>
				</div>
			</div>
			<div className="container-centered mt-10 mb-20">
				<div className="md:flex items-center">
					<div className="md:w-1/2 flex flex-col justify-center items-center" style={imgShowcaseStyleWave1}>
						<img className="w-3/5" src={`./xboost/img/${selectedImage}_2x.png`} />
						<div className="mx-auto w-1/3 h-3 obj-shadow"></div>
					</div>
					<div className="md:w-1/2 mb-10 text-center md:text-left">
						<h2 className="md:w-3/4 text-5xl font-bold font-inter my-5">Perfect sound immersive world</h2>
						<p className="md:w-3/4 text-neutral-600">QuietComfort 35 wireless headphones II are engineered with renowned noise cancellation. With the Google Assistant and Amazon Alexa built-in, you have instant access to millions of songs, playlists and more—hands free.</p>
					</div>
				</div>

			</div>
		</section>
	);
}

const imgs = [
	'media_3672216',
	'media_3672218',
	'media_3672220',
	'media_3672226',
	'media_3672228',
]