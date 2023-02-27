import type {Color} from '../index.d';
import cx from 'clsx';
import * as React from 'react';
import ButtonGroup from './ButtonGroup';


export interface StrictButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	as?: any
	color?: Color
	content?: React.ReactNode
	disabled?: boolean //
	primary?: boolean
	transparent?: boolean
	uppercase?: boolean
}


const Button = ({
	as = 'button',
	children,
	className,
	color,
	content,
	disabled,
	primary,
	type = ['button','input'].includes(as) ? 'button' : undefined,
	transparent,
	uppercase,
	...props
}: StrictButtonProps) => {
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'button',
				{
					disabled,
					primary,
					transparent,
					uppercase
				},
				color,
				className
			)}
			disabled={disabled}
			type={type}
			{...props}
		>
			{children ? children : content}
		</ElementType>
	);
};


Button.Group = ButtonGroup;


export default Button;
