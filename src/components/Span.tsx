import type {CommonProps} from '.';
import cx from 'clsx';
import * as React from 'react';


export interface StrictSpanProps extends CommonProps {
	uppercase?: boolean
}


export const Span = ({
	as = 'span',
	children,
	className,
	uppercase,
	...props
}: StrictSpanProps) => {
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'span',
				{
					uppercase
				},
				className
			)}
			{...props}
		>
			{children}
		</ElementType>
	);
}

