import type {CommonPropsWithShadeTint} from '../';

import cx from 'clsx';
import * as React from 'react';


export type StrictAsideProps = CommonPropsWithShadeTint;


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

