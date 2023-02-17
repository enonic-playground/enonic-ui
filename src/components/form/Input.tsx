import type {ClassValue} from 'clsx';
import type {IconName} from '../icons';
import type {
	HTMLAttributes,
	ReactNode,
	RefObject
} from 'react';


import cx from 'clsx';
import {
	createRef,
	useState
} from 'react';
import {Icon} from '../icons/Icon';
import {isStringLiteral} from '../../utils/isStringLiteral';


export interface StrictInputProps extends Omit<
	HTMLAttributes<HTMLInputElement>,
	'className'
> {
	as?: any
	children?: ReactNode
	className?: ClassValue
	disabled?: boolean
	error?: boolean|string
	icon?: IconName
	iconPosition?: 'left'|'right'
	inputRef?: RefObject<HTMLInputElement>
	// label: never // Handeled by Form.Field
	name?: string
	required?: boolean
	type?: 'number'|'email'
	value?: string|number
};


export function Input({
	as = 'div',
	children,
	className,
	disabled,
	error,
	icon,
	iconPosition,
	inputRef = createRef<HTMLInputElement>(),
	name,
	// onChange
	// onClick,
	placeholder,
	required,
	type,
	value,
	...props
}: StrictInputProps) {
	const [focus, setFocus] = useState(false);

	if (!children) {
		children = [
			<input
				disabled={disabled}
				name={name}
				onBlur={() => setFocus(false)}
				onFocus={() => setFocus(true)}
				placeholder={placeholder}
				ref={inputRef}
				required={required}
				type={type}
				value={value}
			/>
		]
	}

	if(isStringLiteral(error)) {
		(children as ReactNode[]).push(<span className='enonic error'>{error}</span>);
	}

	if (icon) {
		(children as ReactNode[])[
			iconPosition === 'left' ? 'unshift' : 'push'
		](<Icon name={icon}/>);
	}

	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'input',
				{
					disabled,
					error,
					focus,
					// required,
				},
				className
			)}
			onClick={() => inputRef.current.focus()}
			{...props}
		>
			{children}
		</ElementType>
	);
}
