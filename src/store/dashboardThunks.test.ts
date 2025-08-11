import { fetchLaunches } from './dashboardThunks';
import { setKpis, setLaunches, setLoading, setError } from './dashboardSlice';
import type { AppDispatch } from './index';

vi.mock('../graphql/client', () => {
  return {
    apolloClient: {
      query: vi.fn(),
    },
  };
});

import { apolloClient } from '../graphql/client';
import type { LaunchesQueryResult } from '../graphql/queries';

describe('fetchLaunches thunk', () => {
  const dispatch = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('dispatches launches and KPIs on success', async () => {
    const data: LaunchesQueryResult = {
      launchesPast: [
        {
          mission_name: 'CRS-20',
          launch_date_local: '2020-03-07',
          rocket: { rocket_name: 'Falcon 9' },
        },
        {
          mission_name: 'Transporter-1',
          launch_date_local: '2021-01-24',
          rocket: { rocket_name: 'Falcon 9' },
        },
      ],
    };

    (apolloClient.query as unknown as import('vitest').Mock).mockResolvedValueOnce({ data });

    await fetchLaunches()(dispatch as unknown as AppDispatch);

    expect(dispatch).toHaveBeenCalledWith(setLoading(true));
    expect(dispatch).toHaveBeenCalledWith(setError(null));
    expect(dispatch).toHaveBeenCalledWith(
      setLaunches([
        { missionName: 'CRS-20', rocketName: 'Falcon 9', launchDate: '2020-03-07' },
        { missionName: 'Transporter-1', rocketName: 'Falcon 9', launchDate: '2021-01-24' },
      ])
    );
    expect(dispatch).toHaveBeenCalledWith(
      setKpis([
        { label: 'Total Launches', value: 2 },
        { label: 'Unique Rockets', value: 1 },
      ])
    );
    expect(dispatch).toHaveBeenCalledWith(setLoading(false));
  });

  it('dispatches error on failure', async () => {
    (apolloClient.query as unknown as import('vitest').Mock).mockRejectedValueOnce(
      new Error('Network error')
    );

    await fetchLaunches()(dispatch as unknown as AppDispatch);

    expect(dispatch).toHaveBeenCalledWith(setLoading(true));
    expect(dispatch).toHaveBeenCalledWith(setError(null));
    expect(dispatch).toHaveBeenCalledWith(setError('Network error'));
    expect(dispatch).toHaveBeenCalledWith(setLoading(false));
  });
});
