import React from 'react';
import { mount, shallow } from 'enzyme';
import ProductMock from '../../__mocks__/ProductMock';
import Product from '../../components/Product';
import ProviderMock from '../../__mocks__/ProviderMock'

describe('<Product />', () => {
  test('Render del component Product', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>,
    );
    expect(product.length).toEqual(1);
  });
  test('Comprobar el botón de comprar', () => {
    const handleAddToCart = jest.fn();
    const wrapper = mount(
      <ProviderMock>
        <Product
          product={ProductMock}
          handleAddToCart={handleAddToCart}
        />
      </ProviderMock>,
    );
    wrapper.find('button').simulate('click');
  });
});
