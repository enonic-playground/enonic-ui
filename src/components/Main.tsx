import type {CommonPropsWithShadeTint} from './index.d'

import cx from 'clsx';
import {forwardRef} from 'react';


export interface StrictMainProps extends CommonPropsWithShadeTint {
	stretch?: boolean
}


export const Main = forwardRef(({
	children,
	className,
	as = 'main',
	shade = 'none',
	stretch,
	tint = shade,
	...props
}: StrictMainProps, ref) => {
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
				{
					stretch
				},
				className
			)}
			{...props}
			ref={ref}
		>
			{children}
		</ElementType>
	);
});
