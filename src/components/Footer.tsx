import type {Shade, Tint} from './'

import cx from 'clsx';
import React from 'react';


export interface StrictFooterProps extends React.HTMLAttributes<HTMLElement> {
	as?: any
	shade?: Shade
	tint?: Tint
}


export const Footer = ({
	children,
	className,
	as = 'footer',
	shade = 'none',
	tint = shade,
	...props
}: StrictFooterProps) => {
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'footer',
				shade && {
					low: 'low-shade',
					high: 'high-shade',
				}[shade],
				tint && {
					low: 'low-tint',
					high: 'high-tint',
				}[tint],
				className
			)}
			{...props}
		>
			{children}
		</ElementType>
	);
}

