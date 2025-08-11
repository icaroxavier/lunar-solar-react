import { render } from '@testing-library/react';
import LaunchChart from './LaunchChart';
import type { Launch } from '../store/dashboardSlice';

describe('LaunchChart', () => {
  it('renders with data', async () => {
    const launches: Launch[] = [
      { missionName: 'CRS-20', rocketName: 'Falcon 9', launchDate: '2020-03-07' },
      { missionName: 'Transporter-1', rocketName: 'Falcon 9', launchDate: '2021-01-24' }
    ];

    const { container } = render(
      <div style={{ width: 800, height: 320 }}>
        <LaunchChart launches={launches} />
      </div>
    );

    await new Promise((r) => setTimeout(r, 0));
    expect(container.querySelector('svg')).toBeTruthy();
  });

  it('renders empty data', async () => {
    const { container } = render(
      <div style={{ width: 800, height: 320 }}>
        <LaunchChart launches={[]} />
      </div>
    );
    await new Promise((r) => setTimeout(r, 0));
    expect(container.querySelector('svg')).toBeTruthy();
  });
});
