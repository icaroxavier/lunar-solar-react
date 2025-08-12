import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './dashboardSlice';

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
  },
});

export type RootState = {
  dashboard: import('./dashboardSlice').DashboardState;
};

export type AppDispatch = typeof store.dispatch;
