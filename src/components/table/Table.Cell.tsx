import type {ClassValue} from 'clsx';
import type {
	HTMLAttributes,
	ReactNode,
} from 'react';


import cx from 'clsx';


export interface StrictTableCellProps extends Omit<
	HTMLAttributes<HTMLTableCellElement>,
	'className'
> {
	as?: any
	bottom?: boolean
	center?: boolean
	children?: ReactNode
	className?: ClassValue
	// disabled?: boolean
	left?: boolean
	middle?: boolean
	right?: boolean
	stretch?: boolean
	top?: boolean
};


function TableCell({
	as = 'td',
	bottom,
	center,
	children,
	className,
	// disabled,
	left,
	middle,
	right,
	stretch,
	top,
	...props
}: StrictTableCellProps) {
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'table',
				'cell',
				{
					bottom,
					center,
					// disabled,
					left,
					middle,
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

export default TableCell;
