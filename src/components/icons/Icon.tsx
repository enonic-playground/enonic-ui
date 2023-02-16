import type {Color} from '..';
import type {IconName} from '.';

import cx, {type ClassValue} from 'clsx';

export interface StrictIconProps {
	className?: ClassValue
	color?: Color
	name: IconName
	size?:
		| 'mini'
		| 'tiny'
		| 'small'
		| 'large'
		| 'big'
		| 'huge'
		| 'massive'
}

export const Icon = ({
	className,
	name,
	color,
	size,
	...props
}: StrictIconProps) => {
	return (
		<i
			aria-hidden
			className={cx(
				'enonic',
				'icon',
				color,
				name,
				size,
				className
			)}
			{...props}
		></i>
	);
};
