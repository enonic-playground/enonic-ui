import cx from 'clsx';
import React from 'react';
import './button.sass';

//──────────────────────────────────────────────────────────────────────────
// Typings
//──────────────────────────────────────────────────────────────────────────

export type ButtonColor = 'red'|'orange'|'green'|'blue'|'gray'|'purple'|'black'

export interface StrictButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	as?: any
	color?: ButtonColor
	primary?: boolean
	transparent?: boolean
}

export interface StrictButtonGroupProps extends React.HTMLAttributes<HTMLElement> {
	as?: any
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
					transparent
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
