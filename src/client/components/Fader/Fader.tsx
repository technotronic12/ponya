import React from 'react'
import { Transition } from 'react-transition-group'

class Fader extends React.Component<
	{
		transitionDuration: number
		show: boolean
		isFixed: boolean
		zIndex?: number
	},
	{}
> {
	render() {
		const { children, transitionDuration, show, isFixed, zIndex } = this.props

		const defaultStyle = {
			transition: `all ${transitionDuration}ms ease-in-out`,
		}

		const fixed = { position: isFixed ? 'fixed' : '' }
		const z = { zIndex: zIndex || 1 }

		const transitionStyles = {
			entered: { opacity: 1 },
			exiting: { opacity: 0 },
		}

		return (
			<Transition in={show} timeout={2000} unmountOnExit={true}>
				{(state) => (
					<div
						style={{
							...defaultStyle,
							...fixed,
							...z,
							...transitionStyles[state],
						}}>
						{children}
					</div>
				)}
			</Transition>
		)
	}
}

export default Fader
