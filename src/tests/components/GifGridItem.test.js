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
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('debe de mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe tener un <p> con el title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('debe de tener la imagen igual al url y alt de los props', () => {
    const img = wrapper.find('img');
    // console.log(img.props().src);
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('debe tener animate__fadeIn', () => {
    const div = wrapper.find('div');
    const className = div.prop('className');
    const cssAnimation = 'animate__fadeIn';


    expect(className.includes(cssAnimation)).toBe(true);
  });
});
