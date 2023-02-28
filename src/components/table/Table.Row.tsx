import type {ClassValue} from 'clsx';
import type {
	HTMLAttributes,
	ReactNode,
} from 'react';


import cx from 'clsx';


export interface StrictTableRowProps extends Omit<
	HTMLAttributes<HTMLTableRowElement>,
	'className'
> {
	as?: any
	bottom?: boolean
	center?: boolean
	children?: ReactNode
	className?: ClassValue
	// disabled?: boolean
	right?: boolean
	stretch?: boolean
	top?: boolean
};


function TableRow({
	as = 'tr',
	bottom,
	center,
	children,
	className,
	// disabled,
	right,
	stretch,
	top,
	...props
}: StrictTableRowProps) {
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'table',
				'row',
				{
					bottom,
					center,
					// disabled,
					right,
					stretch,
					top,
				},
				className
			)}
		>
			{children}
		</ElementType>
	);
}

export default TableRow;
