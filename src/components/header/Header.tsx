import type {Shade, Tint} from '../'

import cx from 'clsx';
import React from 'react';


export interface StrictHeaderProps extends React.HTMLAttributes<HTMLElement> {
	as?: any
	shade?: Shade
	tint?: Tint
	size?: 'tiny' | 'small' | 'medium' | 'large' | 'huge'
}


export const Header = ({
	children,
	className,
	shade = 'none',
	tint = shade,
	size,
	as = size ? {
		'huge': 'h1',
		'large': 'h2',
		'medium': 'h4',
		'small': 'h5',
		'tiny': 'h6'
	}[size] : 'h3',
	...props
}: StrictHeaderProps) => {
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'header',
				shade && {
					low: 'low-shade',
					high: 'high-shade',
				}[shade],
				size,
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

