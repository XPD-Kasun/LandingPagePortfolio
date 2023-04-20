import React, { useEffect, useReducer } from 'react';
import headerMenu from '../../data/swisscard/headerMenu';
import ProductSubMenu from './elements/DesktopSubMenus/ProductSubMenu';
import { MenuItem } from './types';

type Props = {};

type SelectedMenuType = {
	menuId: number,
	component: React.ReactNode
}

function menuItemReducer(state: SelectedMenuType, action): SelectedMenuType {

	switch (action) {
		case 1:
			return {
				menuId: 1,
				component: <ProductSubMenu productMenu={headerMenu.menuItems[0]} />
			};
	}

	return {
		menuId: -1,
		component: null
	};
}

export default function Header({ }: Props) {

	let [currentMenu, dispatch] = useReducer(menuItemReducer, { menuId: -1, component: null });

	const onMenuItemEnter = (evt, mainMenuItem: MenuItem) => {

		dispatch(mainMenuItem.id);

	};

	const onMenuLeave = (evt) => {
		//dispatch(-1);
	};

	useEffect(() => {
		dispatch(1);
	}, []);

	return (
		<section className="bg-swiss">
			<div className="container-centered">
				<div className="flex justify-between items-center desktop-menu text-white">
					<div className="flex items-center" onMouseLeave={onMenuLeave}>
						<img className="w-24 mr-10 p-1 bg-white m-2 rounded" src="./swisscard/logo.png" />
						<div>
							<ul className="flex space-x-10 items-center">
								{
									headerMenu.menuItems.map((mainMenuItem) => {
										return (
											<li onMouseEnter={e => onMenuItemEnter(e, mainMenuItem)} key={mainMenuItem.id} className="cursor-pointer font-bold transition-[color] hover:text-swissalt relative">
												<div dangerouslySetInnerHTML={{ __html: mainMenuItem.name }}></div>
											</li>
										)
									})
								}
							</ul>
							<div className="absolute">
								{
									currentMenu.component
								}
							</div>
						</div>
					</div>
					<div className="">
						<ul className="flex items-center">
							<li>
								<div>Account</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<style jsx>{`
				.desktop-menu {
				}
			`}</style>
		</section>
	)
}