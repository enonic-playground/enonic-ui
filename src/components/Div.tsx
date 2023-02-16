import type {CommonPropsWithShadeTint} from '../';

import cx from 'clsx';
import * as React from 'react';


export type StrictDivProps = CommonPropsWithShadeTint;


export const Div = ({
	children,
	className,
	as = 'div',
	shade = 'none',
	tint = shade,
	...props
}: StrictDivProps) => {
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'div',
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

