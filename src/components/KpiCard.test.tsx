import { render, screen } from '@testing-library/react';
import KpiCard from './KpiCard';

describe('KpiCard', () => {
  it('renders label and value', () => {
    render(<KpiCard label="Total Launches" value={42} />);
    expect(screen.getByText('Total Launches')).toBeInTheDocument();
    expect(screen.getByText('42')).toBeInTheDocument();
  });
});
