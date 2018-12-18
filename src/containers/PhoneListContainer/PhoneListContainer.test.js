import React from 'react';
import { mount } from 'enzyme';
import { PhoneListContainer } from './PhoneListContainer';
import PhoneInfoCard from './../../components/PhoneInfoCard/PhoneInfoCard';
import PhoneDetails from './../../components/PhoneDetailComponent/PhoneDetailComponent';

describe('PhoneListContainer test', () => {
    let phoneListContainer;
    beforeEach(() => {
        const props = {
            phones: [],
            phone: []
        }
        phoneListContainer = mount(<PhoneListContainer onFetchPhones={() => {}} {...props}/>);
    });

    it('PhoneListContainer component should be displayed', () => {
        expect(phoneListContainer).toMatchSnapshot();
    });

    it('PhoneListContainer component should display PhoneInfoCard component', () => {
        phoneListContainer.setProps({
            phones: [{
                id: 1,
                model: 'iphone8',
                price: '15',
                colors: 'red',
                brand: 'apple',
                screen: 'screen',
                image: 'image'
            }]
        });
        expect(phoneListContainer.find(PhoneInfoCard)).toHaveLength(1);
    });

    it('PhoneListContainer component should display PhoneDetails with a phone in store', () => {
        phoneListContainer.setProps({
            phones: [{
                id: 1,
                model: 'iphone8',
                price: '15',
                colors: 'red',
                brand: 'apple',
                screen: 'screen',
                image: 'image'
            }],
            phone: [{
                id: 1,
                model: 'iphone8',
                price: '15',
                colors: 'red',
                brand: 'apple',
                screen: 'screen',
                image: 'image'
            }]
        });
        expect(phoneListContainer.find(PhoneDetails)).toHaveLength(1);
    });
});