import React from 'react';

import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en el <AddCategory />', () => {
  const setCategories = () => {};
  test('debe mostrarse correctamente', () => {
    const wrapper = shallow(<AddCategory setCategories={setCategories} />);
    expect(wrapper).toMatchSnapshot();
  });
});
