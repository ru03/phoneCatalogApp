import React from 'react';
import { mount } from 'enzyme';
import PhoneDetailComponent from './PhoneDetailComponent';

describe('PhoneDetail tests', () => {
    let phoneDetail;
    beforeEach(() => {
        phoneDetail = mount(
            <PhoneDetailComponent model='iphone8'
                price='15'
                colors='red'
                brand='apple'
                screen='screen'
                image='image'></PhoneDetailComponent>
        )
    })
    it('PhoneDetailComponent should be displayed', () => {
        expect(phoneDetail).toMatchSnapshot();
    });

    it('Props are correct', () => {
        expect(phoneDetail.props().model).toEqual('iphone8');
        expect(phoneDetail.props().price).toEqual('15');
        expect(phoneDetail.props().colors).toEqual('red');
        expect(phoneDetail.props().brand).toEqual('apple');
        expect(phoneDetail.props().screen).toEqual('screen');
        expect(phoneDetail.props().image).toEqual('image');
    });

    it('Should display brand in h1 tag', () => {
        expect(phoneDetail.find('#title').text()).toEqual('apple')
    })

})