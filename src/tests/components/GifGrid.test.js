import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFecthGifs';
jest.mock('../../hooks/useFecthGifs');

describe('Pruebas en <GifGrid/>', () => {
  const category = 'DBZ';

  test('match con snapshot', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        url: 'http://example/cosa.jpg',
        title: 'Some stuff',
      },
      {
        id: 'ABC',
        url: 'http://example/cosa.jpg',
        title: 'Some stuff',
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });

});
