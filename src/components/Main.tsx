import type {CommonPropsWithShadeTint} from '../'

import cx from 'clsx';
import * as React from 'react';


export type StrictMainProps = CommonPropsWithShadeTint;


export const Main = ({
	children,
	className,
	as = 'main',
	shade = 'none',
	tint = shade,
	...props
}: StrictMainProps) => {
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'main',
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

