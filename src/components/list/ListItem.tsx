import type {CommonProps} from '../index.d';

import cx from 'clsx';
import {forwardRef, useState} from 'react';


export interface StrictListItemProps extends CommonProps {
	defaultSelected?: boolean
	selectable?: boolean
	//tabIndex?: number
}


const ListItem = forwardRef(({
	as = 'li',
	children,
	className,
	defaultSelected,
	selectable,
	//tabIndex,
	...props
}: StrictListItemProps, ref) => {
	const [selected, setSelected] = useState(defaultSelected);
	const ElementType = as;
	const onClick = selectable ? () => {
		setSelected(!selected);
	} : undefined;
	return (
		<ElementType
			className={cx(
				'enonic',
				'list',
				'item',
				{
					selectable,
					selected,
				},
				className
			)}
			{...props}
			onClick={onClick}
			onKeyDown={({
				keyCode,
				nativeEvent,
			}) => {
				// Prevent scrolling on space
				if (keyCode === 32) { // code == "Space"
					nativeEvent.preventDefault();
				}
			}}
			onKeyUp={({
				keyCode,
			}) => {
				if (keyCode === 32) { // code == "Space"
					onClick();
				}
			}}
			ref={ref}
			tabIndex={selectable ? 0 : undefined}
		>
			{children}
		</ElementType>
	);
});


export default ListItem;
