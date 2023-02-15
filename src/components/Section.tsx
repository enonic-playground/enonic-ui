import type {Shade, Tint} from './'

import cx from 'clsx';
import React from 'react';


export interface StrictSectionProps extends React.HTMLAttributes<HTMLElement> {
	as?: any
	shade?: Shade
	tint?: Tint
}


export const Section = ({
	as = 'section',
	children,
	className,
	shade = 'none',
	tint = shade,
	...props
}: StrictSectionProps) => {
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'section',
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

