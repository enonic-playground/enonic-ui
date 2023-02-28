import type {ClassValue} from 'clsx';
import type {
	HTMLAttributes,
	ReactNode,
} from 'react';


import cx from 'clsx';


export interface StrictTableHeaderCellProps extends Omit<
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


function TableHeaderCell({
	as = 'th',
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
}: StrictTableHeaderCellProps) {
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'table',
				'header',
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

export default TableHeaderCell;
