// src/components/Dashboard.test.tsx
import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer, { setKpis, setLaunches } from '../store/dashboardSlice';

function renderWithStore(ui: JSX.Element) {
  const store = configureStore({ reducer: { dashboard: dashboardReducer } });
  store.dispatch(setKpis([{ label: 'Total Launches', value: 2 }]));
  store.dispatch(
    setLaunches([
      { missionName: 'CRS-20', rocketName: 'Falcon 9', launchDate: '2020-03-07' },
      { missionName: 'Transporter-1', rocketName: 'Falcon 9', launchDate: '2021-01-24' }
    ])
  );
  return render(<Provider store={store}>{ui}</Provider>);
}

describe('Dashboard', () => {
  it('shows KPIs and chart', () => {
    renderWithStore(<Dashboard />);
    expect(screen.getByText('SpaceX Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Total Launches')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });
});
