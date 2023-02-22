import type {CommonPropsWithShadeTint} from './index.d';
import cx from 'clsx';
import {forwardRef} from 'react';


export type StrictPanelProps = CommonPropsWithShadeTint;


export const Panel = forwardRef(({
	as = 'aside',
	children,
	className,
	shade = 'none',
	tint = shade,
	...props
}: StrictPanelProps, ref) => {
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'panel',
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
			ref={ref}
		>
			{children}
		</ElementType>
	);
});
