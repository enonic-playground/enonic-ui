import type {CommonProps} from './index.d';

import cx from 'clsx';


export interface StrictGroupProps extends CommonProps {
	center?: boolean
	compact?: boolean
	right?: boolean
	stretch?: boolean
	vertical?: boolean
};


export const Group = ({
	as = 'div',
	center,
	children,
	className,
	compact,
	right,
	stretch,
	vertical,
	...props
}: StrictGroupProps) => {
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'group',
				{
					center,
					compact,
					right,
					stretch,
					vertical,
				},
				className
			)}
			{...props}
		>
			{children}
		</ElementType>
	);
}

