import cx from 'clsx';
import React from 'react';
import './button.sass';


export interface StrictButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	as?: any
	primary?: boolean
	transparent?: boolean
}


export const Button = ({
	as = 'button',
	children,
	className,
	primary,
	transparent,
	...props
}: StrictButtonProps) => {
	const ElementType = as;
	return (
		<ElementType
			type="button"
			className={cx(
				'enonic',
				'button',
				{
					primary,
					transparent
				},
				className
			)}
			{...props}
		>
			{children}
		</ElementType>
	);
};
