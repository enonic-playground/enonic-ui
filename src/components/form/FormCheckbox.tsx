import type {StrictCheckboxProps} from './Checkbox';

import useId from '@accessible/use-id';
import {createRef} from 'react';
import {Checkbox} from './Checkbox';
import {Field} from './Field'


export interface StrictFormCheckboxProps extends Omit<StrictCheckboxProps,'error'> {
	disabled?: boolean
	error?: boolean|string
	id?: never // generated
	label?: string
	labelPosition?: never
	required?: boolean
	stretch?: boolean
}


export function FormCheckbox({
	as = 'div',
	disabled,
	error,
	name,
	label,
	// labelPosition,
	required,
	stretch,
	...props
}: StrictFormCheckboxProps) {
	const focusRef = createRef<HTMLInputElement>();
	const id = useId();
	return (
		<Field
			as={as}
			error={error}
			disabled={disabled}
			focusRef={focusRef}
			label={label}
			labelPosition='right'
			name={id}
			required={required}
			stretch={stretch}
			type='checkbox'
		>
			<Checkbox
				disabled={disabled}
				error={!!error}
				focusRef={focusRef}
				id={id}
				name={name}
				{...props}
			/>
		</Field>
	);
}
