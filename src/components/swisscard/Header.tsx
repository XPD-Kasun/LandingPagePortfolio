import React, { MouseEvent, useEffect, useReducer } from 'react';
import headerMenu from '../../data/swisscard/headerMenu';
import ProductSubMenu from './elements/DesktopSubMenus/ProductSubMenu';
import { MenuItem } from './types';
import { comment } from 'postcss';
import { IoChevronDown } from 'react-icons/io5';
import CardsSubMenu from './elements/DesktopSubMenus/CardsSubMenu';

type Props = {};

type SelectedMenuType = {
	menuId: number,
	component: React.ReactNode,
	x: number
}

function menuItemReducer(state: SelectedMenuType, action): SelectedMenuType {

	switch (action.id) {
		case 1:
		case 3:
		case 5:
			return {
				menuId: action.id,
				x: action.x,
				component: <ProductSubMenu productMenu={headerMenu.menuItems[0]} />
			};
		case 2:
			return {
				menuId: action.id,
				x: action.x,
				component: <CardsSubMenu cardMenu={headerMenu.menuItems[0]} />
			};
	}

	return {
		menuId: -1,
		x: action.x,
		component: null
	};
}

export default function Header({ }: Props) {

	let [currentMenu, dispatch] = useReducer(menuItemReducer, { menuId: -1, component: null, x: 0 });

	const onMenuItemEnter = (evt: MouseEvent<HTMLElement>, mainMenuItem: MenuItem) => {

		let target = (evt.currentTarget as HTMLElement);
		let parentLeft = target.parentElement.getBoundingClientRect().left;
		let menuLeft = target.getBoundingClientRect().left;


		
		dispatch({
			id: mainMenuItem.id,
			x: menuLeft - parentLeft
		});

	};

	const onMenuLeave = (evt) => {
		dispatch({
			id: -1
		});
	};


	return (
		<section className="bg-swiss">
			<div className="container-centered">
				<div className="flex justify-between items-center desktop-menu text-white">
					<div className="flex items-center" onMouseLeave={onMenuLeave}>
						<img className="w-24 mr-10 p-1 bg-white mx-2 my-5 rounded" src="./swisscard/logo.png" />
						<div>
							<ul className="flex space-x-10 items-center">
								{
									headerMenu.menuItems.map((mainMenuItem) => {
										return (
											<li onMouseEnter={e => onMenuItemEnter(e, mainMenuItem)} key={mainMenuItem.id} className={"cursor-pointer font-bold transition-[color] hover:text-swissalt flex items-center relative" + (mainMenuItem.id === currentMenu.menuId ? " text-swissalt" : "")}>
												<div dangerouslySetInnerHTML={{ __html: mainMenuItem.name }}></div>
												{
													mainMenuItem.subMenus && <IoChevronDown size={10} className={"ml-1 transition-transform " +(currentMenu.menuId == mainMenuItem.id ? "rotate-180": "rotate-0")}/> 
												}
											</li>
										)
									})
								}
							</ul>
							<div className="absolute mt-1">
								<div className={"z-50 absolute transition origin-top-left " + (currentMenu.component ? "opacity-100" : "opacity-0")} style={{transform: `translateX(${currentMenu.x}px)`}}>
									<div className="rounded-lg shadow-lg overflow-hidden text-black">
										{
											currentMenu.component
										}
									</div>
								</div>

							</div>
						</div>
					</div>
					<div className="">
						<ul className="flex items-center space-x-5">
							<li>
								<a href="#" className="block font-bold">Login</a>
							</li>
							<li>
								<button className="btn bg-swisssub rounded active:bg-swisssub/50">Apply</button>
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