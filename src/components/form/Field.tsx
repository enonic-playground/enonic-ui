import type {
	ReactNode,
	RefObject,
} from 'react';
import type {CommonProps} from '../index.d';

// import useId from '@accessible/use-id';
import cx from 'clsx';
// import {
// 	// useId, // React 18
// } from 'react';
import {isStringLiteral} from '../../utils/isStringLiteral';


export interface StrictFormFieldProps extends CommonProps {
	error?: boolean|string
	focusRef?: RefObject<HTMLInputElement> // TODO Support more Elements
	label?: string
	labelPosition?: 'right'// |'left'|'left corner'|'right corner' // TODO
	name?: string
	required?: boolean
	stretch?: boolean
	type?: 'checkbox'
}


export function Field({
	as = 'div',
	children,
	className,
	error,
	focusRef,
	label,
	labelPosition,
	name,
	required,
	stretch,
	type,
	...props
}: StrictFormFieldProps) {
	// const id = useId();
	// if (label && !name) {
	// 	name = id;
	// }
	if (!children) { children=[]; }
	if (!Array.isArray(children)) { children=[children]; }
	if (label) {
		(children as ReactNode[])[labelPosition === 'right' ? 'push' : 'unshift'](<label
			htmlFor={name}
			onClick={() => focusRef?.current?.focus()}
		>{label}</label>)
	}
	if(type === 'checkbox' && isStringLiteral(error)) {
		(children as ReactNode[]).push(<span className='enonic error'>{error}</span>);
	}
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'field',
				{
					error,
					stretch,
					required,
				},
				labelPosition,
				className
			)}
			{...props}
		>
			{children}
		</ElementType>
	);
}
