import {
	CommonProps,
	CommonPropsWithShadeTint
} from '../index.d';

export type BarShade = 'none'|'low'|'high' // Affects light-themes
export type BarTint = 'none'|'low'|'high' // Affects dark-themes

export interface StrictBarProps extends CommonPropsWithShadeTint {
	type?: 'app'|'tool'
}

export interface StrictAppBarProps extends StrictBarProps {
	type?: never
}

export interface StrictToolBarProps extends StrictBarProps {
	type?: never
}

export interface StrictBarItemProps extends CommonProps {
	verticalAlign:
		|'baseline'
		|'bottom'
		|'middle'
		|'stretch'
		|'top'
}


