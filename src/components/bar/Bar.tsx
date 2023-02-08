import cx from 'clsx';
import React from 'react';
import './bar.sass';


export interface StrictBarProps extends React.HTMLAttributes<HTMLElement> {
	as?: any
	type?: 'app'|'tool'
}

export interface StrictBarItemProps extends React.HTMLAttributes<HTMLElement> {
	as?: any
	verticalAlign:
		|'baseline'
		|'bottom'
		|'middle'
		|'stretch'
		|'top'
}

export interface StrictAppBarProps extends React.HTMLAttributes<HTMLElement> {
	as?: any
	type: never
}

export interface StrictToolBarProps extends React.HTMLAttributes<HTMLElement> {
	as?: any
	type: never
}

export function Bar({
	as = 'header',
	className,
	children,
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
				className
			)}
			{...props}
		>
			{children}
		</ElementType>
	);
}

export const AppBar = ({
	type,
	...props
}: StrictAppBarProps) => Bar({
	type: 'app',
	...props
});


export const ToolBar = ({
	type,
	...props
}: StrictAppBarProps) => Bar({
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
