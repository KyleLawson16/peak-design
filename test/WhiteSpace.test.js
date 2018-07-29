import React from 'react'
import { WhiteSpace } from '../build/rrpm.module'
import renderer from 'react-test-renderer'

test('WhiteSpace', () => {
	const component = renderer.create(<WhiteSpace height={20} />)

	let tree = component.toJSON()
	expect(tree).toMatchSnapshot()
})
