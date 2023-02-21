import type {Color, CommonProps} from '../index.d';
import cx from 'clsx';
import * as React from 'react';

export type TabColor = Color

export interface StrictTabProps extends CommonProps {
	active?: boolean
	color?: TabColor
}

export type StrictTabGroupProps = CommonProps;


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

