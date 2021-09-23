import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

/*
  Test
    1. Enzyme
    2. Enzyme to JSON
    3. debe de mostrar el componente correctamente
      * shallow
      * wrapper
      * wrapper .toMatchSnapshot()
 */

describe('Pruebas en <GifGridItem />>', () => {
    const title = 'Un titulo';
    const url = 'https://example.com/algo.jpg';

  test('debe de mostrar el componente correctamente', () => {
    const wrapper = shallow(<GifGridItem  title={title} url={url}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
