import type {ClassValue} from 'clsx';
import type {
	HTMLAttributes,
	ReactNode,
} from 'react';


import cx from 'clsx';
import {prefix} from '../constants';
import TableBody from './Table.Body';
import TableFooter from './Table.Footer';
import TableHeader from './Table.Header';
import TableHeaderCell from './Table.HeaderCell';
import TableCell from './Table.Cell';
import TableRow from './Table.Row';


export interface StrictTableProps extends Omit<
	HTMLAttributes<HTMLTableElement>,
	'className'
> {
	as?: any
	celled?: boolean
	children?: ReactNode
	className?: ClassValue
	// disabled?: boolean
	stretch?: boolean
	striped?: boolean
};


function Table({
	as = 'table',
	celled,
	children,
	className,
	// disabled,
	stretch,
	striped,
	...props
}: StrictTableProps) {
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				prefix,
				'table',
				{
					celled,
					// disabled,
					stretch,
					striped,
				},
				className
			)}
		>
			{children}
		</ElementType>
	);
}

Table.Body = TableBody;
Table.Cell = TableCell;
Table.Footer = TableFooter;
Table.Header = TableHeader;
Table.HeaderCell = TableHeaderCell;
Table.Row = TableRow;

export default Table;
