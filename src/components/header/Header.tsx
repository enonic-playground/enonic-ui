import cx from 'clsx';
import React from 'react';
import './header.sass';


export interface StrictHeaderProps extends React.HTMLAttributes<HTMLElement> {
	as?: any
	size?: 'tiny' | 'small' | 'medium' | 'large' | 'huge'
}


export const Header = ({
	children,
	className,
	size,
	as = !size
		? 'h3'
		:size === 'huge'
			? 'h1'
			: size === 'large'
				? 'h2'
				: size === 'medium'
					? 'h4'
					: size === 'small'
						? 'h5'
						: size === 'tiny'
							? 'h6'
							: 'h3',
	...props
}: StrictHeaderProps) => {
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'header',
				size,
				className
			)}
			{...props}
		>
			{children}
		</ElementType>
	);
}

