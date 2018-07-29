import React from 'react'
import { SocialIcon } from '../build/rrpm.module'
import renderer from 'react-test-renderer'

test('SocialIcon', () => {
	const component = renderer.create(
		<SocialIcon
			url="https://twitter.com/LOUassistant?lang=en"
			color="#fff"
			hoverColor="#000"
			width={50}
			height={50}
			marginLeft={20}
			marginRight={20}
		/>
	)

	let tree = component.toJSON()
	expect(tree).toMatchSnapshot()
})
