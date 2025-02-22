import { useMemo, useState } from "react";
import { ValueType, NameType } from "recharts/types/component/DefaultTooltipContent";
import {
  ResponsiveContainer,
  BarChart,
  LineChart,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  type TooltipProps,
  Line,
  CartesianGrid,
} from "recharts";
import { BiGitRepoForked } from "react-icons/bi";
import { type DayRange } from "components/shared/DayRangePicker";
import { type StatsType } from "lib/hooks/api/useFetchMetricStats";
import { getCumulativeForksHistogramToDays, getDailyForksHistogramToDays, getTicks } from "lib/utils/repo-page-utils";

import Card from "components/atoms/Card/card";
import Button from "components/shared/Button/button";
import SkeletonWrapper from "components/atoms/SkeletonLoader/skeleton-wrapper";

type ForksChartProps = {
  stats: StatsType[] | undefined;
  total: number;
  syncId: string;
  range: DayRange;
  isLoading: boolean;
};

export default function ForksChart({ stats, total, syncId, range = 30, isLoading }: ForksChartProps) {
  const [category, setCategory] = useState<"daily" | "cumulative">("daily");
  const dailyData = useMemo(() => getDailyForksHistogramToDays({ stats, range }), [stats, range]);
  const cumulativeData = useMemo(
    () => getCumulativeForksHistogramToDays({ stats, total, range }),
    [stats, total, range]
  );
  const bucketTicks = useMemo(() => getTicks({ histogram: dailyData, range }), [dailyData, range]);

  const renderChart = () => {
    switch (category) {
      case "daily":
        return (
          <BarChart data={dailyData} syncId={syncId}>
            <XAxis dataKey="bucket" ticks={bucketTicks} tick={CustomTick} />
            <YAxis interval={1} />
            <Tooltip content={CustomTooltip} filterNull={false} />
            <CartesianGrid vertical={false} strokeDasharray="4" stroke="#E2E8F0" />
            <Bar dataKey="forks_count" fill="#FF5100" />
          </BarChart>
        );
      case "cumulative":
        return (
          <LineChart data={cumulativeData} syncId={syncId}>
            <XAxis dataKey="bucket" tick={false} />
            <YAxis domain={["auto", "auto"]} />
            <Tooltip content={CustomTooltip} filterNull={false} />
            <CartesianGrid vertical={false} strokeDasharray="4" stroke="#E2E8F0" />
            <Line dataKey="forks_count" stroke="#FF5100" />
          </LineChart>
        );
    }
  };

  return (
    <Card className="flex flex-col gap-8 w-full h-full items-center pt-8 px-8">
      <section className="flex flex-col lg:flex-row w-full items-start lg:items-center gap-4 lg:justify-between">
        {isLoading ? (
          <SkeletonWrapper width={100} height={24} />
        ) : (
          <>
            <div className="flex gap-1 items-center w-fit">
              <h3 className="text-sm font-semibold md:text-xl text-slate-800">Forks</h3>
              <p className="text-sm md:text-xl w-fit pl-2 text-slate-500 font-medium">{range} days</p>
            </div>
            <div className="flex gap-4 items-center">
              <Button variant={category === "daily" ? "outline" : "default"} onClick={() => setCategory("daily")}>
                Daily
              </Button>
              <Button
                variant={category === "cumulative" ? "outline" : "default"}
                onClick={() => setCategory("cumulative")}
              >
                Cumulative
              </Button>
            </div>
          </>
        )}
      </section>
      <ResponsiveContainer width="100%" height={300}>
        {isLoading ? <SkeletonWrapper width={100} height={100} /> : renderChart()}
      </ResponsiveContainer>
    </Card>
  );
}

function CustomTooltip({ active, payload }: TooltipProps<ValueType, NameType>) {
  if (active && payload) {
    return (
      <figcaption className="flex flex-col gap-1 bg-white px-4 py-2 rounded-lg border">
        <section className="flex gap-2 items-center">
          <BiGitRepoForked className="fill-sauced-orange" />
          <p>Forks: {payload[0]?.value}</p>
        </section>

        <p className="text-light-slate-9 text-sm">{payload[0]?.payload.bucket}</p>
      </figcaption>
    );
  }
}

function CustomTick({ x, y, payload }: { x: number; y: number; payload: { value: string } }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={20} textAnchor="middle" fill="#94a3b8">
        {payload.value}
      </text>
    </g>
  );
}
