import type {Color} from '..';

import cx, {type ClassValue} from 'clsx';
import {ReactComponent as Users404x404} from '../icons/users_404x404.svg';
import {ReactComponent as Users512x464} from '../icons/users_512x464.svg';


export interface StrictSvgProps extends React.FC<React.SVGProps<SVGSVGElement>> {
	className?: ClassValue
	color?: Color
	height?: number|string
	name: 'users_404x404' | 'users_512x464'
	width?: number|string
}

export const Svg = ({
	className,
	name,
	color,
	...props
}: StrictSvgProps) => {
	const ElementType = name && {
		users_404x404: Users404x404,
		users_512x464: Users512x464
	}[name];
	return (
		<ElementType
			className={cx(
				'enonic',
				'svg',
				color,
				className
			)}
			{...props}
		/>
	);
};
