import type {
	ReactNode,
	RefObject,
} from 'react';
import type {CommonProps} from '..';

// import useId from '@accessible/use-id';
import cx from 'clsx';
// import {
// 	// useId, // React 18
// } from 'react';


export interface StrictFormFieldProps extends CommonProps {
	error?: boolean|string
	focusRef?: RefObject<HTMLInputElement> // TODO Support more Elements
	label?: string
	// labelPosition: 'left'|'right'|'left corner'|'right corner' // TODO
	name?: string
	required?: boolean
}


export function Field({
	as = 'div',
	children,
	className,
	error,
	focusRef,
	label,
	name,
	required,
	// type,
	...props
}: StrictFormFieldProps) {
	// const id = useId();
	// if (label && !name) {
	// 	name = id;
	// }
	if (!children) { children=[]; }
	if (!Array.isArray(children)) { children=[children]; }
	if (label) {
		(children as ReactNode[]).unshift(<label
			htmlFor={name}
			onClick={() => focusRef?.current?.focus()}
		>{label}</label>)
	}
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'field',
				{
					error,
					required,
				},
				className
			)}
			{...props}
		>
			{children}
		</ElementType>
	);
}
