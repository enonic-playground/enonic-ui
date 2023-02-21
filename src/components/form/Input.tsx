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
	defaultValue?: string|number // Passed via ...props
	disabled?: boolean
	error?: boolean|string
	icon?: IconName
	iconPosition?: 'left'|'right'
	inputRef?: RefObject<HTMLInputElement>
	// label?: never // Handeled by Form.Field
	name?: string
	placeholder?: string // Passed via ...props
	required?: boolean // Passed via ...props
	size?: number
	stretch?: boolean
	type?: 'number'|'email'
	// value?: string|number // TODO controlled component?
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
	size,
	stretch,
	style = {},
	type,
	// value,
	...props
}: StrictInputProps) {
	const [focus, setFocus] = useState(false);

	// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#size
	// Valid for email, password, tel, url, and text, the size attribute
	// specifies how much of the input is shown.
	// Basically creates same result as setting CSS width property with a few
	// specialities.
	// The actual unit of the value depends on the input type.
	// For password and text, it is a number of characters (or em units) with
	// a default value of 20, and for others, it is pixels (or px units).
	// CSS width takes precedence over the size attribute.
	if (size && type === 'number' && !style.width) {
		style.width = `${size+1}em`;
	}

	if (!children) {
		children = [
			<input
				disabled={disabled}
				name={name}
				onBlur={() => setFocus(false)}
				onFocus={() => setFocus(true)}
				ref={inputRef}
				size={size}
				style={style}
				type={type}
				{...props}
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
					stretch,
				},
				className
			)}
			onClick={() => inputRef.current.focus()}
		>
			{children}
		</ElementType>
	);
}
