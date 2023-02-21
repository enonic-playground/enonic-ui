import type {CommonPropsWithShadeTint} from './index.d';

import cx from 'clsx';
import * as React from 'react';


export type StrictSectionProps = CommonPropsWithShadeTint;

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

