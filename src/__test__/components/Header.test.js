import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Header from '../../components/Header';
import ProviderMock from '../../__mocks__/ProviderMock';

describe('<Header />', () => {
  const header = shallow(
    <ProviderMock>
      <Header />
    </ProviderMock>,
  );
  expect(header.length).toEqual(1);
  test('Render del título', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});

describe('Header snapshot', () => {
  test('comprobar el snapshot del header', () => {
    const header = create(<ProviderMock>
      <Header />
    </ProviderMock>);
    expect(header.toJSON()).toMatchSnapshot();
  });
});
