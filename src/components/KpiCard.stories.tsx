import type { Meta, StoryObj } from '@storybook/react';
import KpiCard from './KpiCard';

const meta: Meta<typeof KpiCard> = {
  title: 'Components/KpiCard',
  component: KpiCard,
  tags: ['autodocs'],
  args: { label: 'Total Launches', value: 42 }
};

export default meta;
type Story = StoryObj<typeof KpiCard>;

export const Default: Story = {};
