import type {CommonProps} from '../index.d';
import type {StrictHeaderProps} from '../header/index.d';

import cx from 'clsx';
import * as React from 'react';
import {Header} from '../header/Header';


export type StrictModalProps = CommonProps;

export type StrictModalActionsProps = CommonProps;

export type StrictModalContentProps = CommonProps;


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
}: StrictHeaderProps) => Header({
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
}: StrictModalActionsProps) => {
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
