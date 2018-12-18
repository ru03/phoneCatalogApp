import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Toolbar from './Toolbar';

describe('Toolbar test', () => {
    it('Toolbar component should be displayed', () => {
        const toolbar = shallow(<Toolbar></Toolbar>);

        expect(toolbar).toMatchSnapshot();
    })
})