import type {Color, CommonProps} from '../';
import cx from 'clsx';
import * as React from 'react';

//──────────────────────────────────────────────────────────────────────────
// Typings
//──────────────────────────────────────────────────────────────────────────

export type ButtonColor = Color

export interface StrictButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	as?: any
	color?: ButtonColor
	primary?: boolean
	transparent?: boolean
	uppercase?: boolean
}

export interface StrictButtonGroupProps extends CommonProps {
	// color?: ButtonColor
}

//──────────────────────────────────────────────────────────────────────────
// Button
//──────────────────────────────────────────────────────────────────────────

export const Button = ({
	as = 'button',
	children,
	className,
	color,
	primary,
	type = as === 'input' ? 'button' : undefined,
	transparent,
	uppercase,
	...props
}: StrictButtonProps) => {
	const ElementType = as;
	return (
		<ElementType
			type={type}
			className={cx(
				'enonic',
				'button',
				{
					primary,
					transparent,
					uppercase
				},
				color,
				className
			)}
			{...props}
		>
			{children}
		</ElementType>
	);
};

//──────────────────────────────────────────────────────────────────────────
// Button.Group
//──────────────────────────────────────────────────────────────────────────

Button.Group = ({
	as = 'div',
	children,
	className,
	// color,
	...props
}: StrictButtonProps) => {
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
