import type {CommonPropsWithShadeTint} from './index.d';

import cx from 'clsx';
import * as React from 'react';


export type StrictFooterProps = CommonPropsWithShadeTint;


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

