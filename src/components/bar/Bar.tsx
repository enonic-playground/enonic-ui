import type {
	StrictAppBarProps,
	StrictBarItemProps,
	StrictBarProps,
	StrictToolBarProps,
} from './bar.d'

import cx from 'clsx';
import React from 'react';
import './bar.sass';


export function Bar({
	as = 'header',
	className,
	children,
	shade = 'none',
	tint = 'none',
	type = 'app',
	...props
}: StrictBarProps) {
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'bar',
				type,
				shade && {
					low: 'low-shade',
					high: 'high-shade',
				}[shade],
				tint && {
					low: 'low-tint',
					high: 'high-tint',
				}[tint],
				className
			)}
			{...props}
		>
			{children}
		</ElementType>
	);
}


export const AppBar = ({
	shade = 'high',
	type,
	...props
}: StrictAppBarProps) => Bar({
	shade,
	type: 'app',
	...props
});


export const ToolBar = ({
	type,
	...props
}: StrictToolBarProps) => Bar({
	type: 'tool',
	...props
});


Bar.Item = ({
	as = 'div',
	className,
	children,
	verticalAlign = 'stretch',
	...props
}: StrictBarItemProps) => {
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'bar',
				'item',
				{
					baseline: 'baseline',
					bottom: 'bottom',
					middle: 'middle',
					stretch: undefined,
					top: 'top',
				}[verticalAlign],
				className
			)}
			{...props}
		>
			{children}
		</ElementType>
	);
}
