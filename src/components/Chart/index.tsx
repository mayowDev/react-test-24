import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";
const Chart = ({ data, height }: any) => {
  return (
    <>
      <ResponsiveContainer width="100%" height={`${height}%`}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <Tooltip
            active
            formatter={(value) =>
              `$${new Intl.NumberFormat("en").format(Number(value))}`
            }
            separator="="
            contentStyle={{
              color: "black",
              fontSize: "14px",
              fontWeight: "600",
              //   backgroundColor: "transparent",
              //   border: "none",
            }}
            cursor={false}
            itemStyle={{
              fontSize: "14px",
              fontWeight: "600",
            }}
          />
          <defs>
            <linearGradient id="colorBtc" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FA9D21" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FA9D21" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis ticks={["0"]} dataKey="timestamp" />
          <Area
            strokeWidth={"3px"}
            activeDot
            strokeDashoffset="5 5"
            type="monotone"
            dataKey="BTC"
            stroke="#FA9D21"
            fillOpacity={0.5}
            fill="url(#colorBtc)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;
