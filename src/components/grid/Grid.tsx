import type {CommonProps} from '../index.d';

import cx from 'clsx';
import * as React from 'react';


export interface StrictGridProps extends CommonProps {
	columns?: string[]
	rows?: string[]
	viewport?: boolean
};

export const Grid = ({
	as = 'div',
	children,
	className,
	columns, // = ['auto'],
	rows, // = ['auto'],
	style = {},
	viewport,
	...props
}: StrictGridProps) => {
	if (columns?.length) {
		style.gridTemplateColumns = columns.join(' ');
	}
	if (rows?.length) {
		style.gridTemplateRows = rows.join(' ');
	}
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'grid',
				{
					viewport
				},
				className
			)}
			{...props}
			style={style}
		>
			{children}
		</ElementType>
	);
}

export interface StrictGridItemProps extends CommonProps {
};

Grid.Item = ({
	as = 'div',
	children,
	className,
	style = {},
	...props
}: StrictGridItemProps) => {
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'grid',
				'item',
				className
			)}
			{...props}
			style={style}
		>
			{children}
		</ElementType>
	);
}
