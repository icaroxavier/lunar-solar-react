import { apolloClient } from "../graphql/client";
import { GET_LAUNCHES } from "../graphql/queries";
import type { LaunchesQueryResult } from "../graphql/queries";
import { setError, setKpis, setLaunches, setLoading } from "./dashboardSlice";
import type { AppDispatch } from "./index";

function computeKpis(launchesCount: number, uniqueRockets: number) {
  return [
    { label: "Total Launches", value: launchesCount },
    { label: "Unique Rockets", value: uniqueRockets }
  ];
}

export const fetchLaunches = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    dispatch(setError(null));

    const { data } = await apolloClient.query<LaunchesQueryResult>({
      query: GET_LAUNCHES,
      fetchPolicy: "network-only"
    });

    const launches = data.launchesPast.map(l => ({
      missionName: l.mission_name,
      rocketName: l.rocket.rocket_name,
      launchDate: l.launch_date_local
    }));

    const uniqueRockets = new Set(launches.map(l => l.rocketName)).size;

    dispatch(setLaunches(launches));
    dispatch(setKpis(computeKpis(launches.length, uniqueRockets)));
  } catch (err) {
    const message = (err as Error).message ?? "Unknown error";
    dispatch(setError(message));
  } finally {
    dispatch(setLoading(false));
  }
};
