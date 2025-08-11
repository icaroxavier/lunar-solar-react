import reducer, { setKpis, setLaunches, setLoading, setError } from './dashboardSlice';

describe('dashboardSlice', () => {
  it('returns initial state', () => {
    const state = reducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({ kpis: [], launches: [], loading: false, error: null });
  });

  it('sets KPIs', () => {
    const state = reducer(undefined, setKpis([{ label: 'Total Launches', value: 3 }]));
    expect(state.kpis).toEqual([{ label: 'Total Launches', value: 3 }]);
  });

  it('sets launches', () => {
    const state = reducer(
      undefined,
      setLaunches([{ missionName: 'CRS-20', rocketName: 'Falcon 9', launchDate: '2020-03-07' }])
    );
    expect(state.launches).toHaveLength(1);
    expect(state.launches[0].missionName).toBe('CRS-20');
  });

  it('sets loading and error', () => {
    let state = reducer(undefined, setLoading(true));
    expect(state.loading).toBe(true);
    state = reducer(state, setError('boom'));
    expect(state.error).toBe('boom');
  });
});
