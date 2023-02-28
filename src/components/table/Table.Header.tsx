import type {ClassValue} from 'clsx';
import type {
	HTMLAttributes,
	ReactNode,
} from 'react';


import cx from 'clsx';


export interface StrictTableHeaderProps extends Omit<
	HTMLAttributes<HTMLTableSectionElement>,
	'className'
> {
	as?: any
	children?: ReactNode
	className?: ClassValue
	// disabled?: boolean
	stretch?: boolean
};


function TableHeader({
	as = 'thead',
	children,
	className,
	// disabled,
	stretch,
	...props
}: StrictTableHeaderProps) {
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'table',
				'header',
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

export default TableHeader;
