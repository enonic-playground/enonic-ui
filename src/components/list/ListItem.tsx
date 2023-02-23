import type {CommonProps} from '../index.d';

import cx from 'clsx';
import * as React from 'react';


export type StrictListItemProps = CommonProps;


export const ListItem = ({
	as = 'li',
	children,
	className,
	...props
}: StrictListItemProps) => {
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'list',
				'item',
				className
			)}
			{...props}
		>
			{children}
		</ElementType>
	);
}

