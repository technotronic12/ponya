import * as React from 'react';
import 'jsdom-global/register';
import { expect } from 'chai';
// https://github.com/airbnb/enzyme/issues/1284
// enzyme_adapter_react_16_1.default is not a constructor
// TypeScript doesn't yet create synthetic default imports like Babel does
import * as Enzyme from 'enzyme';
import { mount } from 'enzyme';
import { MenuItem } from './MenuItem';
import * as Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Menu Item', () => {

  it('should render an icon', () => {
    const icon = 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDUxMCA1MTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMCA1MTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0iaG9tZSI+CgkJPHBvbHlnb24gcG9pbnRzPSIyMDQsNDcxLjc1IDIwNCwzMTguNzUgMzA2LDMxOC43NSAzMDYsNDcxLjc1IDQzMy41LDQ3MS43NSA0MzMuNSwyNjcuNzUgNTEwLDI2Ny43NSAyNTUsMzguMjUgMCwyNjcuNzUgICAgIDc2LjUsMjY3Ljc1IDc2LjUsNDcxLjc1ICAgIiBmaWxsPSIjOGMzOWZlIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==';
    const menuItem = mount(<MenuItem icon={icon}/>);

    const menuImage = menuItem.find('img');
    expect(menuImage.length).to.equal(1);

    const imageSrc = menuItem.find('img').first().getDOMNode().getAttribute('src');
    expect(imageSrc).to.equal(icon);
  });
});
