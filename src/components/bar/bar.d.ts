export type BarShade = 'none'|'low'|'high' // Affects light-themes
export type BarTint = 'none'|'low'|'high' // Affects dark-themes

export interface StrictBarProps extends React.HTMLAttributes<HTMLElement> {
	as?: any
	shade?: BarShade
	tint?: BarTint
	type?: 'app'|'tool'
}

export interface StrictAppBarProps extends StrictBarProps {
	type: never
}

export interface StrictToolBarProps extends StrictBarProps {
	type: never
}

export interface StrictBarItemProps extends React.HTMLAttributes<HTMLElement> {
	as?: any
	verticalAlign:
		|'baseline'
		|'bottom'
		|'middle'
		|'stretch'
		|'top'
}


