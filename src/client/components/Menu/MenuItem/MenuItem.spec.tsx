import React from 'react'
import 'jsdom-global/register'
import { expect } from 'chai'
import Enzyme, { mount } from 'enzyme'
import { MenuItem } from './MenuItem'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('Menu Item', () => {
	const icon =
		'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDUxMCA1MTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMCA1MTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0iaG9tZSI+CgkJPHBvbHlnb24gcG9pbnRzPSIyMDQsNDcxLjc1IDIwNCwzMTguNzUgMzA2LDMxOC43NSAzMDYsNDcxLjc1IDQzMy41LDQ3MS43NSA0MzMuNSwyNjcuNzUgNTEwLDI2Ny43NSAyNTUsMzguMjUgMCwyNjcuNzUgICAgIDc2LjUsMjY3Ljc1IDc2LjUsNDcxLjc1ICAgIiBmaWxsPSIjOGMzOWZlIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=='

	it('should render an icon', () => {
		const menuItem = mount(<MenuItem icon={icon} />)

		const menuImage = menuItem.find('img')
		expect(menuImage.length).to.equal(1)

		const imageSrc = menuItem
			.find('img')
			.first()
			.getDOMNode()
			.getAttribute('src')

		expect(imageSrc).to.equal(icon)
	})

	it('should receive an element id and set a href', () => {
		const elementId = 'some-id'
		const menuItem = mount(<MenuItem icon={icon} elementId={elementId} />)

		const menuImage = menuItem.find('a')
		expect(menuImage.length).to.equal(1)

		const href = menuItem
			.find('a')
			.first()
			.getDOMNode()
			.getAttribute('href')

		expect(href).to.equal(elementId)
	})
})
