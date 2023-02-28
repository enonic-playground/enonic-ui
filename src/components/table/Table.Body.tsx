import type {ClassValue} from 'clsx';
import type {
	HTMLAttributes,
	ReactNode,
} from 'react';


import cx from 'clsx';


export interface StrictTableBodyProps extends Omit<
	HTMLAttributes<HTMLTableSectionElement>,
	'className'
> {
	as?: any
	children?: ReactNode
	className?: ClassValue
	// disabled?: boolean
	stretch?: boolean
};


function TableBody({
	as = 'tbody',
	children,
	className,
	// disabled,
	stretch,
	...props
}: StrictTableBodyProps) {
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'table',
				'body',
				{
					// disabled,
					stretch,
				},
				className
			)}
		>
			{children}
		</ElementType>
	);
}

export default TableBody;
