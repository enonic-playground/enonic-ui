import type {CommonPropsWithShadeTint} from '../';

import cx from 'clsx';
import * as React from 'react';


export type StrictNavProps = CommonPropsWithShadeTint;


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

