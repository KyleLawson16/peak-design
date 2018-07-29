import React, { Component } from 'react'
import { SocialIcon as ReactSocialIcon } from 'react-social-icons'

class SocialIcon extends Component {
	constructor(props) {
		super(props)

		this.state = {
			socialColor: this.props.color
		}
	}

	onMouseEnter = () => {
		this.setState({
			socialColor: this.props.hoverColor
		})
	}

	onMouseLeave = () => {
		this.setState({
			socialColor: this.props.color
		})
	}

	render() {
		const { url, width, height, marginLeft, marginRight } = this.props
		const { socialColor } = this.state
		return (
			<ReactSocialIcon
				url={url}
				color={socialColor}
				style={{
					width: width,
					height: height,
					marginLeft: marginLeft,
					marginRight: marginRight
				}}
				onMouseEnter={this.onMouseEnter}
				onMouseLeave={this.onMouseLeave}
			/>
		)
	}
}

export { SocialIcon }
