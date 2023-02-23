import type {CommonProps} from '../index.d';

import cx from 'clsx';
import * as React from 'react';
import {ListItem} from './ListItem';


export interface StrictListProps extends CommonProps {
	selectable?: boolean
}


export const List = ({
	as = 'ul',
	children,
	className,
	selectable,
	...props
}: StrictListProps) => {
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'list',
				{
					selectable,
				},
				className
			)}
			{...props}
		>
			{children}
		</ElementType>
	);
}


List.Item = ListItem;
