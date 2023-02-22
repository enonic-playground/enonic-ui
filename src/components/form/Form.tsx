import type {ClassValue} from 'clsx';
import type {
	HTMLAttributes,
	ReactNode
} from 'react';
import {Group} from '../Group';
import {FormCheckbox} from './FormCheckbox';
import {FormInput} from './FormInput';

import cx from 'clsx';
import {Field} from './Field'


export interface StrictFormProps extends Omit<
HTMLAttributes<HTMLFormElement>, 'className'> {
	as?: any
	children?: ReactNode
	className?: ClassValue
	stretch?: boolean
};


export function Form({
	as = 'form',
	children,
	className,
	stretch,
	...props
}: StrictFormProps) {
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'form',
				{
					stretch
				},
				className
			)}
			{...props}
		>
			{children}
		</ElementType>
	);
}

Form.Checkbox = FormCheckbox;

Form.Field = Field;

Form.Group = Group;

Form.Input = FormInput;
