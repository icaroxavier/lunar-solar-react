import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchLaunches } from "../store/dashboardThunks";
import KpiCard from "./KpiCard";
import LaunchChart from "./LaunchChart";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { kpis, launches, loading, error } = useAppSelector(s => s.dashboard);

  useEffect(() => {
    dispatch(fetchLaunches());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>SpaceX Dashboard</h1>

      <div style={{ display: "flex", gap: 20 }}>
        {kpis.map(k => (
          <KpiCard key={k.label} label={k.label} value={k.value} />
        ))}
      </div>

      <LaunchChart launches={launches} />
    </div>
  );
};

export default Dashboard;
