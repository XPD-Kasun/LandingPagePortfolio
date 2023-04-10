import React, { useEffect, useRef, useState } from "react";
import { debounce } from 'lodash';

type Props = {
	tabs: string[],
	bgColor: string,
	borderColor: string,
	onTabChange?: (tab: string, i: number) => void
};

export default function TabControl({ tabs, onTabChange, bgColor, borderColor }: Props) {

	let [activeTab, setActiveTab] = useState(tabs[0]);
	let [listInfo, setListInfo] = useState({
		scrollWidth: 0,
		realWidth: 0
	});

	let ref = useRef<HTMLUListElement>();

	const onTabClick = (e, tab, i) => {
		setActiveTab(tab);
		onTabChange && onTabChange(tab, i);
	};

	useEffect(() => {

		if (!ref) {
			return;
		}

		const onResize = () => {
			setListInfo({
				scrollWidth: ref.current.scrollWidth,
				realWidth: ref.current.parentElement.clientWidth
			});
		};

		window.addEventListener('resize', onResize);
		window.dispatchEvent(new Event('resize'));

		return () => ref.current.removeEventListener('resize', onResize);

	}, [ref]);

	return (
		<div className="w-[calc(100%-20px)] overflow-x-auto overflow-y-hidden" style={{ borderColor }}>
			<ul ref={ref} className="inline-flex items-center box-border justify-start gap-2 lg:gap-10 text-slate-800 relative" style={{ borderColor, width: listInfo.scrollWidth }}>
				<li className="w-1"></li>
				{
					tabs.map((tab, i) => {

						let cls = 'font-bold cursor-pointer rounded-t px-3 relative py-2 border-1 top-[4px] border border-transparent';

						return (
							<li key={i} className={cls} style={getTabStyle(tab == activeTab, bgColor, borderColor)} onClick={e => onTabClick(e, tab, i)}>
								{tab}
							</li>
						);
					})
				}
				<li className="w-1"></li>
			</ul>
			<div className="border-b border-1 w-full h-1" style={{ width: listInfo.realWidth > listInfo.scrollWidth ? '100%' : listInfo.scrollWidth, borderColor: borderColor }}></div>
		</div>
	);
}

const getTabStyle = (isSelected, bgColor, borderColor) => {
	if (isSelected) {
		return {
			border: `1px solid ${borderColor}`,
			borderBottom: `1px solid ${bgColor}`,
		};
	}
	return {};
}