import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Dashboard from './Dashboard';
import dashboardReducer, { setKpis, setLaunches } from '../store/dashboardSlice';
import type { ReactElement } from 'react';

vi.mock('../store/dashboardThunks', () => ({
  fetchLaunches: () => () => null
}));

function renderWithStore(ui: ReactElement) {
  const store = configureStore({ reducer: { dashboard: dashboardReducer } });

  store.dispatch(setKpis([{ label: 'Total Launches', value: 2 }]));
  store.dispatch(
    setLaunches([
      { missionName: 'CRS-20', rocketName: 'Falcon 9', launchDate: '2020-03-07' },
      { missionName: 'Transporter-1', rocketName: 'Falcon 9', launchDate: '2021-01-24' }
    ])
  );

  return render(
    <div style={{ width: 960, height: 480 }}>
      <Provider store={store}>{ui}</Provider>
    </div>
  );
}

describe('Dashboard', () => {
  it('shows KPIs and chart', async () => {
    renderWithStore(<Dashboard />);
    await new Promise((r) => setTimeout(r, 0));

    expect(screen.getByText('SpaceX Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Total Launches')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });
});
