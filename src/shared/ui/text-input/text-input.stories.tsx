import type { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';

import { TextInput } from './ui';

const TextInputMeta: ComponentMeta<typeof TextInput> = {
  title: 'Text Input',
  component: TextInput,
  argTypes: {
    placeholder: { name: 'string' },
  },
  args: {
    placeholder: 'Name',
    value: '',
  },
};

export default TextInputMeta;

type TextInputStory = ComponentStory<typeof TextInput>;

export const Regular: TextInputStory = (args) => <TextInput {...args} />;
