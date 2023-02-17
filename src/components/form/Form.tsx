import type {ClassValue} from 'clsx';
import type {
	HTMLAttributes,
	ReactNode
} from 'react';
import {FormInput} from './FormInput';

import cx from 'clsx';
import {Field} from './Field'


export interface StrictFormProps extends Omit<
HTMLAttributes<HTMLFormElement>, 'className'> {
	as?: any
	children?: ReactNode
	className?: ClassValue
};


export function Form({
	as = 'form',
	children,
	className,
	...props
}: StrictFormProps) {
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'form',
				className
			)}
			{...props}
		>
			{children}
		</ElementType>
	);
}

Form.Field = Field;

Form.Input = FormInput;
