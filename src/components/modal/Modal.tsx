import cx from 'clsx';
import React from 'react';
import {Header} from '../header/Header.tsx';
import './modal.sass';


export interface StrictModalProps extends React.HTMLAttributes<HTMLElement> {
	as?: any
}

export interface StrictModalContentProps extends React.HTMLAttributes<HTMLElement> {
	as?: any
}


export function Modal({
	as = 'div',
	className,
	children,
	...props
}: StrictModalProps) {
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'modal',
				className
			)}
			{...props}
		>
			{children}
		</ElementType>
	);
}


Modal.Header = ({
	className,
	size = 'large',
	...props
}) => Header({
	className: cx('modal', className),
	size,
	...props
});


Modal.Content = ({
	as = 'div',
	className,
	children,
	...props
}: StrictModalContentProps) => {
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'modal',
				'content',
				className
			)}
			{...props}
		>
			{children}
		</ElementType>
	);
}

Modal.Actions = ({
	as = 'div',
	className,
	children,
	...props
}: StrictModalContentProps) => {
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'modal',
				'actions',
				className
			)}
			{...props}
		>
			{children}
		</ElementType>
	);
}
