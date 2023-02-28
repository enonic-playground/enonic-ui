import type {ClassValue} from 'clsx';
import type {
	HTMLAttributes,
	ReactNode,
} from 'react';


import cx from 'clsx';


export interface StrictTableFooterProps extends Omit<
	HTMLAttributes<HTMLTableSectionElement>,
	'className'
> {
	as?: any
	children?: ReactNode
	className?: ClassValue
	// disabled?: boolean
	stretch?: boolean
};


function TableFooter({
	as = 'tfoot',
	children,
	className,
	// disabled,
	stretch,
	...props
}: StrictTableFooterProps) {
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'table',
				'footer',
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

export default TableFooter;
