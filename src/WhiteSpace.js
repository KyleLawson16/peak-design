import React, { Component } from 'react'
import style from './WhiteSpace.scss'

class WhiteSpace extends Component {
	render() {
		const { height, backgroundColor } = this.props
		return (
			<div
				style={{
					width: '100%',
					height: height,
					backgroundColor: backgroundColor
				}}
			/>
		)
	}
}

export { WhiteSpace }
