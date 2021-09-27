import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas en GifExpertApp', () => {
  test('debe hacer match con el snapshot', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar un alista de categorias', () => {
    const categories = ['One Punch', 'Pokemon'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
    
  });
});
