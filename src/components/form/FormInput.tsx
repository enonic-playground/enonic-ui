import type {StrictInputProps} from './Input';

import useId from '@accessible/use-id';
import {
	createRef,
	// useId, // React 18
} from 'react';
import {Input} from './Input';
import {Field} from './Field'


export interface StrictFormInputProps extends StrictInputProps {
	disabled?: boolean
	label?: string
	labelPosition?: 'bottom'|'left'|'top'|'right'
	stretch?: boolean
}


export function FormInput({
	as = 'div',
	disabled,
	error,
	name,
	label,
	labelPosition,
	required,
	stretch,
	...props
}: StrictFormInputProps) {
	const inputRef = createRef<HTMLInputElement>();
	const id = useId();
	if (label && !name) {
		name = id;
	}
	return (
		<Field
			as={as}
			disabled={disabled}
			error={error}
			focusRef={inputRef}
			label={label}
			labelPosition={labelPosition}
			name={name}
			required={required}
			stretch={stretch}
		>
			<Input
				disabled={disabled}
				error={error}
				inputRef={inputRef}
				name={name}
				required={required}
				stretch={stretch}
				{...props}
			/>
		</Field>
	);
}
