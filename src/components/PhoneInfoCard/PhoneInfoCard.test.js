import React from 'react';
import { mount, shallow } from 'enzyme';
import PhoneInfoCard from './PhoneInfoCard';

describe('PhoneInfoCard component test', () => {
    let phoneInfo;

    beforeEach(() => {
        phoneInfo = shallow(<PhoneInfoCard></PhoneInfoCard>);
    });

    it('PhoneInfoCard should be displayed', () => {
        expect(phoneInfo).toMatchSnapshot();
    });

    it('PhoneInfoCard click event should be called', () => {
        const handlerClick = jest.fn();
        const phoneWithProps = mount(<PhoneInfoCard clicked={handlerClick}></PhoneInfoCard>)
        phoneWithProps.props().clicked()
        expect(handlerClick).toBeCalled();
    });
    
    it('PhoneInfoCard click event should return an id', () => {
        const handlerClick = jest.fn(id => 1)
        const phoneWithProps = mount(<PhoneInfoCard clicked={handlerClick}></PhoneInfoCard>)
        phoneWithProps.props().clicked()
        expect(handlerClick()).toEqual(1);
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