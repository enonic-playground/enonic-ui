import type {ClassValue} from 'clsx';

export type Shade = 'none'|'low'|'high' // Affects light-themes
export type Tint = 'none'|'low'|'high' // Affects dark-themes

export enum Colors {
	BLACK = 'black',
	BLUE = 'blue',
	GREEN = 'green',
	GRAY = 'gray',
	ORANGE = 'orange',
	PURPLE = 'purple',
	RED ='red',
	WHITE = 'white',
}

export type Color =
	| 'black'
	| 'blue'
	| 'green'
	| 'gray'
	| 'orange'
	| 'purple'
	| 'red'
	| 'white'

export interface CommonProps extends Omit<
	React.HTMLAttributes<HTMLElement>,
	'className'
> {
	as?: any
	children?: React.ReactNode
	className?: ClassValue
}

export interface CommonPropsWithShadeTint extends CommonProps {
	shade?: Shade
	tint?: Tint
}
