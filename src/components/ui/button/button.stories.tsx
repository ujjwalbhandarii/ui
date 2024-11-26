import { Button } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    className: '',
    children: 'Button',
    disabled: false,
  },
  argTypes: {
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: { type: 'select' },
    },
    variant: {
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
      control: { type: 'select' },
    },
    type: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {};
