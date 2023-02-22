import type {StrictCheckboxProps} from './Checkbox';

import useId from '@accessible/use-id';
import {createRef} from 'react';
import {Checkbox} from './Checkbox';
import {Field} from './Field'


export interface StrictFormCheckboxProps extends Omit<StrictCheckboxProps,'error'> {
	error?: boolean|string
	id?: never // generated
	label?: string
	labelPosition?: 'right'// |'left'|'left corner'|'right corner' // TODO
	required?: boolean
	stretch?: boolean
}


export function FormCheckbox({
	as = 'div',
	error,
	name,
	label,
	labelPosition = 'right',
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
			focusRef={focusRef}
			label={label}
			labelPosition={labelPosition}
			name={id}
			required={required}
			stretch={stretch}
			type='checkbox'
		>
			<Checkbox
				error={!!error}
				focusRef={focusRef}
				id={id}
				name={name}
				{...props}
			/>
		</Field>
	);
}
