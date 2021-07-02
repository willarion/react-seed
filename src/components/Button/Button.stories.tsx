import { Button } from './Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

export default {
  title: 'UI/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  styleType: 'primary',
  children: 'Button',
  disabled: false,
  onClick: () => alert('Button clicked!'),
};
