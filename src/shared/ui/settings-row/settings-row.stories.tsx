import type { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';

import { SettingsRow } from './ui';

const SettingsRowMeta: ComponentMeta<typeof SettingsRow> = {
  title: 'Settings Row',
  component: SettingsRow,
  argTypes: {
    placeholder: { name: 'string' },
  },
  args: {
    name: 'Setting',
    value: '',
  },
};

export default SettingsRowMeta;

type SettingsRowStory = ComponentStory<typeof SettingsRow>;

export const Regular: SettingsRowStory = (args) => <SettingsRow {...args} />;
