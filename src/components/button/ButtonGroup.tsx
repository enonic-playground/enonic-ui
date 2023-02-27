import type {
	// Color,
	CommonProps,
} from '../index.d';


import cx from 'clsx';
import * as React from 'react';


export interface StrictButtonGroupProps extends CommonProps {
	// color?: Color
}


const ButtonGroup = ({
	as = 'div',
	children,
	className,
	// color,
	...props
}: StrictButtonGroupProps) => {
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'button',
				'group',
				// color,
				className
			)}
			{...props}
		>
			{children}
		</ElementType>
	);
}

export default ButtonGroup;
