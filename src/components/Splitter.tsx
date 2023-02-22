import type {CommonPropsWithShadeTint} from './index.d';
import cx from 'clsx';
import {
	type RefObject,
	createRef,
	useState,
} from 'react';


export interface StrictSplitterProps extends CommonPropsWithShadeTint {
	leftElementRef: RefObject<HTMLElement>
	rightElementRef: RefObject<HTMLElement>
}


export const Splitter = ({
	as = 'div',
	className,
	leftElementRef,
	rightElementRef,
	shade = 'low',
	tint = shade,
	...props
}: StrictSplitterProps) => {
	const [leftElementInitialDisabled, setLeftElementInitialDisabled] = useState<boolean>();
	const [rightElementInitialDisabled, setRightElementInitialDisabled] = useState<boolean>();
	const ghostRef = createRef<HTMLElement>();
	const ElementType = as;
	return (
		<ElementType
			className={cx(
				'enonic',
				'splitter',
				shade && {
					low: 'low-shade',
					high: 'high-shade',
				}[shade],
				tint && {
					low: 'low-tint',
					high: 'high-tint',
				}[tint],
				className
			)}
			{...props}
		>
			<ElementType
				className={cx(
					'enonic',
					'splitter',
					'ghost'
				)}
				onBlur={() => {
					if (!leftElementInitialDisabled) {
						leftElementRef.current.classList.remove('disabled');
					}
					if (!rightElementInitialDisabled) {
						rightElementRef.current.classList.remove('disabled');
					}
				}}
				onFocus={() => {
					if (leftElementRef.current.classList.contains('disabled')) {
						setLeftElementInitialDisabled(true);
					} else {
						leftElementRef.current.classList.add('disabled');
					}
					if (rightElementRef.current.classList.contains('disabled')) {
						setRightElementInitialDisabled(true);
					} else {
						rightElementRef.current.classList.add('disabled');
					}
				}}
				onMouseDown={() => {
					ghostRef.current.focus();
				}}
				onMouseUp={() => {
					ghostRef.current.blur();
				}}
				ref={ghostRef}
				tabIndex={0}
			/>
		</ElementType>
	);
}
