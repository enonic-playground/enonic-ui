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
	as = size && {
		'huge': 'h1',
		'large': 'h2',
		'medium': 'h4',
		'small': 'h5',
		'tiny': 'h6'
	}[size] || 'h3',
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

