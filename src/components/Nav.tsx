import type {Shade, Tint} from './'

import cx from 'clsx';
import React from 'react';


export interface StrictNavProps extends React.HTMLAttributes<HTMLElement> {
	as?: any
	shade?: Shade
	tint?: Tint
}


export const Nav = ({
	children,
	className,
	as = 'nav',
	shade = 'none',
	tint = shade,
	...props
}: StrictNavProps) => {
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'nav',
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

