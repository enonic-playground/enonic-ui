import type {CommonPropsWithShadeTint} from './index.d';

import cx from 'clsx';
import * as React from 'react';


export type StrictArticleProps = CommonPropsWithShadeTint;


export const Article = ({
	children,
	className,
	as = 'article',
	shade = 'none',
	tint = shade,
	...props
}: StrictArticleProps) => {
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'article',
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

