import type { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';

import { Button } from './ui';

const ButtonMeta: ComponentMeta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    title: 'Sign in',
  },
};

export default ButtonMeta;

type ButtonStory = ComponentStory<typeof Button>;

export const Regular: ButtonStory = (args) => <Button {...args} />;
