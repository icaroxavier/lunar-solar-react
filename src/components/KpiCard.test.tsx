// src/components/KpiCard.test.tsx
import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as stories from './KpiCard.stories';

const { Default, LargeNumbers } = composeStories(stories);

describe('KpiCard (stories)', () => {
  it('renders default args', () => {
    render(<Default />);
    expect(screen.getByText('Total Launches')).toBeInTheDocument();
    expect(screen.getByText('42')).toBeInTheDocument();
  });

  it('renders large numbers', () => {
    render(<LargeNumbers />);
    expect(screen.getByText('Revenue')).toBeInTheDocument();
    expect(screen.getByText('1250000')).toBeInTheDocument();
  });
});
