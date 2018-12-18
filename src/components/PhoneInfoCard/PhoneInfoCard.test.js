import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import PhoneInfoCard from './PhoneInfoCard';

describe('Toolbar component test', () => {
    let phoneInfo;

    beforeEach(() => {
        phoneInfo = shallow(<PhoneInfoCard></PhoneInfoCard>);
    });

    it('PhoneInfoCard should be displayed', () => {
        expect(phoneInfo).toMatchSnapshot();
    });
    // TODO test click event
    it('PhoneInfoCard click event should be called', () => {
        const handlerClick = sinon.spy();
        const phoneWithProps = mount(<PhoneInfoCard clicked={handlerClick}></PhoneInfoCard>)
        console.log(phoneWithProps.prop());
        expect(handlerClick).toBeCalled();
    });

    it('PhoneInfoCard props should be filled up', () => {
        const phoneWithProps = mount(<PhoneInfoCard image='image'
            model='iphone8'
            brand='apple'>
        </PhoneInfoCard>)
        expect(phoneWithProps.props().model).toEqual('iphone8');
        expect(phoneWithProps.props().brand).toEqual('apple');
        expect(phoneWithProps.props().image).toEqual('image');
    });
})