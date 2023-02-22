import type {ClassValue} from 'clsx';
import type {
	HTMLAttributes,
	RefObject,
} from 'react';
import type { IconName } from '../icons/index';

import cx from 'clsx';
import {
	createRef,
	useEffect,
	useState,
} from 'react';
import { Icon } from '../icons/Icon';

export interface StrictCheckboxProps extends Omit<
	HTMLAttributes<HTMLInputElement>,
	'className'
> {
	as?: any
	defaultChecked?: boolean // Passed via ...props
	defaultIndeterminate?: boolean
	checked?: boolean // Passed via ...props
	children?: never
	className?: ClassValue
	disabled?: boolean
	error?: boolean
	id?: string // Passed via ...props
	focusRef?: RefObject<HTMLInputElement>
	name?: string // Passed via ...props
	value?: string // Passed via ...props
}


export function Checkbox({
	as = 'div',
	className,
	children, // Remove from props
	defaultChecked,
	defaultIndeterminate,
	disabled,
	error,
	name,
	focusRef = createRef<HTMLInputElement>(),
	...props
}: StrictCheckboxProps) {
	const [iconName, setIconName] = useState<IconName>();
	const [checkedState, setCheckedState] = useState(defaultChecked);
	const [indeterminateState, setIndeterminateState] = useState(defaultIndeterminate);

	const inputRef = createRef<HTMLInputElement>();
	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.checked = checkedState
			inputRef.current.indeterminate = indeterminateState;
		}
		if (checkedState) {
			setIconName('checkmark');
		} else if (indeterminateState) {
			setIconName('minus');
		} else {
			setIconName(undefined);
		}
	}, [
		checkedState,
		indeterminateState,
		inputRef,
	]);

	function onClick() {
		setIndeterminateState(false);
		setCheckedState(!checkedState);
	}

	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'checkbox',
				{
					disabled,
					error,
				},
				className
				)}
			onClick={onClick}
			onKeyDown={({
				keyCode,
				nativeEvent,
			}) => {
				// Prevent scrolling on space
				if (keyCode === 32) { // code == "Space"
					nativeEvent.preventDefault();
				}
			}}
			onKeyUp={({
				keyCode,
			}) => {
				if (keyCode === 32) { // code == "Space"
					onClick();
				}
			}}
			ref={focusRef}
			tabIndex={disabled ? -1 : 0}
		>
			<input
				{...props}
				disabled={disabled}
				ref={inputRef}
				type='checkbox'
			/>
			{
				iconName
					? <Icon color='black' name={iconName}/>
					: null
			}
		</ElementType>
	);
}
