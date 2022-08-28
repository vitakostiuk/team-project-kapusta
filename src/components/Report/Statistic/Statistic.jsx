import React from 'react';
import { BarChart, YAxis, XAxis, Bar, Text, Cell, Label } from 'recharts';
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
          tick={{
            transform: `translate(-40, -18)`,
          }}
        />
        <Bar dataKey="value" fill="#FF751D" />
      </BarChart>
    </Styled.Container>
  );
};

export default Statistic;
