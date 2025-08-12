import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Launch {
  missionName: string;
  rocketName: string;
  launchDate: string; // ISO string
}

export interface KpiData {
  label: string;
  value: number;
}

export interface DashboardState {
  kpis: KpiData[];
  launches: Launch[];
  loading: boolean;
  error: string | null;
}

const initialState: DashboardState = {
  kpis: [],
  launches: [],
  loading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setKpis(state, action: PayloadAction<KpiData[]>) {
      state.kpis = action.payload;
    },
    setLaunches(state, action: PayloadAction<Launch[]>) {
      state.launches = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { setKpis, setLaunches, setLoading, setError } = dashboardSlice.actions;
export default dashboardSlice.reducer;
