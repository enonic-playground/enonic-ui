import cx from 'clsx';
import React from 'react';
import './tab.sass';

export type TabColor = 'white'|'red'|'orange'|'green'|'blue'|'purple'|'gray'|'black'

export interface StrictTabProps extends React.HTMLAttributes<HTMLElement> {
	active?: boolean
	as?: any
	color?: TabColor
}

export interface StrictTabGroupProps extends React.HTMLAttributes<HTMLElement> {
	as?: any
}


export function Tab({
	active,
	as = 'li',
	children,
	className,
	color,
	...props
}: StrictTabProps) {
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'tab',
				{active},
				color,
				className,
			)}
			{...props}
		>
			{children}
		</ElementType>
	);
}

Tab.Group = ({
	as = 'ul',
	className,
	children,
	...props
}: StrictTabGroupProps) => {
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'tab',
				'group',
				className
			)}
			{...props}
		>
			{children}
		</ElementType>
	);
}

