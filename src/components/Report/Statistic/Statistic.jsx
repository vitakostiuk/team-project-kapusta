import React from 'react';
import { BarChart, YAxis, XAxis, Bar, Text } from 'recharts';
import * as Styled from './Statistic.styled';

const data = [
  { label: 'meet', value: 5000 },
  { label: 'fish', value: 3200 },
  { label: 'chicken', value: 4000 },
  { label: 'shirts', value: 1200 },
  { label: 'shoes', value: 2320 },
  { label: 'skirts', value: 2500 },
  { label: 'coffee', value: 120 },
  { label: 'tea', value: 7000 },
  { label: 'beer', value: 800 },
  { label: 'water', value: 1500 },
];

const Statistic = () => {
  const maxValue = data.reduce(
    (acc, el) => (el.value > acc ? el.value : acc),
    0,
  );

  const customTick = (...props) => {
    const { x, y, width, height, type, fill, index, payload } = props[0];
    const axis = (x * payload.value) / maxValue;
    return (
      <Text
        type={type}
        fill={fill}
        width={width * 2}
        height={height}
        x={axis - 70 + index * 18}
        y={y - 12}
      >
        {payload.value}
      </Text>
    );
  };

  return (
    <Styled.Container>
      <BarChart
        width={410}
        height={440}
        data={data.sort((a, b) => b.value - a.value)}
        layout="vertical"
        barSize={15}
        barCategoryGap={200}
        margin={{ bottom: 0, left: 0, top: 10 }}
      >
        <XAxis type="number" hide />
        <YAxis
          yAxisId={0}
          type="category"
          width={50}
          dataKey="label"
          axisLine={false}
          tickLine={false}
          textAnchor="start"
          tick={{
            transform: 'translate(8, -18)',
          }}
          scaleToFit
        />
        <YAxis
          yAxisId={1}
          type="category"
          width={50}
          dataKey="value"
          axisLine={false}
          tickLine={false}
          orientation="right"
          mirror
          tick={customTick}
        />
        <Bar dataKey="value" fill="#FF751D" />
      </BarChart>
    </Styled.Container>
  );
};

export default Statistic;
