import { action } from '@storybook/addon-actions';

import React from 'react';
import Header from '../../components/Header';
export default {
  title: 'Header',

  component: Header,
  parameters: {
    actions: {},
  },
  argTypes: {},
};

const Template = (args) => <Header {...args} />;

Header.defaultProps = {
  title: '',
  emitOnClick: action('Header was clicked'),
};

export const HeaderDefault = Template.bind({});

HeaderDefault.args = {
  title: 'SB Component',
  emitOnClick: action('Header was clicked'),
};
