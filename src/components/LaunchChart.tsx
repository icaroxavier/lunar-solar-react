import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import type { Launch } from "../store/dashboardSlice";

interface LaunchChartProps {
  launches: Launch[];
}

type ChartRow = { year: string; launches: number };

const LaunchChart = ({ launches }: LaunchChartProps) => {
  const dataByYear = launches.reduce<Record<string, number>>((acc, launch) => {
    const year = new Date(launch.launchDate).getFullYear().toString();
    acc[year] = (acc[year] ?? 0) + 1;
    return acc;
  }, {});

  const chartData: ChartRow[] = Object.entries(dataByYear)
    .map(([year, count]) => ({ year, launches: count }))
    .sort((a, b) => Number(a.year) - Number(b.year));

  return (
    <div style={{ marginTop: 40, width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="launches" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LaunchChart;
