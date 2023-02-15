import type {Shade, Tint} from './'

import cx from 'clsx';
import React from 'react';


export interface StrictArticleProps extends React.HTMLAttributes<HTMLElement> {
	as?: any
	shade?: Shade
	tint?: Tint
}


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

