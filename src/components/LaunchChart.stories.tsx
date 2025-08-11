import type { Meta, StoryObj } from '@storybook/react';
import LaunchChart from './LaunchChart';
import type { Launch } from '../store/dashboardSlice';

const mockLaunches: Launch[] = [
  { missionName: 'CRS-20', rocketName: 'Falcon 9', launchDate: '2020-03-07T23:50:00-05:00' },
  { missionName: 'Transporter-1', rocketName: 'Falcon 9', launchDate: '2021-01-24T10:00:00-05:00' }
];

const meta: Meta<typeof LaunchChart> = {
  title: 'Components/LaunchChart',
  component: LaunchChart,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: 720, height: 340, padding: 12, background: '#fff' }}>
        <Story />
      </div>
    )
  ],
  args: { launches: mockLaunches }
};

export default meta;
type Story = StoryObj<typeof LaunchChart>;

export const Default: Story = {};
