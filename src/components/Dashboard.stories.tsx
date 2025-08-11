// src/components/Dashboard.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Dashboard from './Dashboard';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import dashboardReducer, { setKpis, setLaunches } from '../store/dashboardSlice';

// Helper to build a store with mocked state and swallow thunks (no network in Storybook)
function makeMockedStore() {
  const store = configureStore({
    reducer: { dashboard: dashboardReducer }
  });

  // Swallow any thunk to avoid Apollo/network calls triggered by useEffect
  const originalDispatch = store.dispatch;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (store as any).dispatch = (action: unknown) => {
    if (typeof action === 'function') {
      // No-op for thunks during Storybook render
      return null;
    }
    // @ts-expect-error – keep original dispatch typing
    return originalDispatch(action);
  };

  return store;
}

const meta: Meta<typeof Dashboard> = {
  title: 'Pages/Dashboard',
  component: Dashboard,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const store = makeMockedStore();

      // Seed mocked state for KPIs and Launches
      store.dispatch(
        setKpis([
          { label: 'Total Launches', value: 7 },
          { label: 'Unique Rockets', value: 2 }
        ])
      );
      store.dispatch(
        setLaunches([
          { missionName: 'CRS-20', rocketName: 'Falcon 9', launchDate: '2020-03-07T23:50:00-05:00' },
          { missionName: 'Transporter-1', rocketName: 'Falcon 9', launchDate: '2021-01-24T10:00:00-05:00' },
          { missionName: 'Inspiration4', rocketName: 'Falcon 9', launchDate: '2021-09-15T20:02:00-04:00' },
          { missionName: 'Starlink-4', rocketName: 'Falcon 9', launchDate: '2022-02-03T13:13:00-05:00' },
          { missionName: 'Starlink-5', rocketName: 'Falcon 9', launchDate: '2022-04-21T13:51:00-04:00' },
          { missionName: 'Starlink-6', rocketName: 'Falcon 9', launchDate: '2023-05-14T01:03:00-04:00' },
          { missionName: 'Transporter-10', rocketName: 'Falcon 9', launchDate: '2024-10-10T10:10:00-04:00' }
        ])
      );

      return (
        <Provider store={store}>
          <div style={{ width: 960, padding: 16, background: '#fff' }}>
            <Story />
          </div>
        </Provider>
      );
    }
  ]
};

export default meta;
type Story = StoryObj<typeof Dashboard>;

export const MockedState: Story = {};
