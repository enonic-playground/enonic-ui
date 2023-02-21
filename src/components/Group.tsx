import type {CommonProps} from './index.d';

import cx from 'clsx';
import * as React from 'react';


export interface StrictGroupProps extends CommonProps {
	center?: boolean
	right?: boolean
	stretch?: boolean
	vertical?: boolean
};


export const Group = ({
	as = 'div',
	center,
	children,
	className,
	right,
	stretch,
	vertical,
	...props
}: StrictGroupProps) => {
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'group',
				{
					center,
					right,
					stretch,
					vertical,
				},
				className
			)}
			{...props}
		>
			{children}
		</ElementType>
	);
}

