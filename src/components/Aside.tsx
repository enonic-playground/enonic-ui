import type {Shade, Tint} from './'

import cx from 'clsx';
import React from 'react';


export interface StrictAsideProps extends React.HTMLAttributes<HTMLElement> {
	as?: any
	shade?: Shade
	tint?: Tint
}


export const Aside = ({
	children,
	className,
	as = 'aside',
	shade = 'none',
	tint = shade,
	...props
}: StrictAsideProps) => {
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'aside',
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

