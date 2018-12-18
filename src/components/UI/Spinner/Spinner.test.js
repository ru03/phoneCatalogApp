import React from 'react';
import { mount } from 'enzyme';
import Spinner from './Spinner';
import Backdrop from './../Backdrop/Backdrop';

describe('Spinner test', () => {
    let spinner;
    beforeEach(() => {
        spinner = mount(<Spinner />);
    });

    it('Spinner component should be displayed', () => {
        expect(spinner).toMatchSnapshot();
    });

    it('Spinner component should have a backdrop component', () => {
        expect(spinner.find(Backdrop)).toHaveLength(1);
    });
})