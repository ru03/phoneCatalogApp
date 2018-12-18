import React from 'react';
import { shallow } from 'enzyme';
import Backdrop from './Backdrop';

describe('Backdrop test', () => {
    it('Backdrop component should be displayed', () => {
        const backdrop = shallow(<Backdrop></Backdrop>);

        expect(backdrop).toMatchSnapshot();
    });
})