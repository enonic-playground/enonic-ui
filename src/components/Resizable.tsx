import type {ClassValue} from 'clsx';
// import {useWhenInitAsync} from '@seamusleahy/init-hooks';
import cx from 'clsx';
import {
	cloneElement,
	createRef,
	type ReactElement,
	type JSXElementConstructor,
} from 'react';
import { Splitter } from './Splitter';


export interface StrictResizableProps extends Omit<
	React.HTMLAttributes<HTMLElement>,
	'className'
> {
	as?: any
	children?: React.ReactNode[]
	className?: ClassValue
	// width?: string // React.CSSProperties['width']
};


export const Resizable = ({
	as = 'div',
	children,
	className,
	// width = '38%',
	...props
}: StrictResizableProps) => {
	const [first, second] = children as React.ReactNode[];
	const firstRef = createRef<HTMLElement>();
	const secondRef = createRef<HTMLElement>();
	const ElementType = as;
	// useWhenInitAsync(() => {
	// 	firstRef.current.style.width = width;
	// });
	return (
		<ElementType
			className={cx(
				'enonic',
				'resizable',
				className
			)}
			{...props}
		>
			{cloneElement(first as ReactElement<any, string | JSXElementConstructor<any>>, {
					ref: firstRef
			})}
			<Splitter
				leftElementRef={firstRef}
				rightElementRef={secondRef}
			/>
			{cloneElement(second as ReactElement<any, string | JSXElementConstructor<any>>, {
					ref: secondRef
			})}
		</ElementType>
	);
}

