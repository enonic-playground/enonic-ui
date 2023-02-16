import type {CommonProps} from '..';
import cx from 'clsx';
import * as React from 'react';


export type StrictSpanProps = CommonProps;


export const Span = ({
	children,
	className,
	as = 'span',
	...props
}: StrictSpanProps) => {
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'span',
				className
			)}
			{...props}
		>
			{children}
		</ElementType>
	);
}

