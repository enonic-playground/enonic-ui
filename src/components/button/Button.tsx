import React from 'react';
import './button.sass';
import clsx from 'clsx';

export interface StrictButtonProps {
	children?: React.ReactNode
	primary?: boolean
	transparent?: boolean
}


export const Button = ({
	children,
	primary,
	transparent,
	...props
}: StrictButtonProps) => {
	return (
		<button
			type="button"
			className={clsx(
				'enonic',
				'button',
				{
					primary,
					transparent
				}
			)}
			{...props}
		>
			{children}
		</button>
	);
};
