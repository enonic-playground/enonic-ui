import cx from 'clsx';
import React from 'react';


export interface StrictSpanProps extends React.HTMLAttributes<HTMLElement> {
	as?: any
}


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

