import React from 'react';
import { shallow } from 'enzyme';
import Toolbar from './Toolbar';

describe('Toolbar test', () => {
    it('Toolbar component should be displayed', () => {
        const toolbar = shallow(<Toolbar></Toolbar>);

        expect(toolbar).toMatchSnapshot();
    })
})