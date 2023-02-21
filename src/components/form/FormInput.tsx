import type {StrictInputProps} from './Input';

import useId from '@accessible/use-id';
import {
	createRef,
	// useId, // React 18
} from 'react';
import {Input} from './Input';
import {Field} from './Field'


export interface StrictFormInputProps extends StrictInputProps {
	label?: string
	// labelPosition: 'left'|'right'|'left corner'|'right corner' // TODO
	stretch?: boolean
}


export function FormInput({
	as = 'div',
	error,
	name,
	label,
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
			error={error}
			focusRef={inputRef}
			label={label}
			name={name}
			required={required}
			stretch={stretch}
		>
			<Input
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
