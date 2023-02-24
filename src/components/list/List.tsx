import type {CommonProps} from '../index.d';

import cx from 'clsx';
import {
	Children,
	cloneElement,
	type ReactElement,
	type JSXElementConstructor,
} from 'react';
import ListItem from './ListItem';


export interface StrictListProps extends CommonProps {
	selectable?: boolean
}


const List = ({
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
			{
				Children.map(
					children, (child, i) => {
						return cloneElement(
							child as ReactElement<any, string | JSXElementConstructor<any>>,
							{
								key: i,
								selectable,
							}
						)
					}
				)
			}
		</ElementType>
	);
}


List.Item = ListItem;


export default List;
