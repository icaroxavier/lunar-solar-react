// src/components/LaunchChart.test.tsx
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from './LaunchChart.stories';

const { Default, EmptyData } = composeStories(stories);

describe('LaunchChart (stories)', () => {
  it('renders with data', () => {
    const { container } = render(<Default />);
    // basic smoke test: Recharts renders an SVG
    expect(container.querySelector('svg')).toBeTruthy();
  });

  it('renders empty state', () => {
    const { container } = render(<EmptyData />);
    expect(container.querySelector('svg')).toBeTruthy(); // still renders axes
  });
});
